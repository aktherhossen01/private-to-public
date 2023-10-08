
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const About = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center font-bold text-5xl">World Educational Conference Hall</h1>
            <Footer></Footer>
        </div>
    );
};

export default About;