
function Card(){
    return(
        <div className="card font-sans bg-white flex-col justify-center items-center p-6 rounded-3xl">
            <img className=" rounded-3xl w-72 shadow-xl " src="wa.jpg" alt="water" />
            <h1 className=" text-3xl py-1 font-bold drop-shadow-2xl ">Water Reminder !!</h1>
            <h3 className="font-normal text-sm py-1 -px-2">App that reminds every lazy head to drink water</h3>
            <h2 className="  text-sky-700 tracking-widest text-lg font-semibold underline underline-offset-4">Features</h2>
           <ul className="text-xs p-2 text-[#0B580A] font-medium list-disc pl-3 ">
            <li>Reminder to drink water on time</li>
            <li>Customize your drink</li>
            <li>Various types of drinks</li>
           </ul>
           <button className="font-medium text-sm bg-gradient-to-r from-[#37DA1C] to-[#468D3B] m-4 p-3 rounded-2xl mt-4 text-white">GET THE APP NOW</button>

        </div>
    );
}
export default Card