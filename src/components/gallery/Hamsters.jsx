import "./Gallery.css";
import { useState } from "react";
const Hamsters = ({ hamster }) => {

  const [selectedItem, setSelectedItem] = useState("");
  const [winnerhamsters, setWinnerHamsters] = useState([])
  const [message,setMessage]=useState("")
  const [hamsterDeleted, setHamsterDeleted] = useState('');
  //const[hamsterInfo,setHamsterInfo]=useState([])
  async function deleteHamster(id) {
    await fetch(`/api/hamsters/${id}`, { method: "DELETE" })
    
    
	//alert("Hamster deleted succesfully")
	setHamsterDeleted('Hamster  is deleted')
  }

  async function matchWinners(id) {
	const response = await fetch(`/api/matchWinners/${id}`, { method: 'GET' })
	
	const text = await response.text()
	try{
		const data=JSON.parse(text)
		setWinnerHamsters(data)
     console.log(winnerhamsters)
	}
	catch{
		console.log("Hamster has not won any matches yet..")
		setMessage("Hamster has not won any match yet")
  
   }  
   

  }





  


  function changeSelect() {
    if (selectedItem) {
      setSelectedItem("");
    } else setSelectedItem(hamster.id);
  }
  const showHamsters = (
    <div>
		<p className={hamster ? '' : 'hide' }>{hamsterDeleted}</p>
      <ul className="list" 	onMouseEnter={()=>matchWinners(hamster.id)}>
        <li className ="delete"onClick={() => deleteHamster(hamster.id)}>❌</li>
        <li>My Age: {hamster.age}</li>
        <li>My Favourite Food: {hamster.favFood}</li>
        <li>I Love : {hamster.loves}</li>
        <li>
          wins: {hamster.wins} games {hamster.games} defeats {hamster.defeats}
        </li>
	<li> Defetaers {winnerhamsters.map(hamster=>"\n Id:"+hamster.loserId) }</li>

	
	<li>{message}</li>
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