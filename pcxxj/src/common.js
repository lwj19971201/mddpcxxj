/*
* 数据储存
*/
const storage = {
  local(key, value) {
    let _ = localStorage.getItem('_') === null ? {} : JSON.parse(localStorage.getItem('_'))
    if(typeof key !== 'undefined'){
      if(typeof value !== 'undefined'){
        if(value !== null){
          //set
          _[key] = value
        }else{
          //remove
          delete _[key]
        }
      }else{
        //get
        return _[key]
      }
    }
    localStorage.setItem('_', JSON.stringify(_))
  }
}
const deepCopy = obj => JSON.parse(JSON.stringify(obj))

/**
 * @function json2search
 * @param {object} obj 需要转换为查询字符串的对象
 * @return {string} 转换的查询字符串
 * @description 对象转查询字符串
 **/
const json2search = function(obj) {
  let str = []
  for(let i in obj){
    str.push(`${i}=${obj[i]}`)
  }
  if(str.length){
    return '?' + str.join('&')
  }else{
    return ''
  }
}



/*
* 一些方法
*/
const Tool = {
  deepCopy,
  json2search,
}

export { Tool }