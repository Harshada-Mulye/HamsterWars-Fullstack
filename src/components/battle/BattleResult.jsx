import React from 'react';
//import './battleResult.css';


const BattleResult = ({winner,loser}) => {
   
    return (
        
        <div className="result-box">
            
                <p>Winner:{winner.name},Games:{winner.games}</p>
                
                <p>loser:{loser.name},Games:{loser.games} </p>
                

            </div>
          
    )

}




export default BattleResult;