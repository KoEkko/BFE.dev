// 给定两个数组，请返回其共同存在的元素。

// 数组未排序，可能含有重复元素
// 数组可以修改
// 结果数组可以是任何排序，不过不能有重复元素


function getIntersection(arr1:any[],arr2:any[]):any[] {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  return [...set1].filter(a => set2.has(a))
}