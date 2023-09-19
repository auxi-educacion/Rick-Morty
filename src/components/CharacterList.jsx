/* eslint-disable react/prop-types */
import { useEffect,useState } from "react"
import Character from "./Character"

function NavPage(props){
  return(
    <header className="d-flex justify-content-between aling-items-center">
      <p>Page: {props.page}</p>
      <button className="btn btn-primary btn-lg"
        onClick={()=>props.setPage(props.page + 1)}
      >
        {props.page + 1}
      </button>
    </header>
  )
}
function NavPage2(props){
  return(
    <header className="d-flex justify-content-between aling-items-center">
      <p>Page: {props.page}</p>
      <button className=" btn btn-primary btn-lg"
        onClick={()=>props.setPage(props.page - 1)}
      >
        {props.page - 1}
      </button>
    </header>
  )
}
const CharacterList = () => {  
  const [characters, setCharacters]=useState([])
  const [loading, setLoading]=useState(true)
  const [page, setPage]=useState(1)

  useEffect(()=>{
  async function techData() {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await response.json();
    setLoading(false)
    setCharacters(data.results)
  }
    techData()
},[page])
  
  return (

    <div className="container">
      <NavPage page={page} setPage={setPage}/>
      <div className="row">
        {loading ? (<h2>Loading..</h2>):(
        characters.map((character) => {
          return(
           <div key={character.id} className="col-md-4"> 
            <Character   character={character}/>
           </div>
          )
        })
      )}
      <NavPage2 page={page} setPage={setPage}/>
      </div>
      <div className="m-5"> </div>
    </div>
  )
}

export default CharacterList
