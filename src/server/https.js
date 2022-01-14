import ajax from '../assets/lib/api';

const getData = (data) => {
    return ajax({
        url: '/getopenid',
        method: 'get',
        data
    })
}

export {
    getData
}