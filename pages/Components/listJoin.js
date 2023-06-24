import React, { useState } from 'react'

import { Table,Tag,Space } from 'antd';

export default function tableJoin(){
    const columns = [
        {
          title: 'รหัสนักศึกษา',
          dataIndex: 'studentID',
          key: 'studentID',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'ชื่อ-นามสกุล',
          dataIndex: 'Name',
          key: 'Name',
        },
        {
          title: 'วัน/เวลาที่ใช้ Token',
          dataIndex: 'Time',
          key: 'Time',
        },
      ];
      const data = [
        {
          key: '1',
          studentID: '6440248100',
          Name: 'สมหมาย สมใจ',
          Time: '25/06/2566 16.22',
        },
        {
          key: '2',
          studentID: '6430248222',
          Name: 'สมปอง สมใจ',
          Time: '25/06/2566 16.22',
        },
        {
          key: '3',
          studentID: '6485666620',
          Name: 'สมศักดิ์ สมใจ',
          Time: '25/06/2566 16.22',
        },
        {
          key: '4',
          studentID: '6445253400',
          Name: 'สมหญิง สมใจ',
          Time: '25/06/2566 16.22',
        },
        {
          key: '5',
          studentID: '6452548780',
          Name: 'สมนึก สมใจ',
          Time: '25/06/2566 16.22',
        },
        {
          key: '5',
          studentID: '6452548780',
          Name: 'สมนึก สมใจ',
          Time: '25/06/2566 16.22',
        },
        {
          key: '5',
          studentID: '6452548780',
          Name: 'สมนึก สมใจ',
          Time: '25/06/2566 16.22',
        },
        {
          key: '5',
          studentID: '6452548780',
          Name: 'สมนึก สมใจ',
          Time: '25/06/2566 16.22',
        },
        {
          key: '5',
          studentID: '6452548780',
          Name: 'สมนึก สมใจ',
          Time: '25/06/2566 16.22',
        },
      ];
const TableList = () => <Table columns={columns} dataSource={data} scroll={{y: 300}} />;
return(
    <TableList/>
)   
}

// export default App;