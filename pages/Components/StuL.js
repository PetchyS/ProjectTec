import React, { useState } from 'react'
import { Card, Col, Row } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import { Select, Space ,Table, Tag} from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

const levelData = ['กรุณาเลือก','ปริญญาตรี2ปีหลังปกติ','ปริญญาตรี2ปีหลังกศพ','ปริญญาตรี4ปีปกติ','ปริญญาตรี4ปีกศพ'];
const areaData = {
  กรุณาเลือก:['...'],
  ปริญญาตรี2ปีหลังปกติ: ['เทคโนโลยีอุตสาหกรรม(เทคโนโลยีวิศวกรรมการผลิต)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีโยธา)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีเครื่องกล)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีโยธา)',
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีวิศวกรรมการผลิต)',
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีการจัดการอุตสาหกรรม)' ],
  ปริญญาตรี2ปีหลังกศพ: ['เทคโนโลยีอุตสาหกรรม(เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีโยธา)(เทียบโอน)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีเครื่องกล)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีโยธา)',
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีวิศวกรรมการผลิต)',
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีการจัดการอุตสาหกรรม)',
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีเครื่องกล)'],
  ปริญญาตรี4ปีปกติ: ['เทคโนโลยีโยธา(เทียบโอน)', 
  'เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์(เทียบโอน)', 
  'เทคโนโลยีเซรามิกส์', 
  'เทคโนโลยีโยธา', 
  'เทคโนโลยีวิศวกรรมการผลิต', 
  'เทคโนโลยีวิศวกรรมการผลิต(เทียบโอน)',
  'เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์ ',
  'วิศวกรรมการผลิต',
  'เทคโนโลยีวิศวกรรมเซรามิกส์',
  'วิศวกรรมการจัดการอุตสาหกรรม',
  'วิศวกรรมการจัดการอุตสาหกรรม',
  'วิศวกรรมการจัดการ',
  'วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส',
  'วิศวกรรมการออกแบบและผลิต',
  'วิศวกรรมโยธาและบริหารงานก่อสร้าง'],
  ปริญญาตรี4ปีกศพ: ['เทคโนโลยีโยธา', 
  'เทคโนโลยีวิศวกรรมการผลิต', 
  'เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์', 
  'เทคโนโลยีวิศวกรรมเซรามิกส', 
  'เทคโนโลยีโยธา(เทียบโอน)', 
  'เทคโนโลยีวิศวกรรมการผลิต(เทียบโอน)', 
  'เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์(เทียบโอน)', 
  'วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์']
};
export default function StuL1 () {
    const [areas, setAreas] = useState(areaData[levelData[0]]);
    const [secondAreas, setSecondAreas] = useState(areaData[levelData[0]][0]);
    const [thirdAreas, setThirdAreas] = useState(areaData[levelData[0]][0]);
    const [fourAreas, setFourAreas] = useState(areaData[levelData[0]][0]);
    const handleLevelChange = (value) => {
      setAreas(areaData[value]);
      setSecondAreas(areaData[value]);

    };
    const onSecondAreasChange = (value) => {
      setSecondAreas(value);
    };
    const onThirdAreasChange = (value) => {
        setThirdAreas(value);
    };
    const onFourAreasChange = (value) => {
        setFourAreas(value);
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

      <div
        className='w-full sm:w-1/2'>
          <Form.Item >
          <Select
          value={thirdAreas}
          onChange={onThirdAreasChange}
          options={areas.map((area) => ({
            label: area,
            value: area,
          }))}
        />
        </Form.Item>
        </div>

      

      <div
        className='w-full sm:w-1/2'>
          <Form.Item >
          <Select
          value={fourAreas}
          onChange={onFourAreasChange}
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
  
  