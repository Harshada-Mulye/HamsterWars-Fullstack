import './Battle.css' 

const Battledata =({hamster1,hamster2}) =>{
	
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

    return(
		<section className="wrapper">
		<section className="random">
			 <div onClick={() => hamsterVote(hamster1, hamster2)}>
			<img src={`/assets/${hamster1.imgName}`} alt={hamster1.imgName} className="random-image" />
 <p><span>{hamster1.name}</span></p>
					<p>Years: {hamster1.age}</p>
					<p>Games: {hamster1.games}</p>
					<p>Favfood: {hamster1.favFood}</p>
					<p>Loves: {hamster1.loves}</p>
					<p>Wins: {hamster1.wins}</p>
					<p>Losses: {hamster1.defeats}</p>
            </div>
		  <h1>VS</h1>
		<div onClick={() => hamsterVote(hamster2, hamster1)}>
		   <img src={`/assets/${hamster2.imgName}`} alt={hamster2.imgName} className="random-image"/>
 <p><span>{hamster2.name}</span></p>
					<p>Years: {hamster2.age}</p>
					<p>Games: {hamster2.games}</p>
					<p>Favfood: {hamster2.favFood}</p>
					<p>Loves: {hamster2.loves}</p>
					<p>Wins: {hamster2.wins}</p>
					<p>Losses: {hamster2.defeats}</p>
        </div>
		  </section>
		  </section>
          
    )


}

export default Battledata
