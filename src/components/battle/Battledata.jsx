import './Battle.css' 
import { Link } from 'react-router-dom'
import BattleResult from './BattleResult'
import {  useState } from 'react'

const Battledata =({hamster1,hamster2,fetchData}) =>{
	const [winningHamster, setWinningHamster] = useState("");
    const [losingHamster, setLosingHamster] = useState("");
	const [showPopUp, setShowPopUp] = useState(false);
	
	async function hamsterVote(winner, loser){

		if (hamster1.id === hamster2.id) {
			fetchData()
		}
			const winnerUpdate= {
				wins: winner.wins + 1,
				games: winner.games + 1
			}
			const loserUpdate = {
				defeats: loser.defeats + 1,
				games: loser.games + 1 
			}
			Promise.all([
			updateHamster(winner.id, winnerUpdate),
			updateHamster(loser.id, loserUpdate),
			postMatch(winner.id, loser.id),
			
		]).then(() => {
			console.log("Winner loser updated")
			setWinningHamster(winner)
        setLosingHamster(loser)
		popUp();
			
		
			
	})
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
		
	}
	function popUp() {
	
        setShowPopUp(true);
    //  setTimeout(setShowPopUp, 7000);
    }
	

    return(
		<main>
		<section className="wrapper">

         <h1 className="vote">VOTE FOR CUTEST HAMSTER</h1>
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

			<h1 className ="vsclass"><span className ="glove1">🥊</span>VS <span className ="glove2">🥊</span></h1>
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
                winningHamster && losingHamster&&showPopUp
                    ? <BattleResult winner={winningHamster} loser={losingHamster} />
                    : ""
            }
			
			
			</section>
		  <div className="buttonwrapper">
			  <nav>
		<Link to='/Battle'>
			 <p onClick={()=>{fetchData();
			 setShowPopUp(false)}}>Next Battle</p> 
                </Link>
				</nav>
				</div>
		 
		  </section>
          </main>
    )


}

export default Battledata