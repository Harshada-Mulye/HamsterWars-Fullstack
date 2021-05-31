import React, { useState, useEffect } from 'react'
import './Statistics.css'
const Statistics = () => {
  const [winners, setWinners] = useState([])  
  const [losers, setLosers] = useState([])  
  useEffect(()=>{
    getWinners();
    getLosers();
  },[])
  
  async function getWinners() {
    const response = await fetch('/api/winners', { method: 'GET' })
    const data = await response.json()
    console.log(data)
    setWinners(data)
    // Använd "mountedRef" här
  }
 
  async function getLosers() {
    const response = await fetch('/api/losers', { method: 'GET' })
    const data1 = await response.json()
    console.log(data1)
    setLosers(data1)
    // Använd "mountedRef" här
  }
  
 
  
 return (
  <div className = "statWrapper">
    <div><h1>Top five winners</h1>
   <ul>
  {winners.map(winner=> {
    return (
      <li key={winner.id}>
        {winner.name} has won        {winner.wins} 
      </li>
    )
  })}
</ul>
   </div>
    <div><h1>Top five losers</h1>
    <ul>
  {losers.map(loser=> {
    return (
      <li key={loser.id}>
        {loser.name} has lost      {loser.defeats} 
      </li>
    )
  })}
</ul>
      </div>
    

  </div>


)
}

export default Statistics;