import React from 'react'
import Lottie from 'lottie-react'
import Polite from "../../assets/lottie/Polite Chicky.json";
import seacondlottie from "../../assets/lottie/AnimatioN.json"
import { Link } from 'react-router-dom';
import preloader from '../../assets/lottie/Animation3.json'
import water from "../../assets/lottie/waterlevel.json"
import sunset from "../../assets/lottie/sunset.json"
import camel from "../../assets/lottie/camel.json"
import jhon from "../../assets/lottie/deer.json"

const Laniamtion = () => {
    return (
        <>
            <div className='bg-red-500 h-[730px]  container'>
                <Link to={"/seacond"}>
                    <button className='p-[20px] rounded-xl border-[2px] text-white'>Click Me</button>
                </Link>
                <div className=''>
                    <div className='flex items-center '>
                        <Lottie animationData={Polite} className='w-1/4 h-1/4' />
                        <Lottie animationData={seacondlottie} className='w-1/4 h-1/4 ' />
                    </div>

                </div>
            </div>
            <section className='h-[100%]'>
                <div className=' container'>
                    <div className=' justify-center flex   items-center'>
                        < Lottie animationData={preloader} className='w-2/3 h-2/3' />

                    </div>
                </div>
            </section>
            <section className='h-[100%]'>
                <div className=''>
                    <div className=' justify-center flex   items-center'>
                        < Lottie animationData={water} className='w-full h-2/3' />

                    </div>
                </div>
            </section>
            <section className='h-[100%]'>
                <div className=''>
                    <div className=' justify-center flex   items-center'>
                        < Lottie animationData={sunset} className='w-full h-2/3' />

                    </div>
                </div>
            </section> <section className='h-[100%]'>
                <div className=''>
                    <div className=' justify-center flex   items-center'>
                        < Lottie animationData={camel} className='w-full h-2/3' />

                    </div>
                </div>
            </section>
            <section className='h-[100%]'>
                <div className=''>
                    <div className=' justify-center flex   items-center'>
                        < Lottie animationData={jhon} className='w-full h-2/3' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Laniamtion