import Vue from 'vue'
import dayjs from 'dayjs'

//处理最新音乐序号
Vue.filter('formatnumber',function(num){
  num++ 
  return num > 9 ? num : `0${num}`
})

//处理最新音乐多个歌手名字 和 歌曲标签
Vue.filter('formatartis',function(list){
  if(!list) return;
  // console.log(list);
  let namelist = list.map(item=> item.name || item);
  return namelist.length > 1 ?  namelist.join('/') : namelist[0]
})

//处理最新音乐歌曲时长
Vue.filter('formatduration',function(time){
    let minute = dayjs(time).minute();
    let second = dayjs(time).second()
    minute < 9 ? minute = `0${minute} ` : minute 
    second < 9 ? second = `0${second}` : second
    return `${minute}:${second}`
})

//歌单详情创建时间
Vue.filter('formatdate',function(time){
    let year = dayjs(time).year()
    let month = dayjs(time).month()+1
    let date = dayjs(time).date()
    month < 9 ? month = `0${month}`  : month
    date < 9 ? date = '0'+ date :  date
    return `${year}-${month}-${date}`
})

Vue.filter('formatbrs', function(brs){
  
})
