import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";


const Service = () => {
    return (
     <div>
        <Navbar></Navbar>
        <h1 className="text-center design-color py-5 text-4xl font-bold">If you are worried about your career, <br /> below are some options  choose one from them</h1>
           <div className=" mx-auto container grid gap-5 py-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
           <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title font-bold">Web Development!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions ">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title font-bold">App Development!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions ">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title font-bold">Pharmacist!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions ">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title font-bold">Doctor!!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions ">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div> <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title font-bold">Backend Development!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions ">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title font-bold">Web Development!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions ">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        <Footer></Footer>
     </div>
    );
};

export default Service;