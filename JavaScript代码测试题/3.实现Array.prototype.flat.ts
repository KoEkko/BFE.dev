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