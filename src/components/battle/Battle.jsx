import React, { useState, useEffect } from 'react'


import './Battle.css' 


const Battle = () => {

    const [hamster1, setHamster1] = useState('')    
    const [hamster2, setHamster2] = useState('')

    useEffect(() => {  

        try{
        async function fetchData() {
            const response = await fetch('/api/hamsters/random', { method: 'GET' })
			const data = await response.json()
			// Använd "mountedRef" här
			setHamster1(data)
        
        }

        async function fetchData2() {
            const data = await fetch('/api/hamsters/random',{ method: 'GET' })
            const data1 = await data.json()
            
            setHamster2(data1)
        
        }
        fetchData()
        fetchData2()
        
        }
        catch(err){
            console.error(err);
        }

    }, [])

    


    return(
		<section className="wrapper">
		<section className="random">
			 <div>
			<img src={`/assets/${hamster1.imgName}`} alt={hamster1.imgName} className="random-image"/>
  <p><span>{hamster1.name}</span></p>
					<p>Years: {hamster1.age}</p>
					<p>Games: {hamster1.games}</p>
					<p>Favfood: {hamster1.favFood}</p>
					<p>Loves: {hamster1.loves}</p>
					<p>Wins: {hamster1.wins}</p>
					<p>Losses: {hamster1.defeats}</p>
					</div>
		  <h1>VS</h1>
		<div>
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





export default Battle