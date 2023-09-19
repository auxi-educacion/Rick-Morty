/* eslint-disable react/prop-types */
const Character = ({character}) => {
  return (
    <div className="text-center p-5 card-body p-5">
      <h3>{character.name}</h3>
      <img className="img-fluid" src={character.image} alt={character.name} />
      <p>{character.origin.name}</p>
    </div>
  )
}

export default Character
