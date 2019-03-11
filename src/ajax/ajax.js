import axios from 'axios'
export default function ajax (url,data={},method='GET') {
  return new Promise((resolve, reject)=>{
    let pro
    if(method==='GET'){
      pro = axios.get(url,{params:data})
    }else {
      pro = axios.post(url,data)
    }
    pro
      .then((response)=>{
        resolve(response.data)
      })
      .catch(err=>console('请求失败',err))
  })
}
