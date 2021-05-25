import './Gallery.css' 
const Hamsters=({hamster})=>{
	return (

   <div className="Gallery">
   <main>
 <div >

 <div className="list">



 <span role="img" className="delete"aria-label="cross">❌</span>


  <img src={`/assets/${hamster.imgName}`} alt={hamster.imgName} className="hamster-image"/>
  <p><span>{hamster.name}</span></p>
					<p>Years: {hamster.age}</p>
					<p>Games: {hamster.games}</p>
					<p>Favfood: {hamster.favFood}</p>
					<p>Loves: {hamster.loves}</p>
					<p>Wins: {hamster.wins}</p>
					<p>Losses: {hamster.defeats}</p>
	</div>
	</div>
	</main>
	</div>

	)
}
export default Hamsters