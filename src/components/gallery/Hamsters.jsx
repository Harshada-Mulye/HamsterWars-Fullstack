import "./Gallery.css";
import { useState } from "react";
const Hamsters = ({ hamster }) => {
  const [state, setState] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  async function deleteHamster(id) {
    await fetch(`/api/hamsters/${id}`, { method: "DELETE" }).then(() =>
      setState({ status: "Delete successful" })
    );
    
	alert("Hamster deleted succesfully")
  }
  function changeSelect() {
    if (selectedItem) {
      setSelectedItem("");
    } else setSelectedItem(hamster.id);
  }
  const showHamsters = (
    <div>
      <ul className="list">
        <li className ="delete"onClick={() => deleteHamster(hamster.id)}>❌</li>
        <li>My Age: {hamster.age}</li>
        <li>My Favourite Food: {hamster.favFood}</li>
        <li>I Love : {hamster.loves}</li>
        <li>
          wins: {hamster.wins} games {hamster.games} defeats {hamster.defeats}
        </li>
      </ul>
    </div>
  );
  const showImage = (
    <div>
      <img
        src={`/assets/${hamster.imgName}`}
        alt={hamster.name}
        className="hamster-image"
      />
    </div>
  );
  return (
    <div onMouseEnter={changeSelect} onMouseLeave={changeSelect}>
      {selectedItem ? <div className="name">{hamster.name}</div> : showImage}
    <div>{selectedItem ? showHamsters : <span></span>}</div>
    </div>
  );
};
export default Hamsters;