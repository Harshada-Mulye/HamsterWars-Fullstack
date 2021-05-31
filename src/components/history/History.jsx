import React, { useState, useEffect } from 'react'

const History = () => {
  const [latestmatches, setLatestMatches] = useState([])  
  
  useEffect(()=>{
    getMatches();
   
  },[])
  
  async function getMatches() {
    const response = await fetch('/api/matches', { method: 'GET' })
    const data = await response.json()
    console.log(data)
    setLatestMatches(data)
    // Använd "mountedRef" här
  }
  return (
	<div className = "statWrapper">
	  <div><h1>Latest Matches</h1>
	 <ul>
	{latestmatches.map(match=> {
	  return (
		<li key={match.id}>
		  {match.winnerId}        {match.loserId} 
		</li>
	  )
	})}
  </ul>
	 </div>
	 </div>

  )}
export default History;