import { Button, Checkbox, Form, Radio, Card, Select } from 'antd';
export default function InputEvent() {
    return (
        <div className="flex bg-red-800 min-h-full items-center justify-center pt-12 sm:px-5 lg:px-2">
            <Card>
                <Form
                    layout="inline"
                    name='registerForm'
                    action='#'
                >
                    <div className='w-full mt-4 text-center' >
                        <Card className=' bg-gradient-to-br from-white to-lime-50'>
                            <Form layout="inline">
                                <label className='w-full my-3' style={{ fontSize: 18 }}>ข้อมูลสถานศึกษาเดิม/โรงเรียนเดิม</label>

                                <div className='mt-2 w-full sm:w-2/4 text-start'>
                                    <label>ขื่อโรงเรียนเดิม</label>
                                    <Form.Item
                                        name="schoolName"
                                        rules={[{ required: true, message: 'กรุณาเลือกชื่อโรงเรียน' }]}
                                    >
                                        <select id="schoolName" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected className=' text-gray-500' >กรุณาเลือก</option>
                                            <option value="โรงเรียนศรีสงครามวิทยา">โรงเรียนศรีสงครามวิทยา</option>
                                        </select>
                                    </Form.Item>
                                    {/* <Form.Item name="schoolName"
                                        rules={[{ required: true, message: 'กรุณาเลือกชื่อโรงเรียน' }]} label="ขื่อโรงเรียนเดิม">
                                        <Select name="schoolName" placeholder="กรุณาเลือก">
                                            <Select.Option value="โรงเรียนศรีสงครามวิทยา">โรงเรียนศรีสงครามวิทยา</Select.Option>
                                        </Select>
                                    </Form.Item> */}
                                </div>

                                <div className='mt-2 w-1/2 sm:w-1/4 text-start'>
                                    <label>อำเภอ</label>
                                    <Form.Item
                                        name="district"
                                        rules={[{ required: true, message: 'กรุณาเลือกอำเภอ' }]}
                                    >
                                        <select id="district" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected className=' text-gray-500' >กรุณาเลือก</option>
                                            <option value="วังสะพุง">วังสะพุง</option>
                                        </select>
                                    </Form.Item>

                                </div>

                                <div className='mt-2 w-1/2 sm:w-1/4 text-start'>
                                    <label>จังหวัด</label>
                                    <Form.Item
                                        name="province"
                                        rules={[{ required: true, message: 'กรุณาเลือกจังหวัด' }]}
                                    >
                                        <select placeholder='hi' id="province" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>กรุณาเลือก</option>
                                            <option value="เลย">เลย</option>
                                        </select>
                                    </Form.Item>
                                </div>

                                <label className='w-1/2 mt-5 pr-5 text-end'>สถานศึกษา : </label>
                                <div className='w-1/2 mt-4 text-start'>
                                    <Form.Item name="academy"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'กรุณาเลือกสถานศึกษา'
                                            },
                                        ]}>
                                        <Radio.Group id='academy'>
                                            <Radio className='' value="1"> รัฐบาล</Radio>
                                            <Radio className='' value="2"> เอกชน</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </div>

                                <label className='w-1/2 mt-5 pr-5 text-end'>เกรดเฉลี่ยสะสมโรงเรียนเดิม : </label>
                                <div className='mt-2 w-1/2 sm:w-1/2 text-start'>
                                    <Form.Item style={{ width: 120 }}
                                        name="grade"
                                        rules={[{ required: true, message: 'กรุณาเลือกเกรดเฉลี่ยนสะสม' }]}
                                    >
                                        <select id="grade" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected >กรุณาเลือก</option>
                                            <option value="1.50-2.00">1.50-2.00</option>
                                            <option value="2.01-2.50">2.01-2.50</option>
                                            <option value="2.51-3.00">2.51-3.00</option>
                                            <option value="3.51 ขึ้นไป">3.51 ขึ้นไป</option>
                                        </select>
                                    </Form.Item>
                                </div>

                            </Form>
                        </Card>
                    </div>


                    <div className='w-full mt-4 text-center' >
                        <Card className=' bg-lime-50'>
                            <Form layout="inline">
                                <label className='w-full my-3' style={{ fontSize: 18 }}>ข้อมูลครอบครัว</label>

                                <label className='w-1/2 mt-5 pr-5 text-end text-xs sm:text-sm'>อาชีพผู้ปกครอง : </label>
                                <div className='mt-2 w-1/2 sm:w-1/4 text-start'>
                                    <Form.Item
                                        name="occupation"
                                        rules={[{ required: true, message: 'กรุณาเลือกอาชีพของผู้ปกครอง' }]}
                                    >
                                        <select id="occupation" class="bg-gray-50 border text-xs sm:text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected className=' text-gray-500' >กรุณาเลือก</option>
                                            <option value="ข้าราชการ">ข้าราชการ</option>
                                            <option value="ลูกจ้างหน่วยงานรัฐ">ลูกจ้างหน่วยงานรัฐ</option>
                                            <option value="พนักงานรัฐวิสาหกิจ">พนักงานรัฐวิสาหกิจ</option>
                                            <option value="พนักงานบริษัทเอกชน">พนักงานบริษัทเอกชน</option>
                                            <option value="เกษตรกรรม">เกษตรกรรม</option>
                                            <option value="ค้าขาย/ประกอบกิจการส่วนตัว">ค้าขาย/ประกอบกิจการส่วนตัว</option>
                                            <option value="รับจ้างทั่วไป">รับจ้างทั่วไป</option>
                                        </select>
                                    </Form.Item>
                                </div>

                                <label className='w-1/2 mt-5 pr-5 text-end text-xs sm:text-sm'>รายได้รวมต่อเดือนของครอบครัว : </label>
                                <div className='mt-2 w-1/2 sm:w-1/4 text-start'>
                                    <Form.Item
                                        name="income"
                                        rules={[{ required: true, message: 'กรุณาเลือกจำนวนรายได้ของครอบครัว' }]}
                                    >
                                        <select id="income" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected className=' text-gray-500' >กรุณาเลือก</option>
                                            <option value="ต่ากว่า 40,000">ต่ากว่า 40,000</option>
                                            <option value="40,001-60,000">40,001-60,000</option>
                                            <option value="8,001-100,000">8,001-100,000</option>
                                            <option value="100,000 ขึ้นไป">100,000 ขึ้นไป</option>
                                        </select>
                                    </Form.Item>
                                </div>

                            </Form>
                        </Card>
                    </div>

                    <div className='w-full mt-4 text-center' >
                        <Card className=' bg-gradient-to-br from-white to-orange-50'>
                            <Form layout="inline">
                                <label className='w-full my-3' style={{ fontSize: 18 }}>ปัจจัยผลต่อการตัดสินใจเข้าศีกษาต่อ</label>

                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className=' w-1/12 text-xs sm:text-sm'>ลำดับ</th>
                                            <th className=' w-6/12 text-xs sm:text-sm' >ปัจจัยผลต่อการตัดสินใจเข้าศีกษา</th>
                                            <th className=' w-1/12 text-xs sm:text-sm' >5 มากที่สุด</th>
                                            <th className=' w-1/12 text-xs sm:text-sm' >4 มาก</th>
                                            <th className=' w-1/12 text-xs sm:text-sm' >3 พอใช้</th>
                                            <th className=' w-1/12 text-xs sm:text-sm' >2 น้อย</th>
                                            <th className=' w-1/12 text-xs sm:text-sm' >1 น้อยมาก</th>
                                        </tr>
                                    </thead>
                                </table>

                                <label className='text-start' style={{ width: 220 }}>ปัจจัยด้านสถาบันการศึกษา</label>
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className=' w-1/12'></th>
                                            <th className=' w-6/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td className='text-start'>ความมีชื่อเสียงของมหาวิทยาลัยและเป็นที่ยอมรับของสังคม</td>
                                            <td><input rules={[{ required: true, message: 'กรุณาเลือก' }]} id="radio-1" type="radio" value="5" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="4" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="3" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="2" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="1" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className='text-start'>เป็นมหาวิทยาลัยที่จบออกมาแล้วเป็นที่ยอมรับในตลาดแรงงาน</td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td className='text-start'>เป็นมหาวิทยาลัยที่มีความทันสมัยและมีความพร้อมในทุกด้าน</td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td className='text-start'>สถานที่ตั้งของมหาวิทยาลัยเดินทางมาเล่าเรียนสะดวกสบาย</td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td className='text-start'>นักเรียนมีความปรารถนาที่จะเรียนสาขาที่เลือกในมหาวิทยาลัยนี้ เพราะพ่อ แม่ และผู้ปกครองจบจากมหาวิทยาลัยนี้ หรือ เพื่อนๆ ชักชวน</td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <label className='text-center w-full'><hr class="w-48 h-1 mx-auto bg-white border-0 rounded my-4 dark:bg-gray-700" /></label>
                                <label className='text-start' style={{ width: 220 }}>ปัจจัยด้านการเงิน</label>
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className=' w-1/12'></th>
                                            <th className=' w-6/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td className='text-start'>ค่าธรรมเนียมการศึกษา เช่น ค่าหน่วยกิตและค่าลงทะเบียน มีราคาเหมาะสม</td>
                                            <td><input id="radio-1" type="radio" value="5" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="4" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="3" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="2" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="1" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className='text-start'> ทุนการศึกษามีผลต่อการตัดสินใจในการเลือกเรียน</td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td className='text-start'>ค่าครองชีพเพียงพอจากผู้ปกครองหรือแหล่งทุน</td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td className='text-start'>ค่าอาหารจากโรงอาหารหรือร้านค้าอื่นๆในมหาวิทยาลัย</td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <label className='text-center w-full'><hr class="w-48 h-1 mx-auto bg-white border-0 rounded my-4 dark:bg-gray-700" /></label>
                                <label className='text-start' style={{ width: 220 }}>ปัจจัยด้านหลักสูตร</label>
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th  scope="col" className=' w-1/12'></th>
                                            <th className=' w-6/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td className='text-start'>หลักสูตรที่เปิดสอนเป็นที่นิยม และเป็นที่ต้องการของตลาดแรงงาน ในปัจจุบัน</td>
                                            <td><input id="radio-1" type="radio" value="5" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="4" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="3" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="2" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="1" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className='text-start'>คณาจารย์ประจำหลักสูตรได้รับการยอมรับจากภายนอก</td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td className='text-start'>มีห้องเรียนที่ได้มาตรฐานและบรรยากาศดี</td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td className='text-start'>ทักษะ ความรู้ และความสามารถที่นักศึกษาเป็นที่ยอมรับ</td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td className='text-start'>มีความคาดหวังในโอกาสและอาชีพที่รองรับหลังสำเร็จการศึกษา</td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <label className='text-center w-full'><hr class="w-48 h-1 mx-auto bg-white border-0 rounded my-4 dark:bg-gray-700" /></label>
                                <label className='text-start' style={{ width: 220 }}>ปัจจัยด้านครอบครัว</label>
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className=' w-1/12'></th>
                                            <th className=' w-6/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td className='text-start'>รายได้ของครอบครัวเพียงพอต่อการเรียนตลอดหลักสูตร</td>
                                            <td><input id="radio-1" type="radio" value="5" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="4" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="3" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="2" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="1" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className='text-start'>ครอบครัวสนับสนุนทุกๆด้านของการเข้าศึกษาต่อ</td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td className='text-start'>ทุนการศึกษา หรือ สิทธิประโยชน์ ที่คาดว่าจะได้รับ</td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <label className='text-center w-full'><hr class="w-48 h-1 mx-auto bg-white border-0 rounded my-4 dark:bg-gray-700" /></label>
                                <label className='text-start' style={{ width: 220 }}>ปัจจัยทางด้านสังคม</label>
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className=' w-1/12'></th>
                                            <th className=' w-6/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                            <th className=' w-1/12' ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td className='text-start'>ความเห็นของเพื่อนในการแนะนำศึกษาต่อ</td>
                                            <td><input id="radio-1" type="radio" value="5" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="4" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="3" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="2" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-1" type="radio" value="1" name="radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className='text-start'>ความเห็นของคนรักในการแนะนำศึกษาต่อ</td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-2" type="radio" value="" name="radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td className='text-start'>ความเห็นของคุณครูในการแนะนำศึกษาต่อ</td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-3" type="radio" value="" name="radio3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td className='text-start'>ความเห็นของครอบครัวในการแนะนำศึกษาต่อ</td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-4" type="radio" value="" name="radio4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td className='text-start'>ความเห็นของมหาวิทยาลัยในการแนะนำศึกษาต่อ</td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                            <td><input id="radio-5" type="radio" value="" name="radio5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Form>
                        </Card>
                        <Button type="primary" className=' bg-red-800' htmlType="submit">
                            Submit
                        </Button>
                    </div>

                </Form>
            
  {/* date: 25/04/2566
  name: petch samat 
  lastEdit:  */}
            </Card></div>
    )
}