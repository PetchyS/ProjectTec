import React, { useState } from 'react'
import { Button, Card, Checkbox, Form, Input, Radio, Select,message } from 'antd';
import { DatePicker, Space } from 'antd';
import { Col, Row } from 'antd';
import { useRouter } from 'next/router';



export default function Form1() {
    const iconSize = "large"
    const [value, setValue] = useState();
    const [messageApi, contextHolder] = message.useMessage();
    //เราเตอร์ ฟังก์ชันที่ใช้ในกาไปหน้าอื่น มีหลายตัวอย่างเช่น เราเตอร์.reload เป็นต้น
    const router = useRouter();

    const messageUp = () => {
        messageApi.open({
            type: 'success',
            content: 'เพิ่มข้อมูลสำเร็จ',
          });
          
        setTimeout(()=>{
            router.push({
                pathname: '/register2',
              })
             
        },2000)
    }

    const sentDaTa = (data) => {
        console.log(data)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "ad_id": data.ad_id,
            "email": data.email,
            "firstName": data.first_name,
            "idCard": data.idCard,
            "id_learn": data.id_learn,
            "id_student": data.id_student,
            "lastname": data.lastname,
            "student_branch": data.student_branch,
            "student_learn": data.student_learn,
            "title": data.title
        });

        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        fetch("http://localhost:3800/API/users/register", requestOptions)
            .then(response => response.text())
            .then(result => {messageUp()}
            )
            .catch(error => console.log('error', error));


    };
    //ตัวอย่างการ ทำเมสเมจเด้ง 
    // const onMessage =()=>{
    //     {messageUp()}
    // }
return (
    <>
     {contextHolder}
        <div>
            <h1 className='text-center p-3'>ลงทะเบียน</h1>
        </div>
        <div className=' flex items-center mx-5  justify-center'>

            <Card style={{ width: "90%" }}>
                <Form
                    onFinish={sentDaTa}
                    layout='inline'
                >


                    <div className='w-full'>
                        <label for="firstName-input">คำนำหน้าชื่อ</label>
                        <Form.Item
                            name='title'
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาเลือกคำนำหน้า!',
                                },
                            ]}
                        >
                            <select id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>กรุณาเลือก...</option>
                                <option value="1">นาย</option>
                                <option value="2">นาง</option>
                                <option value="3">นางสาว</option>
                                <option value="4">ว่าที่ร้อยตรีหญิง</option>
                                <option value="5">ว่าที่ร้อยตรี</option>
                            </select>
                        </Form.Item>
                    </div>
                    {/* ชื่อ */}

                    <div className='w-1/2'>
                        <label for="firstName-input">ชื่อ</label>
                        <Form.Item
                            name='firstName'
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
                        <label for="lastName">สกุล</label>
                        <Form.Item
                            name='lastname'
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
                    {/* อีเมลล์ */}
                    <div className='w-full'>
                        <label for="lastName-input">อีเมลล์</label>
                        <Form.Item
                            name='email'
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาใส่อีเมลล์!',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder='sd**********@lru.ac.th'
                            />
                        </Form.Item>
                    </div>
                    {/* เลขบัตรประชาชน */}
                    <div className='w-full'>
                        <label for="lastName-input">เลขบัตรประชาชน</label>
                        <Form.Item
                            name='idCard'
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาใส่เลขบัตรประชาชน!',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                Placeholder='xxx-xx-xxx-xx-xxx'
                            />
                        </Form.Item>
                    </div>
                    {/* รหัสนักศึกษา*/}
                    <div className='w-full'>
                        <label for="lastName-input">รหัสนักศึกษา</label>
                        <Form.Item
                            name='id_student'
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาใส่รหัสนักศึกษา!',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                Placeholder='xxxxxxxxxx'
                            />
                        </Form.Item>
                    </div>
                    {/* เบอร์โทร,หมู่เรียน */}
                    <div className='w-1/2'>
                        <label for="firstName-input">เบอร์โทร</label>
                        <Form.Item
                            name='ad_id'
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
                        <label for="lastName-input">หมู่เรียน</label>
                        <Form.Item
                            name='id_learn'
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
                    {/* ระดับการศึกษา*/}
                    <div className='w-full'>
                        <label for="lastName-input">ระดับการศึกษา</label>
                        <Form.Item
                            name='student_learn'
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาเลือกระดับการศึกษา!',
                                },
                            ]}
                        >
                            <select id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                 <option selected>กรุณาเลือก...</option>
                                <option value="1">ปริณญาตรี 2 ปีหลังปกติ</option>
                                <option value="2">ปริณญาตรี 2 ปีหลัง กศ.พ.</option>
                                <option value="3">ปริณญาตรี 4 ปี ปกติ</option>
                                <option value="4">ปริณญาตรี 4 ปี กศ.พ</option>
                            </select>
                        </Form.Item>
                    </div>
                    {/* สาขาวิชา*/}
                    <div className='w-full '>
                        <label for="lastName-input">สาขาวิชา</label>
                        <Form.Item
                            name='student_branch'
                            rules={[
                                {
                                    required: true,
                                    message: '*กรุณาเลือกสาขา!',
                                },
                            ]}
                        >
                            <select id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>กรุณาเลือก</option>
                                <option value="1">ชื่อสาขา</option>
                                <option value="2">ชื่อสาขา</option>
                                <option value="3">ชื่อสาขา</option>
                            </select>
                        </Form.Item>
                    </div>

                    <div className='w-full text-center mt-5 pr-0'>
                        <Form.Item>
                            <button
                                Type='submit' 
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