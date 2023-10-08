// import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";


const Home = () => {
    const users = useLoaderData()
    // console.log(user);
    return (
       <div>
         <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            {/* <Banner></Banner> */}
            <h1 className="text-4xl text-center font-bold py-4">Our pad Educational Conferences</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-4 grid-cols-1 mx-auto">
        {users.map(user=><Services key={user.id} user={user}></Services>)}
        </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Home;