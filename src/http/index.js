import Vue from 'vue'
import Axios from 'axios'

const request = Axios.create({
    // baseURL:"http://localhost:3000"
    baseURL:"https://api.mtnhao.com/"
})

//发现音乐 ---------------------------------------------------------------------------

//获取banner 数据
//1.可以直接封装成函数
// export const getbanner =()=> request.get('/banner?type=0');

//2.挂载在axios上面
request.Getbanner = ()=>{
    return  request.get('/banner?type=0');
}

//获取推荐歌单
request.Getsonglist = (params)=>{
    return request.get('/personalized',{
        params
    })
}
//最新音乐
request.Getnewestsongs = ()=>{
    return request.get('/personalized/newsong')
}
//最新MV
request.Getpersonalized = ()=>{
    return request.get('/personalized/mv')
}

//推荐歌单----------------------------------------------------------------
//精品歌单 1
request.Gethighquality = (params)=>{
    return request.get('/top/playlist/highquality',{params})
}
request.Getplaylist = (params) =>{
    return request.get('/top/playlist',{params})
}

//最新音乐----------------------------------------------------------------------
//推荐新音乐
request.Getnewsong = (params)=>{
    return request.get('/top/song',{params})
}

//最新MV-------------------------------------------------------------------
request.Getmv = ()=>{
    return request.get('/mv/all')
}

//获取top歌单详情
request.Getplaylistdetail =(params)=>{
    return request.get('/playlist/detail',{params})
}

//获取歌单列表详情
request.Getsongdetail = (params)=>{
    return request.get('/song/detail',{params})
}

//mv详情页面的相似MV
request.Getsimimv = (params)=>{
    return request.get('/simi/mv',{params})
}

//mv详情页面的mv数据
request.Getmvdetail = (params)=>{
    return request.get('/mv/detail',{params})
}







export default request;

