import img from '../../assets/cover-photo.jpg'

const Banner = () => {
    return (
        <div className=" min-h-screen ">
  <div className="hero-content text-center">
    <img className='w-full' src={img} alt="" />
  </div>
</div>
    );
};

export default Banner;