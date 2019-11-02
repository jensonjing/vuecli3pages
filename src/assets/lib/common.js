/**
 * 公共js方法
 */
export const utility = {
    /*从身份证中获取生日  格式 YYYY-MM-DD*/
    getBirthday: function( idCard ) {
        var birthday = "";
        if (idCard != null && idCard != "") {
            if (idCard.length == 15) {
                birthday = "19" + idCard.substr(6, 6);
            } else if (idCard.length == 18) {
                birthday = idCard.substr(6, 8);
            }
            birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
        };
        return birthday;
    },
    /**
     * 将obj对象参数拆分成get请求后的参数
     */
    splitObj:function(obj){
        obj = JSON.stringify(obj);
        obj = obj.replace(/\{|\}|\'|\"+/g,'');
        let arr = obj.split(',');
        for(var i = 0;i<arr.length;i++){
            arr[i] = arr[i].replace(/\:/g,'=') + '&';
        };
        let str = arr.join('');
        str = str.slice(0,str.length-1);
        str = '?' + str;
        return str;
    }
};