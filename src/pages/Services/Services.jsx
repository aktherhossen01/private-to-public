/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Services = ({user}) => {
    const {id,description,name,title,picture}= user
    return (
      <div>
        
          <div className="card  bg-base-100 shadow-xl">
  <figure><img className="rounded max-w-xs" src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-3xl">{title}</h2>
    <p className="text-xl font-bold">presentation by : {name}</p>
    <p className="text-xl font-bold ">Conference Description :</p>
    <p>{description.length>150? <p>{description.slice(0,200)}<Link to={`/user/${id}`} className="text-red-400 underline font-semibold ml-4">Red More</Link></p>:<p>{description}</p>}</p>
    
  </div>
</div>
      </div>
    );
};

export default Services;