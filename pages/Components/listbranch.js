import axios from 'axios';

const listdata = {
  data: {
    'สาขา': { state: [] }
  }
};

axios.get('http://api-dev-cwie.idmis.lru.ac.th//branch/allBranch').then(response => {
    const data = response.data;

    data.forEach(item => {
        // เพิ่ม branch_name ใน ตัวแปร
      listdata.data['สาขา'].state.push(item.branch_name);
    });

    console.log(listdata);
  })
  .catch(error => {
    console.error(error);
  });
export default listdata;