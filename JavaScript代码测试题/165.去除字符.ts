function removeChars(input:string):string {
  const stack:string[] = []
  for(let i = 0; i < input.length ; i++) {
    const char = input[i]
    if(stack.length && char === 'c' && stack[stack.length - 1] === 'a' ) {
      stack.pop()
    } else if (char !== 'b') {
      stack.push(char)
    }
  }
  return stack.join('')
}

console.log(removeChars('cabbaabcca'));