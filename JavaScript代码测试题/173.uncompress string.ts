const isNumeric = (str:string) => !isNaN(parseFloat(str)) && isFinite(Number(str))


//  3(abc)
//  3(ab2(c))  -> 3(abcc) -> abccabccabcc
function uncompress(str:string):string {
  const stack:string[] = []
  for(const s of str) {
    if(s !== ')') {
      stack.push(s) 
      // 3(ab2(c
    } else {
      let word = ''
      let count = ''
      // 1.找字符串
      while(stack.length && stack[stack.length - 1] !== '(') word = stack.pop() + word
      // word = c
      // word = abcc
      stack.pop()
      // stack = 3
      // 2.找重复数字
      while(stack.length && isNumeric(stack[stack.length - 1])) count = stack.pop() + count
      stack.push(word.repeat(Number(count)))
      // abccabccabcc
    }
  }
  return stack.join('')
}


console.log(uncompress('3(ab2(c))'));