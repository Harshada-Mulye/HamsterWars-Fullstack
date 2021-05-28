import './Battle.css' 
import { Link } from 'react-router-dom'
import BattleResult from './BattleResult'
import {  useState } from 'react'

const Battledata =({hamster1,hamster2}) =>{
	const [winningHamster, setWinningHamster] = useState("");
    const [losingHamster, setLosingHamster] = useState("");
	const [showPopUp, setShowPopUp] = useState(false);
	
	async function hamsterVote(winner, loser){
		
			const winnerUpdate= {
				wins: winner.wins + 1,
				games: winner.games + 1
			}
			const loserUpdate = {
				defeats: loser.defeats + 1,
				games: loser.games + 1 
			}
			updateHamster(winner.id, winnerUpdate);
			updateHamster(loser.id, loserUpdate);
			postMatch(winner.id, loser.id);
			setWinningHamster(winner)
        setLosingHamster(loser)
		
			
		}
	

	async function updateHamster(id, hamsterChange) {
		const Response = await fetch(`api/hamsters/${id}`, {method: 'PUT', headers: {
			'Content-type': 'application/json'}, body: JSON.stringify(hamsterChange)});
		const Data = await Response.text();
		console.log(Data);
        
	}


async function postMatch(winnerId, loserId) {
		const match = {winnerId, loserId}
		const Response1= await fetch(`api/matches`, {method: 'POST', headers: {
			'Content-type': 'application/json'}, body: JSON.stringify(match)});
		const Data1 = await Response1.text();
		console.log(Data1);
		popUp();
	}
	function popUp() {
        setShowPopUp(true);
        setTimeout(setShowPopUp, 7000);
    }
	

    return(
		<section className="wrapper">
         <p className= "vote">Vote for the cutest hamster</p>
		<section className="random">
			
			 <div onClick={() => hamsterVote(hamster1, hamster2)}>
			 <p><span>{hamster1.name}</span></p>
			<img src={`/assets/${hamster1.imgName}`} alt={hamster1.imgName} className="random-image" />
			
 
					{/*<p>Years: {hamster1.age}</p>
					<p>Games: {games}</p>
					<p>Favfood: {hamster1.favFood}</p>
					<p>Loves: {hamster1.loves}</p>
					<p>Wins: {hamster1.wins}</p>
	<p>Losses: {hamster1.defeats}</p>*/}
            </div>
		  <h1>VS</h1>
		<div onClick={() => hamsterVote(hamster2, hamster1)}>
		<p><span>{hamster2.name}</span></p>
		   <img src={`/assets/${hamster2.imgName}`} alt={hamster2.imgName} className="random-image"/>
                <p></p>
					{/*<p>Years: {hamster2.age}</p>
					<p>Games: {hamster2.games}</p>
					<p>Favfood: {hamster2.favFood}</p>
					<p>Loves: {hamster2.loves}</p>
					<p>Wins: {hamster2.wins}</p>
<p>Losses: {hamster2.defeats}</p>*/}

        </div>
		
            {
                winningHamster && showPopUp
                    ? <BattleResult winner={winningHamster} loser={losingHamster} />
                    : ""
            }
		<Link to='/Battle'>
			 <button className ="battleButton">ADD YOUR HAMSTER</button> 
                </Link>
		  </section>
		  </section>
          
    )


}

export default Battledata