import { useEffect, useState } from 'react'
import Hamsters from './Hamsters'

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

        <Hamsters hamster={hamster} key={hamster.id}/>
				
			
				))
              
            }
		</div>
	)
}

export default Gallery