import { useEffect, useState } from 'react'


const Gallery = () => {
	const [hamsters, setHamsters] = useState([])

	useEffect(() => {
		async function get() {
			const response = await fetch('/api/gallery', { method: 'GET' })
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
						Bild på produkt <br/>
						{hamster.name} <br/>
						<button> Köp! </button>
					</div>
				))
				
			}
		</div>
	)
}

export default Gallery