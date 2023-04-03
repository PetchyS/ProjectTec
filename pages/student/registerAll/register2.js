import React, { useState } from 'react'
import { Button, Card, Checkbox, Form, Input, Radio, Select } from 'antd';
import { DatePicker, Space } from 'antd';
import { Col, Row } from 'antd';



export default function Form1() {
    const iconSize = "large"
    const [value, setValue] = useState();
    return (
        <>
        <div>
                <h1 className='text-center p-3'>ข้อมูลติดต่อ</h1>
            </div>
        <div className=' flex items-center mx-5  justify-center'>
            
            <Card style={{width:"90%"}}>
            <Form
            layout='inline'
            >     
            {/* บ้านเลขที่ */}
           
            <div className='w-1/2'>
            <label for="firstName-input">บ้านเลขที่</label>
                        <Form.Item
                           
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาใส่ชื่อ!',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
            </div>
            <div className='w-1/2'>
            <label for="lastName-input">หมู่</label>
                        <Form.Item
                           
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาใส่นามสกุล!',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
            </div>
             {/* ถนน */}
           <div className='w-full'>
           <label for="lastName-input">ถนน</label>
                        <Form.Item
                           
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาใส่อีเมลล์!',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                           
                            />
                        </Form.Item>            
           </div>
           {/* ตำบล */}
           <div className='w-1/2'>
           <label for="lastName-input">ตำบล</label>
                        <Form.Item
                            
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาใส่เลขบัตรประชาชน!',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                           
                            />
                        </Form.Item>            
           </div>
               {/* อำเภอ*/}
           <div className='w-1/2'>
           <label for="lastName-input">อำเภอ</label>
                        <Form.Item
                           
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาใส่รหัสนักศึกษา!',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          
                            />
                        </Form.Item>            
           </div>
           {/* จังหวัด */}  
            <div className='w-1/2'>
            <label for="firstName-input">จังหวัด</label>
                        <Form.Item
                            
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาใส่เบอร์โทร!',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
            </div>
            <div className='w-1/2'>
            <label for="lastName-input">รหัสไปรษณีย์</label>
                        <Form.Item
                            
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาใส่หมู่เรียน!',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
            </div>
             {/* เบอร์โทร*/}
           <div className='w-full'>
           <label for="lastName-input">เบอร์โทร</label>
                        <Form.Item
                            
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาเลือกระดับการศึกษา!',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>            
           </div>
            

          <div className='w-full text-center mt-5 pr-0'>
                        <Form.Item>
                            <button
                                htmlType='submit'

                                className=" w-full text-white bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                ยืนยัน
                            </button>
                        </Form.Item>

                    </div>
                    <div className='w-full text-center pr-4'>

                        <button
                            type="primary"

                            className="w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            ยกเลิก
                        </button>
                    </div>
        </Form>
        </Card>
        </div>
        </>
       
    )
}