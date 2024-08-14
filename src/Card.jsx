
function Card(){
    return(
        <div className="card font-sans bg-white p-6 rounded-3xl mx-auto sm:flex sm:gap-4 sm:justify-center sm:justify-items-center sm:items-center sm:mx-50 md:mx-12 lg:mx-44  xl:mx-80 xl:gap-6">
            <img className=" rounded-3xl w-72 shadow-xl shadow-slate-500/50" src="wa.jpg" alt="water"/>
            <div>
            <h1 className=" text-3xl pt-3 font-bold drop-shadow-2xl bg-gradient-to-r from-[#47b87f] to-[#149c18] bg-clip-text text-transparent  ">Water Reminder !!</h1>
            <h3 className="bg-gradient-to-r from-[#2FB21A] to-[#2C881D] bg-clip-text text-transparent font-medium text-sm py-1 -px-2 ">App that reminds every lazy head to drink water</h3>
            <h2 className="text-sky-700 tracking-widest text-lg font-semibold underline underline-offset-4 drop-shadow-md text-shadow">Features</h2>
           <ul className="text-xs p-2 text-[#0B580A] font-medium list-disc pl-3 ">
            <li>Reminder to drink water on time</li>
            <li>Customize your drink</li>
            <li>Various types of drinks</li>
           </ul>
           <button className=" font-medium text-sm bg-[#43a335] m-4 p-3 rounded-2xl mt-4 text-white shadow-lg shadow-[#468D3B] text-shadow-md hover:bg-[#56ca44] ">GET THE APP NOW</button>
           </div>
</div>
        
    );
}
export default Card