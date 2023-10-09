import { AiFillFacebook ,AiFillChrome,AiFillYoutube} from "react-icons/ai";



const Team = () => {
    return (
       <div>
        <h1 className="text-center text-4xl font-bold py-6">Who Organized our conference</h1>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
          <div className="mx-auto shadow-xl rounded-lg p-9 py-6 space-y-5">
            <img className='rounded-full  ' src="https://i.ibb.co/cr1xtgD/download454-3.jpg" alt="" />
            <p className="text-center font-bold">Name: Jhonkar Mahabul</p>
            <p className="text-center font-bold">CEO : Programming Hero</p>
            <div className="flex justify-between items-center gap-3 mt-5">
            <a href="https://www.facebook.com/groups/programmingherocommunity" target="_blank "><AiFillFacebook className="text-4xl text-blue-500 hover:text-blue-700"></AiFillFacebook></a>
            <a href="https://www.programming-hero.com/" target="_blank "><AiFillChrome  className="text-4xl text-purple-500 hover:text-purple-600"></AiFillChrome></a>
            <a href="https://www.programming-hero.com/" target="_blank "><AiFillYoutube  className="text-4xl text-red-400 hover:text-red-600"></AiFillYoutube></a>

            </div>
            </div>  
            <div className="mx-auto shadow-xl rounded-lg p-9 py-6 space-y-5">
            <img className='rounded-full  ' src=" https://i.ibb.co/30kWN9C/download.jpg" alt="" />
            <p className="text-center font-bold">Name: Sumit Sha</p>
            <p className="text-center font-bold">CEO : Learn with sumit</p>
            <div className="flex justify-between items-center gap-3 mt-5">
            <a href="https://www.facebook.com/groups/programmingherocommunity" target="_blank "><AiFillFacebook className="text-4xl text-blue-500 hover:text-blue-700"></AiFillFacebook></a>
            <a href="https://www.programming-hero.com/" target="_blank "><AiFillChrome  className="text-4xl text-purple-500 hover:text-purple-600"></AiFillChrome></a>
            <a href="https://www.programming-hero.com/" target="_blank "><AiFillYoutube  className="text-4xl text-red-400 hover:text-red-600"></AiFillYoutube></a>

            </div>
            </div>  
            <div className="mx-auto shadow-xl rounded-lg p-9 py-6 space-y-5">
            <img className='rounded-full' src="https://i.ibb.co/6yV68vV/download-2.jpg" alt="" />
            <p className="text-center font-bold">Name: Anisul islam</p>
            <p className="text-center font-bold">CEO : learn with anisul islam</p>
            <div className="flex justify-between items-center gap-3 mt-5">
            <a href="https://www.facebook.com/groups/programmingherocommunity" target="_blank "><AiFillFacebook className="text-4xl text-blue-500 hover:text-blue-700"></AiFillFacebook></a>
            <a href="https://www.programming-hero.com/" target="_blank "><AiFillChrome  className="text-4xl text-purple-500 hover:text-purple-600"></AiFillChrome></a>
            <a href="https://www.programming-hero.com/" target="_blank "><AiFillYoutube  className="text-4xl text-red-400 hover:text-red-600"></AiFillYoutube></a>

            </div>
            </div>  
        </div>
       </div>
      
       
    );
};

export default Team;