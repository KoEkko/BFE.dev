function invert(node:any) {
  if(!node) return null;
  [node.left, node.right] = [invert(node.right),invert(node.left)]
  return node
}


function invert2(node:any) {
  if(!node) return null
  let leftNode = invert(node.left)
  let rightNode = invert(node.right)
  node.left = rightNode
  node.right = leftNode
  return node
}