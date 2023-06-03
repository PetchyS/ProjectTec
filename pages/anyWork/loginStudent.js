import React from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Card, Row, Col, Image } from 'antd'
export default function login() {
    return (

        <>
    
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extralight tracking-tight text-gray-900">
                            Log in <span className='text-red-700'>( for student )</span>
                        </h2>
                        <p style={{ fontSize:20 }} className="text-center mt-5 text-slate-500 font-extralight relative">ระบบเตรียมฝึกประสปการณ์</p>   
                        <p style={{ fontSize:12 }} className="text-center text-slate-500 font-extralight relative">คณะเทคโนโลยีอุตสหกรรม มหาวิทยาลัยราชภัฎเลย</p>   

                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className='flex w-full justify-center'>
                            <a href="../student/registerAll/register" className="font-medium text-indigo-600 opacity-80 hover:text-indigo-500">
                                ลงทะเบียนใช้งาน
                            </a>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-full border border-transparent py-3 bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                เข้าสู่ระบบ
                            </button>
                            <a href='./main#'>
                            <button
                            type='button'
                                className="mt-2 group relative flex w-full justify-center rounded-full border border-transparent py-3 bg-yellow-100 text-sm font-medium text-yellow-800 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-100 focus:ring-offset-2"
                            >
                                ยกเลิก
                            </button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>


        </>

    )
}
