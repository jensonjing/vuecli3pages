import api from '../assets/lib/api';
/**
 * 发送请求示例：
 * let params = {aa:2};
 * this.$https.getData(params).then(res=>{
 *  console.log(res)
 * });
*/
const users = {
    getData(params){
        return api.getAxios('get','/cache/manage/business/JobIntroduction/company/job/v1.0/GetNew',params);
    },
    getInfo(params){
        return api.getAxios('post','/JobIntroduction/company/job/v1.0/GetNew',params);
    }
};

export default users;