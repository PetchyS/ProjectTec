import { useState, useRef } from 'react';
import { Space, Table, Tag, Button, Modal, Input } from 'antd';
import { UsergroupAddOutlined, EyeOutlined, AudioOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import NavS from '../Components/navStudent';

export default function Event() {
    const iconSize = "large"
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    
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
                  type="primary"
                  onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                  icon={<SearchOutlined />}
                  size="small"
                  style={{
                    width: 90,
                  }}
                >
                  Search
                </Button>
                <Button
                  onClick={() => clearFilters && handleReset(clearFilters)}
                  size="small"
                  style={{
                    width: 90,
                  }}
                >
                  Reset
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
                dataIndex: 'no',
                key: 'no',
                render: (text) => <a>{text}</a>,
                ...getColumnSearchProps('no'),
                responsive: [ 'xs', 'sm', 'xl']
            },
            {
                title: 'ปีการศึกษา',
                dataIndex: 'year',
                key: 'year',
                ...getColumnSearchProps('year'),
                responsive: [ 'md']
            },
            {
                title: 'ภาคเรียน',
                dataIndex: 'term',
                key: 'term',
                ...getColumnSearchProps('term'),
                responsive: [ 'md']
            },
            {
                title: 'รหัสกิจกรรม',
                dataIndex: 'code',
                key: 'code',
                ...getColumnSearchProps('code'),
                responsive: [ 'xs','sm', 'xl' ]
            },
            {
                title: 'ชื่อกิจกรรม',
                dataIndex: 'name',
                key: 'name',
                ...getColumnSearchProps('name'),
                responsive: [ 'xs', 'sm', 'xl' ]
            },
            {
                title: 'หน่วนงาน',
                dataIndex: 'gency',
                key: 'gency',
                ...getColumnSearchProps('gency'),
                responsive: [ 'md']
            },
            {
                title: 'ระดับกิจกรรม',
                dataIndex: 'level',
                key: 'level',
                ...getColumnSearchProps('level'),
                responsive: [ 'md']
            },
            {
                title: 'จำนวนชั่วโมง',
                dataIndex: 'hour',
                key: 'hour',
                ...getColumnSearchProps('hour'),
                responsive: [ 'md']
            },
            {
                title: 'วันที่เข้าร่วม',
                dataIndex: 'date',
                key: 'date',
                ...getColumnSearchProps('date'),
                responsive: [ 'md']
                
            },
    
        ];
        return <Table columns={columns} dataSource={data}
                    scroll={{
                        y: 300}} 
                />;
    }

   
    const data = [
        {
            key: '1',
            no: '1',
            year: 2566,
            term: 2,
            code: '66SC254805',
            name: 'อบรมสื่อการสอน',
            gency: 'วิทยาการคอวพิวเตอร์',
            level: 'สาขา',
            hour: '12 ชั่วโมง',
            date: '14 มี.ค. 2566',

        },
        {
            key:'2',
            no: '2',
            year: 2566,
            term: 2,
            code: '66SC254805',
            name: 'อบรมสื่อการสอน',
            gency: 'วิทยาการคอวพิวเตอร์',
            level: 'สาขา',
            hour: '12 ชั่วโมง',
            date: '14 มี.ค. 2566',

        },

    ];
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        //     setOpen(false);
        // }, 3000);
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };


    const showModal2 = () => {
        setOpenAdd(true);
    };
    const handleOkAdd = () => {
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        //     setOpen(false);
        // }, 3000);
        setOpenAdd(false);
    };
    const handleCancelAdd = () => {
        setOpenAdd(false);
    };

    

    return (
        <>
            <header className="bg-white shadow mt-5">
        <NavS className='my-10' />
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">กิจกรรมที่เข้าร่วม</h1>

                </div>

            </header>

            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 mt-5">
                    <App />
                </div>
            </main>

        </>
    
    )
}