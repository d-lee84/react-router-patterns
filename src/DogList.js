import {Link} from "react-router-dom";


/** DogList component
 *  
 *  Props:
 *  - dogs: Array of dog objects
 *    [{name, age, src, facts}, ...]
 *      Where facts = ["fact1", ...]
 */

function DogList({dogs}) {
  
  let dogListItems = dogs.map(d => (
    <li key={d.name}>
      <Link to={`/dogs/${d.name}`}>{d.name}</Link>
    </li>
  ))

  return (
    <div>
      <ul>{dogListItems}</ul>
    </div>
  )
}

export default DogList