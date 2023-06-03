import React, { useRef, useState } from 'react';
import { Form, Col, Row, Space, Table, Tag, Button, Modal, StyleSheet, Card, Input } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import InputEvent from '../student/formstudent';
import App1 from '../Components/showCalendar';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import ComplexNavbar from '../Components/newNav'
import Link from 'next/link';
import InputEventBranch from '../Components/InputEventBranch';

export default function Example() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [setIsModalCalendar, setIsCalendarOpen] = useState(false);
  const [setIsModaladd, setIsAddOpen] = useState(false);
  const data = [
    {
      key: '1',
      id_event: "1",
      name_event: 'นายคมกฤษฎิ์ ก้อมมณี',
      houre_event: 'โรงเรียนชัยภูมิภักดีชุมพล',
      human: 'ชัยภูมิ',
      tags: 'ในเมือง',
    },
    {
      key: '2',
      id_event: "2",
      name_event: 'นายวินิตร เห็มวิจิตร',
      houre_event: 'โรงเรียนมหาไถ่ศึกษาเลย',
      human: 'เลย',
      tags: ['ในเมือง']
    },
    {
      key: '3',
      id_event: "3",
      name_event: 'นางสาวปลายฟ้า ก้อมมณี',
      houre_event: 'โรงเรียนเลยพิทยา',
      human: 'เลย',
      tags: ['ในเมือง']
    },
    {
      key: '4',
      id_event: "4",
      name_event: 'นายมานะ บรรจงจิตร',
      houre_event: 'โรงเรียนชัยภูมิภักดีชุมพล',
      human: 'ชัยภูมิ',
      tags: 'ในเมือง',
    },
    {
      key: '5',
      id_event: "5",
      name_event: 'นางสาวธิวานันท์ สงศรีแสน',
      houre_event: 'โรงเรียนเลยพิทยา',
      human: 'เลย',
      tags: ['ในเมือง']
    },
    {
      key: '6',
      id_event: "6",
      name_event: 'นายปกครอง บุญปลื้ม',
      houre_event: 'โรงเรียนชัยภูมิภักดีชุมพล',
      human: 'ชัยภูมิ',
      tags: 'ในเมือง',
    },
    {
      key: '7',
      id_event: "7",
      name_event: 'นางสาวจนิสตา ขันแก้ว',
      houre_event: 'โรงเรียนมหาไถ่ศึกษาเลย',
      human: 'เลย',
      tags: ['ในเมือง']
    },
    {
      key: '8',
      id_event: "8",
      name_event: 'นางสาวสุนิสา นครขวาง',
      houre_event: 'โรงเรียนเลยพิทยา',
      human: 'ชัยภูมิ',
      tags: 'ในเมือง',
    },
    {
      key: '9',
      id_event: "9",
      name_event: 'นายจิรายุทธ์ ตั้งจิตร์',
      houre_event: 'โรงเรียนมหาไถ่ศึกษาเลย',
      human: 'เลย',
      tags: ['ในเมือง']
    },
    {
      key: '10',
      id_event: "10",
      name_event: 'นายพัชรพล พรหมรักษา',
      houre_event: 'โรงเรียนชัยภูมิภักดีชุมพล',
      human: 'ชัยภูมิ',
      tags: 'ในเมือง',
    },
    {
      key: '11',
      id_event: "11",
      name_event: 'นายญัตติภูมิ พรมมี',
      houre_event: 'โรงเรียนมหาไถ่ศึกษาเลย',
      human: 'เลย',
      tags: ['ในเมือง']
    },


  ];
  const App = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div
          style={{
            padding: 8,
          }}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Input
            className=' rounded-lg'
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
              marginBottom: 8,
              display: 'block',
            }}
          />
          <Space>
            <Button
              className=' bg-teal-500'
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              size="small"
              style={{
                width: 90,
              }}
            >
              ค้นหา
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size="small"
              style={{
                width: 90,
              }}
            >
              ล้าง
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({
                  closeDropdown: false,
                });
                setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
              }}
            >
              Filter
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                close();
              }}
            >
              close
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined
          style={{
            color: filtered ? '#1890ff' : undefined,
          }}
        />
      ),
      onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{
              backgroundColor: '#ffc069',
              padding: 0,
            }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });
    const columns = [
      {
        title: 'ลำดับ',
        dataIndex: 'id_event',
        key: 'id_event',
        width: '10%',
        ...getColumnSearchProps('id_event'),
        responsive: ['xs', 'sm', 'xl']
      },
      {
        title: 'ชื่อ-นามสกุล',
        dataIndex: 'name_event',
        key: 'name_event',
        ...getColumnSearchProps('name_event'),
        responsive: ['xs', 'sm', 'xl', 'md']
        // render: (text) => <a>{text}</a>,
      },
      {
        title: 'โรงเรียน',
        dataIndex: 'houre_event',
        key: 'houre_event',
        ...getColumnSearchProps('houre_event'),
        responsive: ['xs', 'sm', 'xl', 'md']
      },
      {
        title: 'จังหวัด',
        dataIndex: 'human',
        key: 'human',
        ...getColumnSearchProps('human'),
        responsive: ['xs', 'sm', 'xl', 'md']
      },
      {
        title: 'อำเภอ',
        key: 'tags',
        dataIndex: 'tags',
        ...getColumnSearchProps('tags'),
        responsive: ['xs', 'sm', 'xl', 'md']
      },
      {
        title: 'ตรวจสอบ',
        key: 'action',
        width: '10%',
        render: (_, record) => (
          <Space size="middle">
            <Button className={'hover:translate-1 hover:scale-110 duration-300 border-amber-300 text-amber-400 hover:bg-amber-300 hover:text-white'} onClick={showModal} type='button'>
              ตรวจสอบ
            </Button>
          </Space>
        ),
        responsive: ['xs', 'sm', 'xl']
      },
    ];

    return <Table
      columns={columns}
      dataSource={data}
      scroll={{
        y: 300
      }}
    />
  };
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
    <div className="relative isolate overflow-hidden py-3 sm:py-5 lg:py-5 tracking-wider bg-slate-50 ">
      <ComplexNavbar/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-8 gap-x-8 lg:mb-3 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg ">
          <p className="text-3xl tracking-widest sm:text-left lg:mt-8 text-center lg:text-start text-black sm:text-4xl">Faculty&nbsp;of&nbsp;Industrial&nbsp;Technology</p>
          </div>
          <dl className="grid grid-cols-1 gap-x-0 lg:ml-20 gap-y-2 sm:grid-cols-2 lg:pt-2 ">
            <div className="flex flex-col lg:items-end">
                    <button onClick={showCalendar} type="button" class="hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-800 transition ease-in-out delay-150 mb-5 tracking-wider text-rose-700 bg-white shadow hover:text-white font-medium rounded-full text-sm px-20 py-4 text-center"><svg className='h-8 ml-3 flex' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"></path>
                    </svg>Calendar</button>
            </div>
            <div className="flex flex-col lg:items-end ">
                    <button onClick={showAdd} type="button" class="hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-800 mb-5 tracking-wider text-rose-700 bg-white shadow hover:text-white font-medium rounded-full text-sm px-20 py-4 text-center">
                    <svg className='h-8 ml-3 flex' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z"></path>
                    </svg>Add&nbsp;Event</button>
            </div>
          </dl>
        </div> */}
        <div className="h-full py-2 mb-5 px-4 align-item-center flex justify-center">
          <dl className="grid grid-cols-1 lg:gap-x-40 lg:ml-14 gap-y-2 lg:grid-cols-3 lg:pt-2">

            <div>
              <p className="lg:text-4xl text-xl tracking-widest sm:text-left lg:mt-12 my-5 sm:my-auto text-center lg:text-start text-green-700 sm:text-4xl"><span className='text-red-500'>Faculty</span>&nbsp;of&nbsp;Industrial&nbsp;Technology</p>
            </div>

            
          </dl>

        </div>

        <Form
          layout="inline" className='gap-x-1 text-center align-middle'
        >
          <div className='w-1/8 mt-2'>
            <p>สาขาวิชา : &nbsp;</p>
          </div>
          <div className=' lg:w-1/3 w-full '>
            <Form.Item >
              <select id="subject" class="bg-white border tracking-wider border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-slate-400 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">ทั้งหมด</option>
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
          <div className='w-full lg:w-1/6 '>
            <Form.Item>
              <select id="YearS" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-slate-400 focus:border-blue-100  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">ทั้งหมด</option>
                <option value="">2566</option>
                <option value="">2565</option>
              </select>
            </Form.Item>
          </div>
          <div className='w-1/8 mt-2 '>
            <p>ภาคเรียน : &nbsp;</p>
          </div>
          <div className='w-full lg:w-1/6'>
            <Form.Item>
              <select id="Path" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-slate-400 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">ทั้งหมด</option>
                <option value="">ภาคเรียนที่ 1</option>
                <option value="">ภาคเรียนที่ 2</option>
              </select>
            </Form.Item>
          </div>
          <div className='w-full text-end lg:items-center my-5 lg:my-0 lg:w-1/12'>
          <Link className='' href="Summary">
            <button type="button" class="hover:translate-1 hover:scale-110 duration-300 text-rose-600 hover:bg-rose-700 shadow bg-orange-50 hover:text-white font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center mr-2">
              &nbsp;&nbsp;Summary
            </button>
          </Link>
          </div></Form>
        <Card className='w-full border-gray-100 border-2 mt-0 lg:mt-5'><App /></Card>
      </div>
      
    </div>
    

  )
}