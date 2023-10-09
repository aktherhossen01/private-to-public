import { AiOutlinePhone,AiOutlineMail,AiFillChrome } from 'react-icons/ai';


const ContactFrom = () => {
    return (
       <div>
        <h1 className="text-center font-bold py-8 text-4xl">Our Contact From</h1>
         <div className="lg:flex justify-around  items-center p-4  mt-5 ">
            <div className="border p-5 bg-cyan-700 text-white text-center rounded-xl">
              <div>
              <AiOutlinePhone className='text-4xl mx-auto'></AiOutlinePhone>
              <p className='text-xl font-bold'>+77 0152 2541</p>
              <p className='text-xl font-bold'>+77 0152 2541</p>
              </div>
              <div className='mt-4'>
                <AiOutlineMail className='text-4xl mx-auto'></AiOutlineMail>
                <p className='text-xl font-bold'>akther@hosen.com</p>
                <p className='text-xl font-bold'>sraboni@akter.com</p>
              </div>
              <div className='mt-4'>
                <AiFillChrome className='text-4xl mx-auto'></AiFillChrome>
                <p className='text-xl font-bold'>WWW.Education.com</p>
                <p className='text-xl font-bold'>WWW.Education2.com</p>
              </div>
            </div>
            
            <div className=" border p-5 shadow-lg rounded-lg">
                <h1>Send a Message</h1>
                <div className="lg:flex gap-4">
                <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">First Name</span>
          </label>
            <input className="border-b" type="text" />
            </div>
                <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">Last  Name</span>
          </label>
            <input className="border-b" type="text" />
            </div>
                </div>
                <div className="lg:flex gap-5">
                <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">Email Address</span>
          </label>
            <input className="border-b" type="Email" />
            </div>


                <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">Phone Number</span>
          </label>
            <input className="border-b" type="number" />
            </div>
                </div>
                <p className="py-5">TextBox</p>
<div className=''>
<textarea className="border lg:w-[370px] w-[240px]" name="" id="" cols="50" rows="3"></textarea>

</div>
                
            </div>
                    </div>
       </div>
    );
};

export default ContactFrom;