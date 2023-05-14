// 1.在实际的工作中，为了满足业务需求，需要把后端返回的扁平化的数组结构，转换成树形结构


// 2. 扁平数据

const list = [
  { id: 1, pid: null, name: 'M1部门' },
  { id: 11, pid: 1, name: '张三' },
  { id: 12, pid: 1, name: '李四' },
  { id: 13, pid: 1, name: '王五' },
  { id: 2, pid: null, name: 'M2部门' },
  { id: 21, pid: 2, name: '赵六' },
  { id: 22, pid: 2, name: '周七' },
  { id: 23, pid: 2, name: '吴八' }
]


// 树形结构
// [
//   {
//     id: 1, pid: null, name: 'M1部门',
//     children: [
//       { id: 11, pid: 1, name: '张三' },
//       { id: 12, pid: 1, name: '李四' },
//       { id: 13, pid: 1, name: '王五' }
//     ]
//   },
//   {
//     id: 2, pid: null, name: 'M2部门',
//     children: [
//       { id: 21, pid: 2, name: '赵六' },
//       { id: 22, pid: 2, name: '周七' },
//       { id: 23, pid: 2, name: '吴八' }
//     ]
//   }
// ]

/**
 * 扁平数据结构转tree
 * 
 * @param list 源数据
 * @param {String} id 唯一的自增id名称
 * @param {String} pid 父id名称
 * @param {String} branch 树杈字段名称
 * @returns roots 目标数据
 */
const listToTree = (list:any[] = [], { id = 'id', pid = 'pid', branch = 'children'} = {} ) => {
  const hash = new Map(), roots:any[] = []
  list.forEach(item => {
    hash.set(item[id], item)
    const parent = hash.get(item[pid])
    if(!parent) {
      roots.push(item)
    } else {
      !parent[branch] && (parent[branch] = [])
      parent[branch].push(item)
    }
  })
  return roots
}


console.log(listToTree(list));