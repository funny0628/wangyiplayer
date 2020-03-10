import Vue from 'vue'
import Axios from 'axios'
import { Loading,Message  } from 'element-ui';

const request = Axios.create({
    // baseURL:"http://localhost:3000"
    baseURL: "https://api.mtnhao.com/"
})

//发现音乐 ---------------------------------------------------------------------------

//获取banner 数据
//1.可以直接封装成函数
// export const getbanner =()=> request.get('/banner?type=0');

//2.挂载在axios上面
request.Getbanner = () => {
    return request.get('/banner?type=0');
}

//获取推荐歌单
request.Getsonglist = (params) => {
    return request.get('/personalized', {
        params
    })
}
//最新音乐
request.Getnewestsongs = () => {
    return request.get('/personalized/newsong')
}
//最新MV
request.Getpersonalized = () => {
    return request.get('/personalized/mv')
}

//推荐歌单----------------------------------------------------------------
//精品歌单 1
request.Gethighquality = (params) => {
    return request.get('/top/playlist/highquality', { params})
}
request.Getplaylist = (params) => {
    return request.get('/top/playlist', { params })
}

//最新音乐----------------------------------------------------------------------
//推荐新音乐
request.Getnewsong = (params) => {
    return request.get('/top/song', { params })
}

//最新MV-------------------------------------------------------------------
request.Getmv = (params) => {
    return request.get('/mv/all',{params})
}

//获取top歌单详情
request.Getplaylistdetail = (params) => {
    return request.get('/playlist/detail', { params })
}

//获取歌单列表详情
request.Getsongdetail = (params) => {
    return request.get('/song/detail', { params })
}

//mv详情页面的相似MV
request.Getsimimv = (params) => {
    return request.get('/simi/mv', { params })
}

//mv详情页面的mv数据
request.Getmvdetail = (params) => {
    return request.get('/mv/detail', { params })
}

//获取mv 的url
request.Getmvurl = (params) => {
    return request.get('/mv/url', { params })
}

//获取mv评论
request.Getmvcoment = (params) => {
    return request.get('/comment/mv', { params })
}

//headerseach 热门搜索
request.Gethotsearch = ()=>{
    return request.get('/search/hot')
}

//search songs
request.Getsongs = (params)=>{
    return request.get('/search',{params})
}

//获取音乐的播放地址
request.Getsongurl = (params)=>{
    return request.get('/song/url',{params})
}

//获取歌单评论
request.songSheetComment = (params)=>{
    return request.get('/comment/playlist',{params})
}



















//请求拦截
request.interceptors.request.use(requeststart,handleError)

//相应拦截
request.interceptors.response.use(responseend, handleError)

let loading;
let startcount = 0;
let AUTH_TOKEN = localStorage.getItem('token')
//请求拦截
function requeststart(config) {
    //添加统一的loading
    if (startcount === 0 && !loading) {
        loading = Loading.service({
            target: "body",
            text: '数据加载中',
            background: 'rgba(255,255,255,0.4)',
        });
    }
    startcount++
    return config;
}
//相应拦截
function responseend(response) {
    //取消loading
    startcount--;
    if (startcount === 0) {
        loading.close();
        loading = null;
    }
    return response;
}
//错误处理
function handleError(e) {
    Message.error({message:e.message})
    throw e
}

export default request;

