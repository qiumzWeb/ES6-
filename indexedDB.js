class DBStorage {
  constructor(name) {
    this.db = ''
    this.dbName = name
  }
  // 打开db
  open(name) {
    return new Promise((resolve, reject) => {
      const openDB = window.indexedDB.open(name)
      openDB.onerror = function(error) {
        console.log(error.target.error.message)
        resolve(false)
      }
      openDB.onupgradeneeded = event => {
        const db = event.target.result
        const dbStorate = db.createObjectStore(name, { keyPath: 'id' })
        dbStorate.createIndex('value', 'value', { unique: true })
      }
      openDB.onsuccess = (event) => {
        const db = event.target.result
        this.db = db
        this.dbName = name
        resolve(this)
      }
    })
  }
  // 创建事务
  createTransaction(type = 'readwrite') {
    return this.db.transaction([this.dbName], type)
      .objectStore(this.dbName)
  }
  // 存储数据
  async set(name, value) {
    await this.remove(name)
    await this.add(name, value)
  }
  // 新增数据
  add(name, value) {
    return new Promise(async(resolve, reject) => {
      await this.open(this.dbName)
      const request = this.createTransaction().add({
        id: name,
        value
      })
      request.onsuccess = () => {
        resolve(this)
      }
      request.onerror = error => {
        console.log(error.target.error.message)
        resolve(false)
      }
    })
  }
  // 读取数据
  get(name) {
    return new Promise(async(resolve, reject) => {
      await this.open(this.dbName)
      const request = this.createTransaction('readonly').get(name)
      request.onerror = (error) => {
        console.log(error.target.error.message)
        resolve(false)
      }
      request.onsuccess = e => {
        resolve(e.target.result && e.target.result.value || null)
      }
    })
  }
  // 删除数据
  remove(name) {
    return new Promise(async(resolve, reject) => {
      await this.open(this.dbName)
      const request = this.createTransaction().delete(name)
      request.onsuccess = () => {
        resolve(true)
      }
      request.onerror = error => {
        console.log(error.target.error.message)
        resolve(false)
      }
    })
  }
  // 清空
  clear(noClearArr) {
    return new Promise(async(resolve, reject) => {
      const keys = await this.getAllKeys()
      let clearKeys = keys
      if (Array.isArray(noClearArr)) {
        clearKeys = keys.filter(e => !noClearArr.includes(e))
      }
      clearKeys.forEach(k => {
        this.remove(k)
      })
    })
  }
  // 获取所有keys
  getAllKeys() {
    return new Promise(async(resolve, reject) => {
      await this.open(this.dbName)
      const request = this.createTransaction().getAllKeys()
      request.onsuccess = () => {
        resolve(request.result)
      }
      request.onerror = error => {
        console.log(error.target.error.message)
        resolve([])
      }
    })
  }
}
export default {
  install(Vue) {
    const dbStorage = new DBStorage('BASE_DATA_DB')
    Vue.prototype.dbStorage = dbStorage
    window.dbStorage = dbStorage
  }
}
