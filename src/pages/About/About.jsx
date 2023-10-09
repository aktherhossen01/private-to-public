
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import CardShow from "./CardShow";


const About = ({children}) => {
    const user = useLoaderData()
    console.log(user);
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center font-bold text-5xl py-6">Our Next Conference Schedule</h1>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 ">
           {user.map(card=><CardShow key={card.id} card={card}></CardShow>)}
           </div>
            <Footer></Footer>
        </div>
    );
};

export default About;