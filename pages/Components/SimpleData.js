import React from 'react'

export default function SimpleData() {
    const Data = [
        {
            key: '1',
            join: 'เข้าร่วมกิจกรรม',
            EventKey: '65SC25001',
            EventName: 'กิจกรรม 1',
            Eduterm: 'ปีการศึกษา' + 2563,
            TermNum: 'เทอมที่' + 2,
            EventRank: 'สาขา',
            MaxCount: 50,
            Bodycount: 30,
            HourCount: 3 + 'ชั่วโมง',
            begin:'วันที่ ...',
            end:'วันที่ ...',
            Edurank:'ปริญญา...',
            twotime:true,
            place:'...',
            status:'...',
            Summarycount: 30 + '/' + 50,
        },
        {
            key: '2',
            join: 'เข้าร่วมกิจกรรม',
            EventKey: '65SC25002',
            EventName: 'กิจกรรม 2',
            Eduterm: 'ปีการศึกษา' + 2565,
            TermNum: 'เทอมที่' + 2,
            EventRank: 'สาขา',
            MaxCount: 60,
            Bodycount: 30,
            HourCount: 1 + 'ชั่วโมง',
            begin:'วันที่ ...',
            end:'วันที่ ...',
            Edurank:'ปริญญา...',
            twotime:false,
            place:'...',
            status:'...',
            Summarycount: 30 + '/' + 60,
        },
        {
            key: '3',
            join: 'เข้าร่วมกิจกรรม',
            EventKey: '65SC25003',
            EventName: 'กิจกรรม 3',
            Eduterm: 'ปีการศึกษา' + 2564,
            TermNum: 'เทอมที่' + 1,
            EventRank: 'คณะ',
            MaxCount: 40,
            Bodycount: 30,
            HourCount: 6 + 'ชั่วโมง',
            begin:'วันที่ ...',
            end:'วันที่ ...',
            Edurank:'ปริญญา...',
            twotime:true,
            place:'...',
            status:'...',
            Summarycount: 30 + '/' + 40,
        },
        {
            key: '4',
            join: 'เข้าร่วมกิจกรรม',
            EventKey: '65SC25004',
            EventName: 'กิจกรรม 4',
            Eduterm: 'ปีการศึกษา' + 2566,
            TermNum: 'เทอมที่' + 1,
            EventRank: 'คณะ',
            MaxCount: 50,
            Bodycount: 30,
            HourCount: 2 + 'ชั่วโมง',
            begin:'วันที่ ...',
            end:'วันที่ ...',
            Edurank:'ปริญญา...',
            twotime:false,
            place:'...',
            status:'...',
            Summarycount: 30 + '/' + 50,
        }
    ];

    return (
        Data
    )
}
