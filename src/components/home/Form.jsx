import React from 'react'
import contactUs from '../../assets/images/png/from-contactus.png'

const Form = () => {
    return (
        <>
            <div className=' container mt-[155px]'>
                <div className="flex items-center justify-center gap-[6.5rem]">
                    <div className='max-w-[388px] min-h-[523px]'>
                        <img src={contactUs} alt="no-images" className='' />
                    </div>
                    <div className=''>
                        <h2 className=' font-bold text-[48px]  font-lato leading-[60px] text-[black] mb-0'>Get Updated With Us</h2>
                        <p className='text-[#666666] text-[16px] font-lato leading-6 max-w-[578px] mb-0 pt-[16px]'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
                        <div className=''>
                            <form className='w-full'>
                                <div class="flex gap-6 pt-7 max-sm:flex-wrap">
                                    <div class="relative z-0 group w-full max-w-[325px]">
                                        <input type="text" name="floating_first_name" id="floating_first_name" class="block rounded-[4px] px-0 w-full text-sm text-black bg-transparent border-[1px] border-[#00000036] pl-4 pt-[19px] pb-[12px] appearance-none focus:outline-none peer" placeholder=" " required="" />
                                        <label for="floating_first_name" class=" font-lato font-normal text-base leading-6 text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-4 opacity-[0.5] peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:opacity-[100%]">Your Name</label>
                                    </div>
                                    <div class="relative z-0 group w-full max-w-[325px]">
                                        <input type="email" name="floating_email" id="floating_email" class="block rounded-[4px] px-0 w-full text-sm text-black bg-transparent border-[1px] border-[#00000036] pl-4 pt-[19px] pb-[12px] appearance-none focus:outline-none peer" placeholder=" " required="" />
                                        <label for="floating_email" class="font-roboto font-normal text-base leading-6 text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-4 opacity-[0.5] peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:opacity-[100%]">Your Email Address</label>
                                    </div>
                                </div>
                                <div class="flex gap-6 mt-6 max-sm:flex-wrap">
                                    <div class="relative z-0 w-full max-w-[325px] group">
                                        <input type="password" name="floating_password" id="floating_password" class="block rounded-[4px] px-0 w-full text-sm text-black bg-transparent border-[1px] border-[#00000036] pl-4 pt-[19px] pb-[12px] appearance-none focus:outline-none peer" placeholder=" " required="" />
                                        <label for="floating_password" class="font-roboto font-normal text-base leading-6 text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-4 opacity-[0.5] peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:opacity-[100%]">Password</label>
                                    </div>
                                    <div class="relative z-0 w-full max-w-[325px] group">
                                        <input type="password" name="repeat_password" id="floating_repeat_password" class="block rounded-[4px] px-0 w-full text-sm text-black bg-transparent border-[1px] border-[#00000036] pl-4 pt-[19px] pb-[12px] appearance-none focus:outline-none peer" placeholder=" " required="" />
                                        <label for="floating_repeat_password" class="font-roboto font-normal text-base leading-6 text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-4 opacity-[0.5] peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:opacity-[100%]">Confirm password</label>
                                    </div>
                                </div>
                                <button type="submit" class="font-roboto hover:bg-white hover:text-[#92140C] duration-500 border-[1px] border-transparent hover:border-[1px] hover:border-[#92140C] font-semibold text-lg max-w-[166px] mt-[49px] leading-5 text-white bg-[#92140C] py-[14px] px-[24px] rounded-[5px] text-nowrap">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form