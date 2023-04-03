import React, { useRef, useState } from 'react';
import { Form, Col, Row, Space, Table, Tag, Button, Modal, StyleSheet, Card, Input } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import App1 from '../Components/showCalendar';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import InputEventLeader from '../Components/InputEventLeader';
import ComplexNavbar from '../Components/newNav'

export default function Example() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [setIsModalCalendar, setIsCalendarOpen] = useState(false);
    const [setIsModaladd, setIsAddOpen] = useState(false);
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
            id_event: "SG65002201",
            name_event: 'ธรรมะฮีลใจ',
            houre_event: 3,
            human: 50,
            tags: ['สาขา', 'วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์'],
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
                title: 'รหัสกิจกรรม',
                dataIndex: 'id_event',
                key: 'id_event',
                length: 10,
                ...getColumnSearchProps('id_event'),
                responsive: ['xs', 'sm', 'xl']
            },
            {
                title: 'ชื่อกิจกรรม',
                dataIndex: 'name_event',
                key: 'name_event',
                ...getColumnSearchProps('name_event'),
                responsive: ['md']
                // render: (text) => <a>{text}</a>,
            },
            {
                title: 'ชั่วโมงกิจกรรม',
                dataIndex: 'houre_event',
                key: 'houre_event',
                responsive: ['md']
            },
            {
                title: 'จำนวนที่รับ',
                dataIndex: 'human',
                key: 'human',
                responsive: ['md']
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
                responsive: ['xs', 'sm', 'xl']
            },
            {
                title: 'ตรวจสอบกิจกรรม',
                key: 'action',
                render: (_, record) => (
                    <Space size="middle">
                        <Button className={'hover:translate-1 hover:scale-110 duration-300 border-amber-300 text-amber-400 hover:bg-amber-300 hover:text-white'} onClick={showModal} type='button'>
                            ตรวจสอบ/แก้ไข
                        </Button>
                    </Space>
                ),
                responsive: ['md']
            },
        ];

        return<Table
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
    <div className="relative isolate overflow-hidden py-3 sm:py-5 lg:py-5 tracking-wider bg-slate-50">
      <ComplexNavbar/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-8 gap-x-8 lg:mb-3 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg ">
          <p className="text-3xl tracking-widest sm:text-left lg:mt-8 text-center lg:text-start text-black sm:text-4xl">Faculty&nbsp;of&nbsp;Industrial&nbsp;Technology</p>
          </div>
          <dl className="grid grid-cols-1 gap-x-0 lg:ml-20 gap-y-2 sm:grid-cols-2 lg:pt-2 ">
            <div className="flex flex-col lg:items-end">
                    <button onClick={showCalendar} type="button" class="hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-800 transition ease-in-out delay-150 mb-5 tracking-wider text-rose-700 bg-white shadow hover:text-white font-medium rounded-full text-sm px-20 py-4 text-center"><svg className='h-0 lg:h-8 ml-3 flex' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"></path>
                    </svg>Calendar</button>
            </div>
            <div className="flex flex-col lg:items-end ">
                    <button onClick={showAdd} type="button" class="hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-800 mb-5 tracking-wider text-rose-700 bg-white shadow hover:text-white font-medium rounded-full text-sm px-20 py-4 text-center"><svg className='h-0 lg:h-8 ml-3 flex' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

            <dl className="grid lg:gap-40 lg:gap-x-96 lg:ml-14 gap-y-2 grid-cols-2 lg:pt-2">
            <div className="lg:ml-24 ">
                <button type="button" onClick={showCalendar} class="transition ease-in-out delay-150 hover:text-white text-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-lg shadow-blue-300/50 bg-white font-medium rounded-full text-lg px-7 py-7 ml-5 sm:ml-20 md:ml-52 mb-2 lg:w-auto ">
                  <svg className='w-12 h-12' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z"></path>
                  </svg>
                </button>
              <div className='ml-2 sm:ml-16 md:ml-48 lg:ml-48 w-32'>
                <div class='title flex justify-center text-md'> Add&nbsp;Event</div>
                <p class='flex justify-center opacity-80 text-sm'> เพิ่มกิจกรรม</p>
              </div>
            </div>

            <div className="lg:ml-20">
                <button onClick={showAdd} type="button" class="transition ease-in-out delay-150 hover:text-white text-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 shadow-lg shadow-red-300/50 gb-white font-medium rounded-full text-lg px-7 py-7 ml-7 mb-2">
                  <svg className=' w-12 h-12' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"></path>
                  </svg>
                </button>
              <div className=' mr-60 w-40'>
                <div class='title flex justify-center text-md'>Calendar</div>
                <p class='flex text-sm justify-center opacity-80'>ดูรายละเอียดกิจกรรม</p>
              </div>
            </div>
            </dl>
          </dl>

        </div>
            <Form
                layout="inline" className='gap-x-1 text-center align-middle'
            >
                    <div className='w-1/8 mt-2'>
                        <p>ระดับกิจกรรม : &nbsp;</p>
                    </div>
                    <div className=' lg:w-1/3 w-full '>
                        <Form.Item >
                            <select id="subject" class="bg-white border tracking-wider border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-slate-400 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                        <button type="button" class="hover:translate-1 hover:scale-110 duration-300 text-rose-600 hover:bg-rose-700 shadow bg-orange-50 hover:text-white font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center mr-2">
                            <svg style={{ height: "15" }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"></path></svg>
                            &nbsp;&nbsp;ค้นหา
                        </button>
                    </div></Form>  
        <Card className='w-full border-gray-100 border-2 mt-0 lg:mt-5'><App/></Card>
      </div>
      <Modal
                width={'80%'}
                title="แก้ไขกิจกรรม"
                open={isModalOpen}
                onCancel={onCancel}
                footer={[
                    <button
                        type="primary"
                        onClick={onCancel}
                        className="text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-800 dark:focus:ring-red-900"
                    >
                        ยืนยัน / สร้างToken
                    </button>
                ]}
            >
                <InputEventLeader />
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
                <InputEventLeader />
            </Modal>
    </div>

  )
}