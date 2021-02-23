// 计算dom元素到顶部的距离
export function getOffsetTop(target) {
  let top = 0
  let parent = target
  if (parent instanceof HTMLElement) {
    while (
      parent instanceof HTMLElement &&
      parent !== document.body
    ) {
      top += parent.offsetTop
      parent = parent.offsetParent
    }
  }
  return top
}

// 只调用一次
export function onceCall(fn) {
  var called = false
  return function() {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}

// 首字母大写
export function firstToUp(str) {
  if (typeof str !== 'string') return str
  return str[0].toLocaleUpperCase() + str.slice(1)
}

// 下划线转驼峰
export function _ToUpper(name) {
  if (typeof name !== 'string') return name
  return name.replace(/(?:\_|\-)(\w+?)/g, function($1, $2) {
    return $2.toLocaleUpperCase()
  })
}

// 是否为空
export function isEmpty(obj) {
  if (isObj(obj)) {
    if (
      ['Object', 'Array'].includes(getObjType(obj))
    ) return !Object.values(obj).toString()
  }
  return !isTrue(obj)
}

// 打平数据
export function flatMap(arr, options) {
  const flatArr = []
  const { childrenCode, callBack } = _DeepAssign({
    childrenCode: 'children'
  }, options)
  const flat = (ar) => {
    if (Array.isArray(ar)) {
      const d = _DeepClone(ar)
      d.forEach(a => {
        flatArr.push(a)
        typeof callBack === 'function' && callBack(a)
        isObj(a) && flat(a[childrenCode])
      })
    }
  }
  flat(arr)
  return flatArr
}

// 数组去重
export function UniqBy(Arr, code) {
  const resultArr = []
  const valArr = []
  const codeArr = []
  Array.isArray(Arr) &&
    Arr.forEach(a => {
      if (isObj(a) && isTrue(code)) {
        !codeArr.includes(a[code]) && resultArr.push(a)
        !codeArr.includes(a[code]) && codeArr.push(a[code])
      } else {
        !valArr.includes(a) && resultArr.push(a)
        !valArr.includes(a) && valArr.push(a)
      }
    })
  return resultArr
}

// 获取数据类型
export function getObjType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

// 清空对象
export function setEmpty(obj) {
  try {
    return new window[getObjType(obj)]().valueOf()
  } catch (e) {
    return ''
  }
}

// 获取结果 支持 方法，对象，promise
export async function getResult(source, ...args) {
  const type = typeof source
  let r = source
  if (type === 'function') {
    r = source(...args)
    if (r && typeof r.then === 'function') {
      r = await r
    }
  } else if (type === 'object') {
    if (typeof source.then === 'function') {
      r = await source
    }
  }
  return r
}

// 对象检测
export function isObj(target) {
  return target !== null && typeof target === 'object'
}

// 非空
export function isTrue(target) {
  return target !== null && target !== undefined && target !== ''
}
// 注入window, 引入 queryList组件 后可在mounted Hook 之后使用
window._DeepAssign = _DeepAssign

// 随机生成rowkey = uuid
export function getUuid(s) {
  return s + (Date.now().toString(32) + Math.random() * Math.pow(10, 5)).split('.')[0]
}
// 千分位金额
export function formatMoney(num, decimal = 2) {
  if (isNaN(num) || !num) return num
  const newNum = (+(+num).toFixed(decimal)) + ''
  return `${newNum.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')}`
}
