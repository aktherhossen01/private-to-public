import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Details from "./Details";
import { useEffect, useState } from "react";


const DetailsShow = () => {
 

    const [card,setCard]= useState({})
    const user = useLoaderData()
    const {id}= useParams()
    const idInt = parseInt(id)
    useEffect(()=>{
        const findUser = user.find(users=>users.id === idInt)
            setCard(findUser)
    },[idInt,user])
console.log(card);
    
    return (
        <div>
            <Navbar></Navbar>
            <Details card={card}></Details>
        </div>
    );
};

export default DetailsShow;