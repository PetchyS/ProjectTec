import { radio } from '@material-tailwind/react';
import React, { useState } from 'react';
import { Button, Form, Radio, Card, Space, Input, Image, Divider } from 'antd';
import Link from 'next/link';


import FooterTab from './Components/footer';
import Example from './Components/navBar';

export default function table() {
    return (
        <>
            <Example className=" top-10" />
            <Form className="flex bg-bottom bg-red-800 min-h-full items-center justify-center py-12 sm:px-5 xs:w-auto xs:h-auto sm:w-auto sm:h-auto md:h-auto md:w-auto lg:h-auto lg:w-auto md:text-start text-center px-2">

                <Card className='bg-white pt-8 w-full xs:w-auto xs:h-auto sm:w-auto sm:h-auto md:h-auto md:w-auto lg:h-auto lg:w-auto lg:mx-36 rounded-3xl'>
                    <a className='w-full my-3 text-red-800 md:text-white text-xl md:text-xl md:bg-red-800 md:px-8 py-2 rounded-3xl'>
                        โต๊ะจีนเซ็ต
                    </a>
                    <main>
                <div className='justify-items-center bg-left-bottom bg-gradient-to-b pb-24 bg-red-800 min-h-full'>
                    <div className='text-center bg-gray-950 py-20 bg-opacity-20'>
                        <p className='text-3xl text-white'>เลือกราคาโต๊ะจีน</p>
                        <p className=' text-slate-200'>คำนวณราคาตามจำนวนคนและรายการอาหาร</p>
                    </div>
                    <div className='mx-auto max-w-3xl grid grid-cols-2 gap-2 lg:gap-12 my-20 container justify-items-center '>
                        <div className='text-white col-span-2 border-b w-full text-center pb-5 text-lg '></div>
                        <Link href="./Set/Set1300">
                            <Card className='w-full col-span-1 rounded-3xl ' >
                            
                            <div className=' text-lg mb-3 py-3'>
                                <p className='text-center rounded-full text-white bg-red-700 shadow-lg mx-auto lg:mx-20'>โต๊ะจีนราคา 1,300</p>
                            </div>
                            <Image 
                            alt='5'
                            src="/1.jpg"
                            />
                            
                        </Card>
                        </Link>
                        <Link href="./Set/Set1500">
                        <Card className='w-full col-span-1 rounded-3xl'>
                            <div className=' text-lg bg mb-3 py-3'>
                                <p className='text-center rounded-full text-white bg-red-700 shadow-lg mx-auto lg:mx-20'>โต๊ะจีนราคา 1,500</p>
                            </div>
                            <Image 
                            alt='5'
                            src="/16.jpg"
                            />
                            
                        </Card>
                        </Link>
                        <Link href="./Set/Set1800">
                        <Card className='w-full col-span-1 rounded-3xl'>
                            <div className=' text-lg bg mb-3 py-3'>
                                <p className='text-center rounded-full text-white bg-red-700 shadow-lg mx-auto lg:mx-20'>โต๊ะจีนราคา 1,800</p>
                            </div>
                            <Image 
                            alt='5'
                            src="/3.jpg"
                            />
                            
                        </Card>
                        </Link>
                        <Link href="./Set/Set2000">
                        <Card className='w-full col-span-1 rounded-3xl '>
                            <div className=' text-lg bg mb-3 py-3'>
                                <p className='text-center rounded-full text-white bg-red-700 shadow-lg mx-auto lg:mx-20'>โต๊ะจีนราคา 2,000</p>
                            </div>
                            <Image 
                            alt='5'
                            src="/13.jpg"
                            />
                            
                        </Card>
                        </Link>
                        <Card className='w-full col-span-full max-w-sm rounded-3xl'>
                        <Link href="./Set/Set2300" >
                        <Card>
                            <div className=' text-lg bg mb-3 py-3'>
                                <p className='text-center rounded-full text-white bg-red-700 shadow-lg mx-auto lg:mx-20'>โต๊ะจีนราคา 2,300</p>
                            </div>
                            <Image 
                            alt='5'
                            src="/10.jpg"
                            />
                            
                        </Card>
                        </Link>
                        </Card>
                </div>       
                </div>
                
                
               

                
                
            </main>
                </Card>
                
            </Form>
            <FooterTab />
        </>
    )
}