/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  // your code here
  let timer:any = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, args), wait)
  }
}

