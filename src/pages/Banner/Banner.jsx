import img from '../../assets/cover-photo.jpg'

const Banner = () => {
    return (
       <div className='py-10'>
         <div className=" bg-slate-100 rounded-md p-9 lg:flex justify-between items-center">
          <div>
            <h1 className='text-2xl py-3 font-bold'>Hello Word</h1>
            <h1 className='text-4xl py-3 font-extrabold'>This Is Our Educational <span className='design-color'>Conference Hall</span></h1>
            <p className='py-3 text-lg font-semibold'>Please Join us this conference</p>
            <button className='btn btn-primary mr-4 font-bold py-2'>Start 11:00</button>
            <button className='btn btn-secondary font-bold '>Close  8:00</button>
          </div>
  <div className="hero-content text-center">
    <img className='w-full rounded-2xl' src={img} alt="" />
  </div>
</div>
       </div>
    );
};

export default Banner;