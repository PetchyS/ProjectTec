import { Card, Form, Input, Button, Select } from 'antd'
import React from 'react'

export default function register() {
    const size = "large"
    return (
        <>
             <div className="justify-items-center mt-3 mr-5 flex ml-5 ">
                <Card style={{ width: "100%", height: "200px" }} className="bg-gradient-to-r  from-rose-600  via-red-400 to-pink-500 ..." >
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                            ระบบเตรียมฝึกประสบการณ์วิชาชีพ และสหกิจศึกษา
                        </h2>
                        <p className="text-lead text-center text-white">Faculty of Industrial Technology
                        </p>

                    </div>
                </Card>
            </div>
            
            <Card className='mt-5 mx-5 h-full py-6 px-4 align-item-center flex justify-center bg-slate-50 pb-72'>
                <dl className="grid grid-cols-1 gap-x-40 lg:ml-20 gap-y-2 sm:grid-cols-3 lg:pt-2">
                        <div className=" ">
                            <a href='./loginStudent#'>
                            <button type="button" className="transition ease-in-out delay-150 bg-yellow-300 hover:-translate-y-1 hover:scale-110 hover:bg-amber-400 duration-300 shadow-lg shadow-yellow-300/50 text-white font-medium rounded-lg text-lg px-14 py-12 mr-2 mb-2" >
                                <svg className='text-while' style={{ width:80, heigh:80}} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"></path>
                                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"></path>
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"></path>
                                </svg>
                            </button>
                            </a>
                            <div className='title flex justify-center text-lg'>นักศึกษา</div>
                            <p className='flex justify-center opacity-80'>เข้าระบบสำหรับนักศึกษา</p>
                        </div>

                        <div className=" ">
                        <a href='./loginAdmin#'>
                            <button type="button" className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-lg shadow-blue-300/50 text-white font-medium rounded-lg text-lg px-14 py-12 mr-2 mb-2">
                                <svg className='text-while' style={{ width:80, heigh:80}} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"></path>
                                </svg>
                            </button>
                            </a>
                            <div className='title flex justify-center text-lg'>เจ้าหน้าที่</div>
                            <p className='flex justify-center opacity-80'>เข้าระบบสำหรับเจ้าหน้าที่</p>
                        </div>

                        <div className=" ">
                            <a href='./calendarMain#'>
                            <button type="button" className="transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 shadow-lg shadow-red-300/50 text-white font-medium rounded-lg text-lg px-14 py-12 mr-2 mb-2">
                                <svg className='text-while' style={{ width:80, heigh:80}} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                <path clipRule="evenodd" fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"></path>
                                </svg>
                            </button>
                            </a>
                            <div className='title flex justify-center  text-lg'>ปฏิทินกิจกรรม</div>
                            <p className='flex justify-center opacity-80'>ดูรายละเอียดกิจกรรม</p>
                        </div>
                </dl>
            </Card>
        </>
    )

}