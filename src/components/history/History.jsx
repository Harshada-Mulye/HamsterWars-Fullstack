import React, { useState, useEffect } from "react";
import Hamsters from "../gallery/Hamsters";

const History = ({hamsters}) => {
  const [latestmatches, setLatestMatches] = useState([]);
  


  useEffect(() => {
	async function getMatches() {
		const response = await fetch("/api/matches", { method: "GET" });
		const data = await response.json();
		console.log(data);
		console.log(data.length);
	  
		setLatestMatches(data.slice(Math.max(data.length - 5, 0)));
	  }
    getMatches();
  }, []);

  
    console.log("latestmatches",latestmatches);
	const tempWinnerId=[];

	latestmatches.forEach(match => {
		const winnerId = match.winnerId;
		tempWinnerId.push(winnerId);
	})
	console.log("tempWinnerrID",tempWinnerId)


	let winnersInfo=[];

	winnersInfo=hamsters.filter((hamster)=>tempWinnerId.includes(hamster.id))
	
  	
	
	const tempLoserId=[];

	latestmatches.forEach(match => {
		const loserId = match.loserId;
		tempLoserId.push(loserId);
	})
	console.log("temLoserId",tempLoserId)



	let losersInfo=[];

	losersInfo=hamsters.filter((hamster)=>tempLoserId.includes(hamster.id))
    


 
  return (
   
      <div>
        <h1>Latest Matches</h1>
		<div class="history-wrapper">
			<div>
        <ul>


		      {winnersInfo.map((match) => {
            return (
              <li key={match.id}>
                Winner name- {match.name} 
				<img
        src={`/assets/${match.imgName}`}
        alt={match.name}
        className="hamster-image"
	 
      />
	  
              </li>
            );
          })
		  }
        </ul>
		</div>
		<div>
		<ul>


{losersInfo.map((match) => {
return (
<li key={match.id}>
  loser name- {match.name} 
  <img
        src={`/assets/${match.imgName}`}
        alt={match.name}
        className="hamster-image"
	
      />
	  
</li>
);
})
}
</ul>
</div>
      </div>
    </div>

  );
};
export default History;
