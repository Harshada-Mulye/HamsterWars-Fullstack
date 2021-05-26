import React, { useState } from 'react';
import './Upload.css'

const Upload = () => {
    //const history = useHistory();
   
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [loves, setLoves] = useState('');
    const [favFood, setFavfood] = useState('');



    async function uploadHamster() {
        const newHamster = {
       
            name: name,
            age: Number(age),
            loves: loves,
            favFood: favFood,
            imgName: "hamster-1.jpg",
            games: 0,
            wins: 0,
            defeats: 0
        }
		console.log("Upload hamster",newHamster)

        const url = '/api/hamsters'
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
			
            body: JSON.stringify(newHamster)
        })
        
        console.log(await response.text())
    }

    return (
        <div>
            <main className="Form">
                <form onSubmit={e => { e.preventDefault(); }}>
					<div>
                    <label>Name</label>
                    <input value={name} type="text" onChange={e => setName(e.target.value)} placeholder="Enter name"></input>
					</div>
					<div>
                    <label>Age</label>
                    <input value={age} type="text" onChange={e => setAge(e.target.value)} placeholder="Enter age in years"></input>
					</div>
					<div>
                    <label>Loves</label>
					
					 <input value={loves} type="text" onChange={e => setLoves(e.target.value)} placeholder="What does the hamster love to do?"></input>
					 </div>
					 <div>
                    <label>Favourite food</label>
                    <input value={favFood} type="text" onChange={e => setFavfood(e.target.value)} placeholder="Enter hamsters favourite food"></input>
					</div>
                </form>
				<br/>
                <button onClick={e => uploadHamster()}>Add new hamster</button>
            </main>
        </div >
    )
}

export default Upload;