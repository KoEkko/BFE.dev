// 1.树形结构

// [
//   { 
//     id: 1, pid: null, name: 'M1部门', children: [
//       { id: 11, pid: 1, name: '张三', },
//       { id: 12, pid: 1, name: '李四' },
//       { id: 13, pid: 1, name: '王五' }
//     ]
//   },
//   {
//     id: 2, pid: null, name: 'M2部门', children: [
//       { id: 21, pid: 2, name: '赵六' },
//       { id: 22, pid: 2, name: '周七' },
//       { id: 23, pid: 2, name: '吴八' }
//     ]
//   }
// ]


// 2. 扁平数据

// [
//   { id: 1, pid: null, name: 'M1部门' },
//   { id: 11, pid: 1, name: '张三' },
//   { id: 12, pid: 1, name: '李四' },
//   { id: 13, pid: 1, name: '王五' },
//   { id: 2, pid: null, name: 'M2部门' },
//   { id: 21, pid: 2, name: '赵六' },
//   { id: 22, pid: 2, name: '周七' },
//   { id: 23, pid: 2, name: '吴八' }
// ]



//  优秀源码分析：
//  将模板内容存入文档片段

const node2fragment = node => {
  
  // 创建文档片段
  const fragment = document.createDocumentFragment()
  let child = null
  // 遍历传入节点中的所有子节点，依次添加到文档片段中
  while(child = node.firstChild) {
    fragment.appendChild(child)
  }
  return fragment
}


// 循环拍平树结构

// 通过while循环将数据源source中的每一项依次添加到目标数据list中
// 通过解构取出循环项item中的子级，以前置队列的方式放至source中，



const flatTree = (source:any[], branch = 'children', isChildren = false) => {
  let list:any[] = [], item = {}
  while(item = source.shift()) {
    const { [branch]:children, ...rest } = item
    list.push(isChildren ? item : rest)
    if(children?.length) {
      source = [...children, ...source]
    }
  }
  return list
}