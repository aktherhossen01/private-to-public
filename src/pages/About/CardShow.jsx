/* eslint-disable react/prop-types */


const CardShow = ({card}) => {
    const {date,description,name,title,picture}=card
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure><img className="max-w-xs rounded-md" src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h1>Author Name: {name}</h1>
    <p>{description}</p>
    <p>{date}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardShow;