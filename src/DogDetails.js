import {useParams, Redirect} from "react-router-dom";


/** DogDetails component
 *  
 *  Props:
 *  - getDog - function to get info given a dog name
 * 
 * Params:
 *  - name - dog name
 * 
 * App -> DogDetails
 */

 function DogDetails({getDog}) {
  const { name } = useParams();

  let dog = getDog(name);

  if (dog === undefined) {
    return <Redirect to="/dogs"/>
  }

  function renderFacts() {
    return dog.facts.map( (f, idx) => 
      <li key={idx}>{f}</li>)
  }

  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <p>Age is: {dog.age}</p>
      <img src={dog.src} alt={dog.name}/>
      <ul>Facts:
        {renderFacts()}
      </ul>
    </div>
  )
 }

 export default DogDetails;