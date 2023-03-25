import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useRef, useState } from 'react';
import { UsergroupAddOutlined, EyeOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
const data = [
  {
    key: '1',
    id: '6440248121',
    name: 'นายคมกฤษฎิ์ ก้อมมณี',
    group: 'ว.6403',
    address: 'วิทยาการคอมพิวเตอร์',

  },
  {
    key: '2',
    id: '6440248121',
    name: 'นายคมกฤษฎิ์ ก้อมมณี',
    group: 'ว.6405',
    address: 'วิทยาการคอมพิวเตอร์',
  },
  {
    key: '3',
    id: '6440248121',
    name: 'นายคมกฤษฎิ์ ก้อมมณี',
    group: 'ว.6405',
    address: 'วิทยาการคอมพิวเตอร์',
  },
  {
    key: '4',
    id: '6440248121',
    name: 'นายคมกฤษฎิ์ ก้อมมณี',
    group: 'ว.6405',
    address: 'วิทยาการคอมพิวเตอร์',

  },
  {
    key: '5',
    id: '6440248121',
    name: 'นายคมกฤษฎิ์ ก้อมมณี',
    group: 'ว.6405',
    address: 'วิทยาการคอมพิวเตอร์',

  },
  {
    key: '6',
    id: '6440248121',
    name: 'นายคมกฤษฎิ์ ก้อมมณี',
    group: 'ว.6405',
    address: 'วิทยาการคอมพิวเตอร์',

  },
  {
    key: '7',
    id: '6440248121',
    name: 'นายคมกฤษฎิ์ ก้อมมณี',
    group: 'ว.6405',
    address: 'วิทยาการคอมพิวเตอร์',

  },

];

const Table1 = () => {
  const [open, setOpen] = useState(false);
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
              backgroundColor: 'blue',
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
      title: 'รหัสนักศึกษา',
      dataIndex: 'id',
      key: 'id',
      width: '20%',
      ...getColumnSearchProps('id'),
    },
    {
      title: 'ชื่อ',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'หมู่เรียน',
      dataIndex: 'group',
      key: 'group',
      width: '10%',
      ...getColumnSearchProps('group'),
    },
    {
      title: 'สาขา',
      dataIndex: 'address',
      key: 'address',
      width: '20%',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'ดูข้อมูล',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EyeOutlined />} type="button" onClick={showModal} className={" text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}>

          </Button>

        </Space>
      ),
    }
  ];
  
        
  const showModal = () => {
    setOpen(true);
  };
  return<Table
            columns={columns}
            dataSource={data}
            scroll={{
                y: 300
            }}
        />
};
export default Table1;