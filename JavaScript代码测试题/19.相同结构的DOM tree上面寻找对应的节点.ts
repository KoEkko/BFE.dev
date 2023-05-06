
/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  // your code here
  const stack = [[rootA, rootB]]
  while(stack.length) {
    const [leftNode, rightNode] = stack.pop()
    if(leftNode === target) return rightNode
    for(let i =0; i < leftNode.children.length; i++) {
      stack.push([leftNode.children[i], rightNode.children[i]])
    }
  }
}