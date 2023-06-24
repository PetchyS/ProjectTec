import React, { useState } from 'react'

import { Table,Tag,Space } from 'antd';

export default function listOfStudent(){
    const columns = [
        {
          title: 'รหัสกิจกรรม',
          dataIndex: 'EventID',
          key: 'EventID',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'ชื่อกิจกรรม',
          dataIndex: 'NameEvent',
          key: 'NameEvent',
        },
        {
          title: 'จำนวนชั่วโมง',
          dataIndex: 'Houre',
          key: 'Houre',
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
          EventID: 'kbmflkbmdfl',
          NameEvent: 'ธรรมะ',
          Houre: '2',
          Time: '25/06/2566 16.22',
        },
        {
          key: '2',
          EventID: 'kblkdsnvdfl',
          NameEvent: 'ธรรมะสงบจิต',
          Houre: '2',
          Time: '25/06/2566 16.22',
        },
        {
          key: '3',
          EventID: 'sbfbdbfmdfl',
          NameEvent: 'ธรรมะทำใจ',
          Houre: '2',
          Time: '25/06/2566 16.22',
        },
        {
          key: '1',
          EventID: 'kbmflkbmdfl',
          NameEvent: 'ธรรมะ',
          Houre: '2',
          Time: '25/06/2566 16.22',
        },
        {
          key: '1',
          EventID: 'kbmflkbmdfl',
          NameEvent: 'ธรรมะ',
          Houre: '2',
          Time: '25/06/2566 16.22',
        },
      ];
const TableList = () => <Table columns={columns} dataSource={data} scroll={{y: 300}} />;
return(
    <TableList/>
)   
}

// export default App;