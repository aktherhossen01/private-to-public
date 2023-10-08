/* eslint-disable react/prop-types */


const Details = ({card}) => {
    const {title,picture,date,cost,description}= card
    return (
        <div className="hero min-h-screen bg-red-50">
  <div className="hero-content rounded-lg bg-slate-200 flex-col lg:flex-row">
    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 ">{description}</p>
      <hr />
      <p className="text-xl font-bold">Conference Date: {date}</p>
      <p  className="text-base font-semibold">Conference Cost: {cost}</p>
    </div>
  </div>
</div>
    );
};

export default Details;