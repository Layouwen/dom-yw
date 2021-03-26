window.dyw = {
  // 增
  create(string) { // 创建一个新节点
    let container = document.createElement("template")
    container.innerHTML = string.trim() // trim 清除字符串左右两边的空格
    return container.content.firstChild
  },
  after(node, newNode) { // 在节点后面新增一个节点
    node.parentNode.insertBefore(newNode, node.nextSibling)
  },
  before(node, newNode) { // 在节点前面新增一个节点
    node.parentNode.insertBefore(newNode, node)
  },
  append(node, newChild) { // 新增一个子节点
    node.appendChild(newChild)
  },
  wrap(node, newParent) { // 新增一个父节点
    dyw.before(node, newParent) // 将新节点放到旧节点之前
    dyw.append(newParent, node) // 将旧节点放进新节点之内
  },

  // 删
  remove(removeNode) { // 删除一个节点
    removeNode.parentNode.removeChild(removeNode)
    return removeNode
  },
  empty(nodeParent) { // 删除该元素的所有节点
    let arr = []
    let {
      childNodes
    } = nodeParent
    // 保留之前的节点
    for (let i = 0; i < childNodes.length; i++) {
      arr.push(childNodes[i])
    }
    // 清空节点
    nodeParent.innerHTML = ''
    return arr
  },

  // 改
  attr(node, name, value) { // 设置或查看节点属性
    if (arguments.length === 2) {
      return node.getAttribute(name)
    } else if (arguments.length === 3) {
      node.setAttribute(name, value)
    }
  },
  text(node, string) { // 设置文本内容
    if (arguments.length === 1) {
      return node.innerText
    } else if (arguments.length === 2) {
      node.innerText = string
    }
  },
  html(node, string) { // 设置HTML内容
    if (arguments.length === 1) {
      return node.innerHTML
    } else if (arguments.length === 2) {
      node.innerHTML = string
    }
  },
  style(node, name, value) { // 设置style样式
    if (arguments.length === 2) {
      if (typeof name === 'string') { // dyw.style(节点, '属性名')
        return node.style[name]
      } else if (typeof name === 'object') { // dyw.style(节点, {属性1名: '属性1值', 属性名2: '属性2值'})
        const object = name
        for (let key in object) {
          node.style[key] = object[key]
        }
      }
    } else if (arguments.length === 3) { // dyw.style(节点, '属性名', '属性值')
      node.style[name] = value
    }
  },
  class: {
    add(node, className) { // 添加一个class名
      node.classList.add(className)
    },
    remove(node, className) { // 删除一个class名
      node.classList.remove(className)
    },
    has(node, className) { // 查看是否拥有该样式,有返回 true,没有返回 false
      return node.classList.contains(className)
    }
  },
  on(node, eventName, fn) { // 开启一个事件
    node.addEventListener(eventName, fn)
  },
  off(node, eventName, fn) { // 结束一个事件
    node.removeEventListener(eventName, fn)
  },

  // 查
  find(selector, scope) { // 查找节点
    return (scope || document).querySelectorAll(selector)
  },
  parent(node) { // 查找父节点
    return node.parentNode
  },
  children(node) { // 查找所以子节点
    return node.children
  },
  siblings(node) { // 查找同级所有节点
    // 将子节点数组，过滤出除自己之外的节点
    return Array.from(node.parentNode.children).filter(e => e !== node)
  },
  next(node) { // 获取同级的下一个节点
    let next = node.nextSibling
    // 排除空文本节点
    while (next && next.nodeType === 3) {
      next = next.nextSibling
    }
    return next
  },
  previous(node) { // 获取同级的上一个节点
    let previous = node.previousSibling
    // 如果上一个为空文本节点，则排除
    while (previous && previous.nodeType === 3) {
      previous = previous.previousSibling
    }
    return previous
  },
  each(nodes, fn) { // 遍历元素
    for (let i = 0; i < nodes.length; i++) {
      fn.call(null, nodes[i])
    }
  },
  index(node) { // 获取元素下标
    const list = dom.children(node.parentNode)
    let i
    for (i = 0; i < list.length; i++) {
      if (list[i] === node) {
        break
      }
    }
    return i
  }
}