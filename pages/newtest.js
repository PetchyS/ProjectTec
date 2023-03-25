import React, { useState } from 'react';
import { Form, Col, Row, Space, Table, Tag, Button, Modal, StyleSheet, Card } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import Navbar from './Components/Navbar';
import InputEvent from './Components/InputEvent';
import App1 from './Components/showCalendar';


export default function myEvent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [setIsModalCalendar, setIsCalendarOpen] = useState(false);
    const [setIsModaladd, setIsAddOpen] = useState(false);
    const columns = [
        {
            title: 'รหัสกิจกรรม',
            dataIndex: 'id_event',
            key: 'id_event',
            length: 10
        },
        {
            title: 'ชื่อกิจกรรม',
            dataIndex: 'name_event',
            key: 'name_event'
            // render: (text) => <a>{text}</a>,
        },
        {
            title: 'ชั่วโมงกิจกรรม',
            dataIndex: 'houre_event',
            key: 'houre_event',
        },
        {
            title: 'จำนวนที่รับ',
            dataIndex: 'human',
            key: 'human',
        },
        {
            title: 'ระดับกิจกรรม',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'คณะ') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'ตรวจสอบกิจกรรม',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button className={'bg-gradient-to-tl to-yellow-300  from-orange-300 text-slate-50'} onClick={showModal} type='text'>
                        ตรวจสอบ/แก้ไข
                    </Button>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            id_event: "----------",
            name_event: 'ธรรมะฮีลใจ',
            houre_event: 3,
            human: 50,
            tags: ['สาขา', 'อุตสาหกรรมศิลป์'],
        },
        {
            key: '2',
            id_event: "SC65002202",
            name_event: 'ออกกำลังกาย',
            houre_event: 3,
            human: 300,
            tags: ['คณะ']
        },
        {
            key: '1',
            id_event: "SC65002201",
            name_event: 'ธรรมะฮีลใจ',
            houre_event: 3,
            human: 50,
            tags: ['สาขา', 'อุตสาหกรรมศิลป์'],
        },
        {
            key: '2',
            id_event: "SC65002202",
            name_event: 'ออกกำลังกาย',
            houre_event: 3,
            human: 300,
            tags: ['คณะ'],
        },
        {
            key: '1',
            id_event: "SC65002201",
            name_event: 'ธรรมะฮีลใจ',
            houre_event: 3,
            human: 50,
            tags: ['สาขา', 'อุตสาหกรรมศิลป์'],
        },
        {
            key: '2',
            id_event: "SC65002202",
            name_event: 'ออกกำลังกาย',
            houre_event: 3,
            human: 300,
            tags: ['คณะ'],
        },
        {
            key: '1',
            id_event: "SC65002201",
            name_event: 'ธรรมะฮีลใจ',
            houre_event: 3,
            human: 50,
            tags: ['สาขา', 'อุตสาหกรรมศิลป์'],
        },
        {
            key: '2',
            id_event: "SC65002202",
            name_event: 'ออกกำลังกาย',
            houre_event: 3,
            human: 300,
            tags: ['คณะ'],
        },
        {
            key: '1',
            id_event: "SC65002201",
            name_event: 'ธรรมะฮีลใจ',
            houre_event: 3,
            human: 50,
            tags: ['สาขา', 'อุตสาหกรรมศิลป์'],
        },
        {
            key: '2',
            id_event: "SC65002202",
            name_event: 'ออกกำลังกาย',
            houre_event: 3,
            human: 300,
            tags: ['คณะ'],
        },
        {
            key: '1',
            id_event: "SC65002201",
            name_event: 'ธรรมะฮีลใจ',
            houre_event: 3,
            human: 50,
            tags: ['สาขา', 'อุตสาหกรรมศิลป์'],
        },
        {
            key: '2',
            id_event: "SC65002202",
            name_event: 'ออกกำลังกาย',
            houre_event: 3,
            human: 300,
            tags: ['คณะ'],
        },
        {
            key: '1',
            id_event: "SC65002201",
            name_event: 'ธรรมะฮีลใจ',
            houre_event: 3,
            human: 50,
            tags: ['สาขา', 'อุตสาหกรรมศิลป์'],
        },
        {
            key: '2',
            id_event: "SC65002202",
            name_event: 'ออกกำลังกาย',
            houre_event: 3,
            human: 300,
            tags: ['คณะ'],
        },
        {
            key: '1',
            id_event: "SC65002201",
            name_event: 'ธรรมะฮีลใจ',
            houre_event: 3,
            human: 50,
            tags: ['สาขา', 'อุตสาหกรรมศิลป์'],
        },
        {
            key: '2',
            id_event: "SC65002202",
            name_event: 'ออกกำลังกาย',
            houre_event: 3,
            human: 300,
            tags: ['คณะ'],
        },

    ];
    const App = () => (
        <Table
            columns={columns}
            dataSource={data}
            scroll={{
                y: 350
            }}
        />
    );
    const showCalendar = () => {
        setIsCalendarOpen(true);
    };
    const cancelCalendar = () => {
        setIsCalendarOpen(false);
    };
    const showAdd = () => {
        setIsAddOpen(true);
    };
    const cancelAdd = () => {
        setIsAddOpen(false);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const onOk = () => {
        setIsModalOpen(false);
    };
    const onCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex min-h-full items-center justify-center mt-5 px-4 sm:px-6 lg:px-8">
            <Form
                layout="inline"
            >
                <div className='w-full sm:w-1/2 mt-7 sm: sm:text-end text-center mb-5'>
                    <p style={{ fontSize: 25 }} >
                        Faculty of Industrial Technology</p>
                </div>
                <div className='w-1/8 mt-2 sm:ml-3 sm:text-start '>
                    <button onClick={showCalendar} type="button" class="mb-5 text-rose-700 bg-slate-50 hover:text-rose-900 font-medium rounded-full text-sm px-16 py-4 text-center"><svg style={{ height: 35, marginLeft: 12 }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"></path>
                    </svg>Calendar</button>
                </div>
                <div className='w-1/3 sm:w-1/12 xl:w-1/3 lg:w-1/4 mt-2 sm:ml-5 sm:text-start'>
                    <button onClick={showAdd} type="button" class="mb-5 text-rose-700 bg-slate-50 hover:text-rose-900 font-medium rounded-full text-sm px-16 py-4 text-center"><svg style={{ height: 34, marginLeft: 12 }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z"></path>
                    </svg>Add&nbsp;Event</button>
                </div>
                {/* <hr className='w-full mx-40 h-0.3 bg-gray-50 mt-3'/> */}
                {/* <div className='w-full xl:mx-40 flex justify-center mt-7' layout="inline" > */}
                    <div className='w-1/8 mt-2 ml-0 sm:ml-10 lg:ml-40'>
                        <p>ระดับกิจกรรม : &nbsp;</p>
                    </div>
                    <div className='w-1/8 sm:w-1/20'>
                        <Form.Item >
                            <select id="subject" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-slate-400 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">ทั้งหมด</option>
                                <option value="">คณะ</option>
                                <option value="">สาขาทั้งหมด</option>
                                <option value="">วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์</option>
                                <option value="">วิศวกรรมการออกแบบและผลิต</option>
                                <option value="">วิศวกรรมการจัดการอุตสาหกรรม</option>
                                <option value="">วิศวกรรมโยธาและบริหารงานก่อสร้าง</option>
                                <option value="">อุตสาหกรรมศิลป์</option>
                            </select>
                        </Form.Item>
                    </div>
                    <div className='w-1/8 mt-2 '>
                        <p>ปีการศึกษา : &nbsp;</p>
                    </div>
                    <div className='sm:w-1/6 sm:w-1/20 '>
                        <Form.Item>
                            <select id="YearS" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-slate-400 focus:border-blue-100  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">ทั้งหมด</option>
                                <option value="">2566</option>
                                <option value="">2565</option>
                            </select>
                        </Form.Item>
                    </div>
                    <div className='w-1/8 sm:w-4/20 mt-2 '>
                        <p>ภาคเรียน : &nbsp;</p>
                    </div>
                    <div className='w-1/6 sm:full'>
                        <Form.Item>
                            <select id="Path" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-slate-400 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">ทั้งหมด</option>
                                <option value="">ภาคเรียนที่ 1</option>
                                <option value="">ภาคเรียนที่ 2</option>
                            </select>
                        </Form.Item>
                    </div>
                    <div className='w-1/9 sm:w-1/20'>
                        <button type="button" class="text-white bg-rose-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg style={{ height: "15" }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"></path></svg>
                            &nbsp;&nbsp;ค้นหา
                        </button>
                    </div>
                {/* </div> */}

                <div className='mt-7 xl:mx-40 lg:mx-10 mb-20 sm:pb-0 mx-5 border-2 border-slate-100 rounded-lg'>
                    <App />
                </div>
            </Form>
            <Modal
                width={'80%'}
                title="แก้ไขกิจกรรม"
                open={isModalOpen}
                onCancel={onCancel}
                footer={[
                    <button
                        type="primary"
                        onClick={onCancel}
                        className="text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                        ยืนยัน / สร้างToken
                    </button>
                ]}
            >
                <InputEvent />
            </Modal>
            <Modal className='mt-0 h-80'
                width={'80%'}
                title="ปฏิทินกิจกรรม"
                open={setIsModalCalendar}
                onCancel={cancelCalendar}
                footer={[
                    // <button
                    //     type="primary"
                    //     onClick={cancenCalendar}
                    //     className="text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    // >
                    //     ยืนยัน / สร้างToken
                    // </button>
                ]}
            >
                <App1 />
            </Modal>
            <Modal
                width={'80%'}
                title="เพิ่มกิจกรรม"
                open={setIsModaladd}
                onCancel={cancelAdd}
                footer={[
                    <button
                        type="primary"
                        onClick={cancelAdd}
                        className="text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                        เพิ่มกิจกรรม
                    </button>
                ]}
            >
                <InputEvent />
            </Modal>
            
<div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
        <button data-tooltip-target="tooltip-home" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span class="sr-only">Home</span>
        </button>
        <div id="tooltip-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Home
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-wallet" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                <path clip-rule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
            </svg>
            <span class="sr-only">Wallet</span>
        </button>
        <div id="tooltip-wallet" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Wallet
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div class="flex items-center justify-center">
            <button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path>
                </svg>
                <span class="sr-only">New item</span>
            </button>
        </div>
        <div id="tooltip-new" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Create new item
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-settings" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
            </svg>
            <span class="sr-only">Settings</span>
        </button>
        <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Settings
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-profile" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
            </svg>
            <span class="sr-only">Profile</span>
        </button>
        <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>


        </div>

    )
}