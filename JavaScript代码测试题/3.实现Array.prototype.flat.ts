// 1.迭代
function flat (arr:any[], depth:number = 1):any[] {
  const res:any[] = []
  const stack:any[] = [...arr.map(item => [item, depth])]
  while(stack.length) {
    const [top, depth] = stack.pop()
    if(Array.isArray(top) && depth > 0) {
      stack.push(...top.map(item => [item, depth - 1]))
    } else {
      res.push(top)
    }
  }
  return res.reverse()
}


// 2.递归
function flat2 (arr:any[], depth:number = 1) {
  const res:any[] = []
  for(const a of arr) {
    if(Array.isArray(a) && depth > 0 ) {
      res.push(...flat(a, depth - 1))
    } else {
      res.push(a)
    }
  }
  return res
}
