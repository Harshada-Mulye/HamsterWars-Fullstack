import React from "react";
import "./BattleResult.css";





const BattleResult = ({ winner, loser }) => {


	

  return (
    <div className="result-box">
       <p className="battleheading" ><span>🏆</span>Winner:{winner.name}</p>
      {/* <div className="battleimage">
       <img src={`/assets/${matchwinner.imgName}`} alt={winner.imgName} />
	   
  </div>*/}
      <p>
        Games:{winner.games},wins:{winner.wins},Defeats:
        {winner.defeats}
      </p>
      <br />
      <p className= "battleheading"><span>😞</span>loser:{loser.name} </p>
     {/* <div className="battleimage">
        <img src={`/assets/${loser.imgName}`} alt={loser.imgName} />
</div>*/}
      <p>
        Games:{loser.games},wins:{loser.wins},Defeats:{loser.defeats}
      </p>
    </div>
  );
};

export default BattleResult;
