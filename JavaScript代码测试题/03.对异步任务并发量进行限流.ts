

// handler异步函数获得的结果将传递给callback函数
// callback将结果result保存在response数组中
// runInSequence函数会递归的调用，直到list长度为0
// list长度为0，也就是说明list中的异步任务全部处理完毕，response可以给resolve了，此时第一次循环结束，
// 如果是多次并发处理，limit就会起到作用了，只能同时执行limit次

const runInSequence = async (list:[], handler, callback) => {
  const item = list.shift()
  if(item) {
    const result = await handler(item)
    callback(result)
    list.length && runInSequence(list, handler, callback)
  }
}



/**
 * 异步任务并发量的控制
 * @param {Array} list 迭代数组
 * @param {Number} limit 控制的并发数量
 * @param {Function} handler 对list每一项的处理函数
 * @returns 所有 Promist 中结果response 
 */


// handler回调函数，调用者在其中书写对应的处理函数


const asyncThrottle = ({ list: [], limit = 3, handler = () => {} }) => {
  const response:any[] = [], len = list.length
  return new Promise(resolve => {
    limit = len > limit ? limit : len
    while(limit--) {
      runInSequence(list as [], handler, (result) => {
        response.push(result)
        response.length === len && resolve(response)
      })
    }
  })
}