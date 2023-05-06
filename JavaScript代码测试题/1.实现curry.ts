function curry(fn:any) {
  return function curryInner(...args:any) {
    if(args.length >= fn.length) return fn(...args)
    return (...args2:any) => curryInner(...args,...args2)
  }
}