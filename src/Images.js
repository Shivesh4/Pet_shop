import React from "react";
import b1 from '../src/b1.png'
import b2 from '../src/b2.png'
import b5 from '../src/b5.png'
import arrow from '../src/arrow.png'
import b6 from '../src/b6.png'
import b7 from '../src/b7.png'
function Images()
{
    return (
        <>
            <div className="flex-row relative justify-between w-full border h-[700px]">
                <img className="absolute top-8 right-28"  src={b1} alt="B1 image"></img>
                <img className= "absolute top-28" src={b2} alt="B2 image"></img>
                <img className = "absolute top-5 left-56 h-32 w-32 blur-sm" src={b1} alt="B1 image"></img>
                <img className="absolute top-96 w-44 h-44" src={b6} alt="B6 image"></img>
                <img className="absolute top-96 left-[1302px] w-44 h-44" src={b7} alt="B6 image"></img>

                <div className="flex flex-row justify-center items-center h-screen">
                <h1 className="text-4xl font-bold mb-4 text-center">
                    <span>Disc</span>
                    <img src={b5} alt="B-5 image" className="inline-block h-6 w-6"/>
                    <span>ver Unique</span>
                    <span className="block">Pet Breeds From World</span>
                    <span className="block">in Petro</span>
                    <p className="mb-8 mt-8 text-lg font-sans font-thin">
                        <p>We are providing best quality of trained pets to our customer worldwide, you can</p>
                        <p> find it easily and quickly on our platform. Get your favourite one from us.</p>
                    </p>
                    <button className="text-xl text-white py-1 px-4 rounded-full border-2 flex items-center ml-56">
                        <img className="w-6 h-6 mr-2" src={arrow}></img>
                        <span className="flex items-center">Get Started</span>
                    </button>
                </h1>
                </div>  
                <marquee className="absolute bottom-8 w-full border border-gray-400 rounded-lg flex items-center rotate-1" width="60%" height="80px" behavior="scroll" direction="left" scrollamount="12">
                <img src={b1} alt="Image 1" className="inline-block h-8 mr-2" />
                <span>This is a sample text that scrolls left. </span>
                <img src={b2} alt="Image 2" className="inline-block h-8 mr-2" />
                <span>Another text scrolling.</span>
                </marquee>              
            </div>
        </>
    );
}

export default Images;