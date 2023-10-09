import Navbar from "../pages/Navbar/Navbar";


const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
             <div className='text-center'>
            <h1 className='lg:text-[400px] font-bold'>
                404
            </h1>

            <h2 className='text-5xl font-bold'>
                NOT FOUND
            </h2>

        </div>
        </div>
    );
};

export default NotFound;