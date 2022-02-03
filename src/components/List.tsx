import React from 'react';
import { Istate as Props } from "../App";
interface Iprops {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const List: React.FC<Iprops> = ({people , setPeople}) => {
  //delete function
  const onDeleteElement = (): void =>{
    setPeople(people.filter((person, index) => index !== 0));
  }
  const renderList = () : JSX.Element[] => {
    return people.map((person , index) => {
    return (
    <li className="List" key={index}>
      <div className="List-header">
        <img src={person.url} alt={person.name} className="List-img"/>
        <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="List-note">{person.note}</p>
        <button className='delete-btn' onClick={onDeleteElement}>Delete</button>
    </li>
        )
        })

  }
  return <ul>
    {renderList()}
  </ul>;
}
export default List;
 