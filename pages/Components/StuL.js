import React, { useState } from 'react'
import { Card, Col, Row } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import { Select, Space ,Table, Tag} from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

const levelData = ['กรุณาเลือก','คณะ','สาขา'];
const areaData = {
  กรุณาเลือก:['...'],
  คณะ: [''],
    สาขา: [
        'วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์',
        'วิศวกรรมการออกแบบและผลิต',
        'วิศวกรรมการจัดการอุตสาหกรรม',
        'วิศวกรรมโยธาและบริหารงานก่อสร้าง',
        'อุตสาหกรรมศิลป์']
};
export default function StuL () {
    const [areas, setAreas] = useState(areaData[levelData[0]]);
    const [secondAreas, setSecondAreas] = useState(areaData[levelData[0]][0]);

    const handleLevelChange = (value) => {
      setAreas(areaData[value]);
      setSecondAreas(areaData[value]);

    };
    const onSecondAreasChange = (value) => {
      setSecondAreas(value);
    };


    return (
      <div><Form
      layout="inline" className=' my-5 gap-x-0 gap-y-3 text-center align-middle'
  >
      <div
        className='w-full sm:w-1/2'>
          <Form.Item >
      <Select
          defaultValue={levelData[0]}
          onChange={handleLevelChange}
          options={levelData.map((level) => ({
            label: level,
            value: level,
          }))}
        />
        </Form.Item>
      </div>
      
      <div
        className='w-full sm:w-1/2'>
          <Form.Item >
      <Select 
          value={secondAreas}
          onChange={onSecondAreasChange}
          options={areas.map((area) => ({
            label: area,
            value: area,
          }))}
        />
        </Form.Item>
        </div>

        </Form>
  
  </div>
      
        
        
       
      
    );
  };
  
  