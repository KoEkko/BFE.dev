function clz32(num:number):number {
  num = num >>> 0
  if(num === 0) return 32
  return 32 - num.toString(2).length
}
console.log(clz32(4096));