import React, { useState } from 'react';
import { Form, Col, Row, Space, Table, Tag, Button, Modal, StyleSheet } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import Navbar from './Components/Navbar';
import { Style } from '../styles/Home.module.css';
import InputEvent from './Components/InputEvent';


export default function MyEvent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
            title: 'แก้ไขกิจกรรม',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button className={' bg-sky-500'} onClick={showModal} type="primary">
                        Open Modal
                    </Button>
                </Space>
            ),
        },
    ];
    const data = [
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
                y: 320
            }}
        />
    );
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
        <div>
            {/* <Navbar /> */}
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <div className=' justify-center'>
                    <Row style={{ marginBottom: 20, alignItems: "center" }}>
                        <Col sm={16}>
                            <p style={{ fontSize: 25 }} >
                                Faculty of Industrial Technology</p>
                        </Col>
                        <Col sm={8}>
                            <Row  gutter-sm={[48, 48]}>
                                <Col span={12} >
                                    <button type="button" class="text-rose-700 bg-slate-50 hover:text-amber-600 font-medium rounded-full text-sm px-16 py-4 text-center"><svg style={{ height: 35, marginLeft: 12 }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"></path>
                                    </svg>Calendar</button>
                                </Col>
                                <Col span={12} >
                                    <button type="button" class="text-rose-700 bg-slate-50 hover:text-amber-600 font-medium rounded-full text-sm px-16 py-4 text-center"><svg style={{ height: 35, marginLeft: 12 }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z"></path>
                                    </svg>Add&nbsp;Event</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ fontSize: 16 , marginTop: 30 }} gutter={[32, 0]}>
                        <Col sm={9}>
                            <Row>
                                <Col span={6} class="mt-2.5">
                                    <p>ระดับกิจกรรม : &nbsp;</p>
                                </Col>
                                <Col span={18}>
                                    <div className='w-full'>
                                        <Form.Item
                                            name="sub_id"
                                            rules={[{ required: true, message: 'กรุณาเลือกสาขา' }]}
                                        >
                                            <select style={{ fontSize: 16 }} id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={6}>
                            <Row>
                                <Col span={8} class="mt-2.5 text-end">
                                    <p>ปีการศึกษา : &nbsp;</p>
                                </Col>
                                <Col span={16}>
                                    <div className='w-full'>
                                        <Form.Item
                                            name="YearS_id"
                                            rules={[{ required: true, message: 'กรุณาเลือกสาขา' }]}
                                        >
                                            <select style={{ fontSize: 16 }} id="YearS" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option value="">ทั้งหมด</option>
                                                <option value="">2566</option>
                                                <option value="">2565</option>
                                            </select>
                                        </Form.Item>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={6}>
                            <Row>
                                <Col span={8} class="mt-2.5 text-end">
                                    <p>ภาคเรียน : &nbsp;</p>
                                </Col>
                                <Col span={16}>
                                    <div className='w-full'>
                                        <Form.Item
                                            name="Path_id"
                                            rules={[{ required: true, message: 'กรุณาเลือกสาขา' }]}
                                        >
                                            <select style={{ fontSize: 16 }} id="Path" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option value="">ทั้งหมด</option>
                                                <option value="">ภาคเรียนที่ 1</option>
                                                <option value="">ภาคเรียนที่ 2</option>
                                            </select>
                                        </Form.Item>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={3}>
                            <button type="button" class="text-white bg-red-800 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-full text-sm px-9 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg style={{ height: "15" }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"></path></svg>
                                &nbsp;&nbsp;ค้นหา
                            </button>
                        </Col>
                    </Row>
                    <App />
                </div>
                <Modal
                    width={'80%'}
                    height={'90%'}
                    title="Basic Modal"
                    open={isModalOpen}
                    onOk={onOk}
                    onCancel={onCancel}
                    footer={[
                        <button
                            key={InputEvent}
                            type="primary"
                            onClick={onCancel}
                            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                            Cancel
                        </button>
                    ]}
                >
                    <InputEvent/>
                </Modal>

            </div>
        </div>

    )
}

