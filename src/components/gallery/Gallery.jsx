import { useEffect, useState } from 'react'


const Gallery = () => {
	const [hamsters, setHamsters] = useState([])

	useEffect(() => {
		async function get() {
			const response = await fetch('/api/hamsters', { method: 'GET' })
			const data = await response.json()
			// Använd "mountedRef" här
			setHamsters(data)
			// OBS! Bättre att hämta datan i App-komponenten, eftersom den alltid är MOUNTED
		}
		get()
	}, [])


	return (
		<div>
			{ hamsters.map(hamster => (

     
				
					<div key={hamster.id}>

						<img src={`static/assets/${hamster.imgName}`} alt={hamster.imgName} />
                       
					<br/>
						{hamster.name} <br/>
						<button> Köp! </button>
					</div>
				))
				
			}
		</div>
	)
}

export default Gallery