import { Badge, Calendar, Modal } from 'antd';
import InputEventBranch from './InputEventBranch';
import React, { useRef, useState } from 'react';
import SEcalendar from './showEventCalendar';

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'SC65545110 : เรียนรู้ทักษะ',
        },
        {
          type: 'success',
          content: 'SC65545110 : อ่านพูดเขียน',
        }
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'SC56565555 : งานอาชีพ',
        },
        {
          type: 'warning',
          content: 'SC65545110 : เรียนรู้ทักษะ',
        },
        {
          type: 'success',
          content: 'SC65545110 : อ่านพูดเขียน',
        }
      ];
      break;
    case 15:
      listData = [
        {
          type: 'warning',
          content: 'SC65545110 : เรียนรู้ทักษะ',
        },
        {
          type: 'success',
          content: 'SC65545110 : อ่านพูดเขียน',
        }
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const CalendarStudent = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const DateCellRender = (value) => {
    const listData = getListData(value);
    const [setIsModaladd, setIsAddOpen] = useState(false);
    const [setIsList, setIsListOpen] = useState(false);
    const showAdd = () => {
      setIsAddOpen(true);
    };
    const cancelAdd = () => {
      setIsAddOpen(false);
    };
    const showList = () => {
      setIsListOpen(true);
    };
    const cancelList = () => {
      setIsListOpen(false);
    };
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content} onClick={showList}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
        <Modal
        title="รายชื่อกิจกรรม"
        open={setIsList}
        onCancel={cancelList}
        footer={[]}
        >
          {listData.map((item) => (
          <li key={item.content} onClick={showAdd}  className=' hover:text-red-800'>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
        </Modal>

        <Modal
          width={'80%'}
          title="รายละเอียดกิจกรรม"
          open={setIsModaladd}
          onCancel={cancelAdd}
          footer={[
            // <button
            //     type="primary"
            //     onClick={cancelAdd}
            //     className="text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            // >
            //     เพิ่มกิจกรรม
            // </button>
          ]}
        >
          <SEcalendar/>
        </Modal>
      </ul>
    );
  };
  return <Calendar dateCellRender={DateCellRender} monthCellRender={monthCellRender} />;
};
export default CalendarStudent;
