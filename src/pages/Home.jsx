import React from "react"
import myImg from "../assets/myImg.jpg"
function Home(){
 return(
    <div className={`bg-black text-white text-center py-16`} id="home">
        <img src={myImg} alt="" className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
        <h1 className="text-4xl font-bold"> 
            I,m {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-green-400 to-blue-500">Arsalan Majeed</span>
            , Front-end Developer
        </h1>
        <p className="mt-4 text-lg text-gray-300" >I Build modern and responsive web application</p>
        <div className="mt-8 space-x-4">
            {/* <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Contact me</button> */}
            
        </div>

    </div>
 )
}
export default Home;