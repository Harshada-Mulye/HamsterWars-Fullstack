import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  //const history = useHistory();
  const [hamsterUploaded, setHamsterUploaded] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loves, setLoves] = useState("");
  const [favFood, setFavfood] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [ageTouched, setAgeTouched] = useState(false);
  const [favoriteFoodTouched, setFavoriteFoodTouched] = useState(false);
  const [lovesTouched, setLovesTouched] = useState(false);
  let [nameClass, nameError] = nameTouched ? validateName(name) : ["", ""];
  let [ageClass, ageError] = ageTouched ? validateAge(age) : ["", ""];
  let [favoriteFoodClass, favoriteFoodError] = favoriteFoodTouched
    ? validateFavoriteFood(favFood)
    : ["", ""];
  let [lovesClass, lovesError] = lovesTouched ? validateLoves(loves) : ["", ""];

  let formIsValid =
    nameTouched &&
    ageTouched &&
    favoriteFoodTouched &&
    lovesTouched &&
    nameError === "" &&
    ageError === "" &&
    favoriteFoodError === "" &&
    lovesError === "";

  function validateName(name) {
    if (name.length > 0) {
      return ["valid", ""];
    } else {
      return ["invalid", `Name is required`];
    }
  }
  function validateAge(age) {
    let ageAsNumber = Number(age);
    if (isNaN(ageAsNumber) || age === "") {
      return ["invalid", "Age is required"];
    } else {
      return ["valid", ""];
    }
  }
  function validateFavoriteFood(favoriteFood) {
    if (favoriteFood.length > 0) {
      return ["valid", ""];
    } else {
      return ["invalid", `Favourite food is required`];
    }
  }

  function validateLoves(loves) {
    if (loves.length > 0) {
      return ["valid", ""];
    } else {
      return ["invalid", `Favourite thing is required`];
    }
  }

  async function uploadHamster() {
    const newHamster = {
      name: name,
      age: Number(age),
      loves: loves,
      favFood: favFood,
      imgName: "hamster-1.jpg",
      games: 0,
      wins: 0,
      defeats: 0,
    };
    console.log("Upload hamster", newHamster);
    setHamsterUploaded(`Your  hamster ${name} is ready to battle!`);

    const url = "/api/hamsters";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(newHamster),
    });

    console.log(await response.text());
  }

  return (
    <div>
      <main className="Form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <label>Name</label>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              onBlur={() => setNameTouched(true)}
              className={nameClass}
            ></input>
            <div className="error">{nameError}</div>
          </div>
          <div>
            <label>Age</label>
            <input
              value={age}
              type="text"
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age in years"
              onBlur={() => setAgeTouched(true)}
              className={ageClass}
            ></input>
            <div className="error">{ageError}</div>
          </div>
          <div>
            <label>Loves</label>

            <input
              value={loves}
              type="text"
              onChange={(e) => setLoves(e.target.value)}
              placeholder="What does the hamster love to do?"
              onBlur={() => setLovesTouched(true)}
              className={lovesClass}
            ></input>
            <div className="error">{lovesError}</div>
          </div>
          <div>
            <label>Favourite food</label>
            <input
              value={favFood}
              type="text"
              onChange={(e) => setFavfood(e.target.value)}
              placeholder="Enter hamsters favourite food"
              onBlur={() => setFavoriteFoodTouched(true)}
              className={favoriteFoodClass}
            ></input>
            <div className="error">{favoriteFoodError}</div>
          </div>
        </form>
        <br />
        <button
          onClick={(e) => uploadHamster()}
          className="primary"
          disabled={!formIsValid}
        >
          Add new hamster
        </button>
        <p className={hamsterUploaded ? "" : "hide"}>{hamsterUploaded}</p>
      </main>
    </div>
  );
};

export default Upload;
