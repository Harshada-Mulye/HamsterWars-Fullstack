var admin = require("firebase-admin");

//const serviceAccount = require("./firebase-private-key.json");

/*let serviceAccount;
try {
  serviceAccount = require("./firebase-private-key.json");
} catch {
  serviceAccount = JSON.parse(process.env.PRIVATE_KEY);
}*/
let serviceAccount;
if (process.env.PRIVATE_KEY) {
  // På Heroku
  serviceAccount = JSON.parse(process.env.PRIVATE_KEY);
} else {
  // Lokalt (på min dator)
  serviceAccount = require("./firebase-private-key.json");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

function getDatabase() {
  return admin.firestore();
}
const db = getDatabase();

const getCollection = async (coll) => {
  const collectionRef = db.collection(coll);
  const snapshot = await collectionRef.get();

  let items = [];

  if (snapshot.empty) {
    return items;
  }

  snapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    items.push(data);
  });

  return items;
};

const getDocByID = async (coll, id) => {
  try {
    const docRef = await db.collection(coll).doc(id).get();
    if (!id) {
      return 400;
    }

    if (!docRef.exists) {
      return 404;
    }

    const data = docRef.data();
    data.id = docRef.id;
    return data;
  } catch (error) {
    return 500;
  }
};

const postToCollection = async (coll, obj) => {
  try {
    if (obj.constructor === Object && Object.keys(obj).length === 0) {
      return 400;
    }

    const docRef = await db.collection(coll).add(obj);

    if (typeof docRef === "number") {
      res.sendStatus(docRef);
      return;
    }
    return docRef.id;
  } catch (error) {
    return 500;
  }
};

const putToCollection = async (col, id, obj) => {
  try {
    const docRef = await db.collection(col).doc(id).get();
    if (!docRef.exists) {
      return 404;
    }
    if (!id) {
      return 400;
    }
    if (obj.constructor === Object && Object.keys(obj).length === 0) {
      return 400;
    }
    await db.collection(col).doc(id).set(obj, { merge: true });
    return 200;
  } catch (error) {
    console.log(error);
    return 500;
  }
};
const deleteFromCollection = async (col, id) => {
  try {
    const docRef = await db.collection(col).doc(id).get();

    if (!docRef.exists) {
      return 404;
    }

    if (!id) {
      return 400;
    }
    await db.collection(col).doc(id).delete();
    return 200;
  } catch (error) {
    return 500;
  }
};

module.exports = {
  getDatabase,
  getCollection,
  getDocByID,
  postToCollection,
  putToCollection,
  deleteFromCollection,
};