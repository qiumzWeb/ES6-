# 1、 let const 替代 var 

    优点： 只在作用域内有效，不存在变量提升 
    性能： const > let > var
    作用： 
        let  =>  变量声明
        const => 常量声明 或者 内存地址不变的对象声明 

# 2、解构赋值

    let [a, b, ...args] = [1, 2, 3, 4, 5]
        => a = 1, b = 2, args = [3, 4, 5]

    let {a, b, ...args} = {a:1, b:1, c:1, d:1, e:1}
        => a = 1, b = 1, args = {c:1, d:1, e:1}

# 3、模板字符串  `普通字符  ${变量} `

    使用方法：
        传统字符串 ： "abc" + Object + "cdef"
        es6字符串 ： `abc${Object}cdef`

# 4、字符串重复输出 String.repeat()

    使用方法 :
        "mkl".repeat(3)  =>  "mklmklmkl"
        "mkl".repeat('3') => "mklmklmkl" （字符串会转换成数字）
        "mkl".repeat(2.9) => "mklmkl"  (小数会向下取整)

# 5、去除字符串空格  String.trim()   String.trimStart()  String.trimEnd()
    
    使用方法：
        1、去除开头 和 结尾的空格
            "  1 23  ".trim()  =>  "1 23"
        
        2、只去除开头 的空格 
            "   1 23  ".trimStart()  =>  "1 23  "

        3、只去除结尾的空格
            "   1 23  ".trimEnd()  =>  "  1 23"

# 6、函数参数 的 默认值 设置 
    
    使用方法 ：
        function ( a = 1) {}   

# 7、获取函数的参数  ...args

    使用方法：
        function mkl(...args) {
            console.log(args)
        } 
        function qmz(a,b, ...args) {
            console.log(args)
        }

        mkl(1,2,3,4) =>  [1,2,3,4]
        qmz(1,2,3,4) =>  [3,4]

# 箭头函数  （） => {}

    注：
        1、this 指向 为当前定义时所在 的对象  而非 使用时所在的 对象，
            this 指向 是固定的，而非普通函数一样是动态的

        2、不能当作构造函数 来使用  ， 既不用使用  new 命令， 否则报错

        3、没有arguments 属性  只能通过 ...args 方法 获取参数 

        4、不可以使用yield命令，因此箭头函数不能用作 Generator 函数

# 对象的合并  Object.assign()  =>  把一个对象合并到 另一个对象

    使用方法：
        1、把 a 对象 合并 到 b 对象中 生成 一个新的对象 C
            let a = {a:1}
            let b = {b:1}
            let c = Object.assign(b, a)  =>  {b:1, a:1}

        注： 此时 若改变 b 的属性值 ，C 也会跟着变
            b.b = 2 
            console.log(b) =>  {b:2}
            console.log(c) =>  {b:2, a:1}

            若要C 不受 b 影响， 可以这样 ：
            let c = Object.assign({}, b, a) => {b:1, a:1}
            b.b = 2
            console.log(b) => {b:2}
            console.log(c) => {b:1, a:1}

        注：
        Object.assign() 只 拷贝 可枚举 （enumerable: true）和自身属性，
        不可枚举 和 继承属性不会被拷贝

# 获取对象私有的属性 值 并输出为 数组  
## Object.keys() Object.values() Object.entries()
## Object.getOwnPropertyNames()  Object.getOwnPropertySymbols()
## Reflect.ownKeys()

    使用方法：

        let a = {a:1, b:2, c:3, [Symbol('a')]:1}
        Object.defineProperty(a, 'd' , {
            value: 4,
            writable: true,
            configurable: true,
            enumberable: false,
        })

        1、 获取对象的 key 值 ： 

            Object.keys(a) =>  ['a', 'b', 'c']

        2、获取对象的 value 值：

            Object.values(a) => [1, 2, 3]
        
        3、获取对象的  key 和 value 值：

            Object.entries(a) => [['a', 1], ['b', 2], ['c', 3]]
        
        4、获取对象 的key 值 ，包括不可枚举的，但不包括 Symbol 属性

            Object.getOwnPropertyNames(a) => ['a', 'b', 'c', 'd']

        5、获取对象 所有 的 Symkol 属性 的 key 值

            Object.getOwnPropertySymbols(a)  => [Symbol(a)]

        6、获取对象 所有属性 的key

            Reflect.ownKeys(a) => ["a", "b", "c", "d", Symbol(a)]


# 异步对象 Promise  ， 异步函数  new Promise()

    使用方法：

### new Promise()

        1、创建一个异步方法：
            const asyncFn = num => new Promise((resolve, reject) => {
                if (num) {
                    resolve (num)
                } else {
                    reject ('num is not define')
                }
            })
            使用 then  方法来获取 结果 ：
             asyncFn(1).then(result => console.log(result))  =>  1
             asyncFn().then(result => console.log(result), error => console.log(error))
                =>  'num is not define'
            使用 catch 方法来获取 错误结果：
             asyncFn().catch( error => console.log(error)) =>  'num is not define'

###  Promise.all()

        2、等到所有 异步 方法返回结果后再输出结果: 
            const awaitAll = (...args) => Promise.all([...args])

            let p1 = Promise.resolve(1)
            let p2 = Promise.reject(2)
            let p3 = Promise.resolve(3)
            let p4 = Promise.reject(2).catch(e => e)

            awaitAll(p1, p2).then(e => console.log(e))  => 抛出错误： error : 2
            awaitAll(p1, p3).then(e => console.log(e))  =>  [1, 3]
            awaitAll(p1, p4).then(e => console.log(e))  =>  [1, 2]

### Promise.race()

        3、在所有 异步 方法中，取最快返回的结果
            const getFast = (...args) => Promise.race([...args])

            let p1 = new Promise(resolve => setTimeout(() => resolve(1), 1000))
            let p2 = new Promise(resolve => setTimeout(() => resolve(2), 500))

            getFast(p1,p2).then(e => console.log(e)) =>  2

#  数组的 value 值的遍历   for....of

    使用方法 ：  当需要 使用 某个数组 中 所有 value 值 进行匹配时 可使用 for...of 

        let  arr = [3,4,5,6]
        for (let value of arr) {
            console.log(value) 
        }
        =>  3,4,5,6

    ### 注： 只要拥有遍历属性（[Symbol.iterator]）的 对象都可以用 for...of 进行 遍历
    ###      数组 和 字符串，类数组对象（Dom） 都自带 [Symbol.iterator] 属性


#   遍历属性生成器  Generator  函数  （以下简称 遍历器函数）

    使用方法： 
        1、 写一个遍历器函数
            function* mkl () {
                yield  1
                yield  2
                yield  3
                return  4
            }
        2、运行 遍历器 函数 

            mkl()

            注：遍历器 函数 运行后 并不会像普通 函数 一样立即 执行并输出结果，
            而是生成了 一个 类数组 的可遍历的对象 自带 next() 属性。
            可以 当成一个数组使用 ，如下：
            
            1、使用 ... 遍历
                [...mkl()]  =>  [1,2,3]

            2、使用 Array.from()
                Array.from(mkl()) => [1,2,3]

            3、使用解构 赋值
                let {x, y, z} = mkl()   => x:1, y:2, z:3
            
            4、使用 for...of
                for (let value of mkl()) {
                    console.log(value)  =>  1, 2, 3
                }
        3、给对象 添加 遍历属性 ，使对象 可使用 for...of 遍历

            let qmz = {a:1, b:2, c:3}
            
            qmz[Symbol.iterator] = function* () {
                for (let [key, value] of Object.entries(this)) {
                    yield [key, value]
                }
            }

            for (let [key, value] of qmz) {
                console.log(key, value)   =>  a,1    b,2    c,3
            }

        4、使用 yield* 表达式  

            yield* 可以在遍历器函数内部用来 遍历子遍历器函数 , 使用与父遍历器函数合并

            let a = (function* qmz (){
                    yield 2
                    yield 3
                })()

            function* mkl () {
                yield 1
                yield* a
            }

            [...mkl()] => [1, 2, 3]

#  将异步 变成 同步 的 异步函数  async ...  await  ...  

    使用方法：
            async function mkl () {
                try {
                    let params = {}
                    let res = await new Fajax(params)
                    let json = await new Fajax(res)
                    if (json.status === 1) {
                        ....
                        return json.data
                    } else {
                        throw new Error(json.message)
                    }
                } catch (e) {
                    console.error(e)
                }
            }

    注：
        1、在 普通 函数 前面 加上 async  即可成为 async 函数，
        2、async 函数 内 可以使用 await 命令，用于 等待 异步 函数 返回 结果后 再继续 往下执行
            相当于 把异步 变成同步 
        3、async 内 如果 await 后面 异步函数 抛出错误， 将会中断 整个 async 函数的执行，
            如果 想报错后扔可执行 后面的 await 方法，可在 await 外面 套上 try ... catch.. 
            进行捕捉异常
        4、async 函数 是在 Promise 的基础上进行 封装的，所以也支持 .then .catch  异步回调

# 全新 升级版 构造函数  Class 类   （以下简称： class）

    使用方法： 
        class Mkl {
            mkl = 13
            static mkl = 14
            #qmz = 12
            constructor (...args) {
                for (let key of args) {
                    this[key] = key
                }
                console.log(new.target)
                if (new.target === Mkl) {
                    console.log('当前为 new Mkl() 实例')
                } else if (new.target === undefined) {
                    console.log('必须使用 new 生成实例')
                } else if (new.target !== Mkl) {
                    console.log('当前为 继承类 实例')
                }
            }
            static foo () {
                return this.mkl
            }
            foo () {
                return this.mkl
            }
            getClassName () {
                return Mkl.name
            }
            get qmz () {
                return this.#qmz
            }
            set qmz (value) {
                this.#qmz = value
            }
            toString () {

            }
        }

    1、创建 class 时 必须 有 constructor 属性
        使用 new 执行 class 时, class 会自动 执行 constructor 方法 
    
    2、可以 使用  mkl = 13 创建 可继承属性 , 但必须 写在 class 顶部
        等同于 在 constructor 方法 中 使用 this.mkl = 13 
    
    3、可以使用 static mkl = 14 创建 不可继承 的 静态属性
        静态属性 只能通过 Mkl.mkl 访问， 不可以在实例内部使用 this.mkl 访问，否则报错。
        同样也可以 使用 static foo () {}  创建 不可继承 的静态方法
        静态方法 的访问 跟 静态属性一样
    
    4、可以使用 #qmz = 12 创建 私有 属性，私有属性同样也是不可被继承的
        可以在实例内部 使用 this.#qmz 访问私有属性，在外面访问，则会报错
        同样也可以 使用 #bar () {}  创建不可继承 的私有方法,但目前未得到完全支持，使用可能会报错，
        私有方法 跟 私有属性一样，只能在实例内部访问

    5、class 的 this 指向 ：
        在可继承 方法里面 调用 this 指向 当前 实例，
        在静态方法里面 调用 this 指向 当前 class 而非实例

    
    6、可以新 class 使用 extends 继承 已有的 class 
        如： 
            class Qmz extends Mkl {
                constructor (...args) {
                    super(...args)
                    console.log(Qmz.mkl) =>  14
                    console.log(this.#qmz)  =>  报错，私有属性不被继承 
                    
                }
                getName () {
                    console.log(super.getClassName()) => Mkl
                    console.log(super.mkl) => undefined
                }
                static getName() {
                    console.log(super.getClassName()) => 报错 ，父类 中 不存在 静态方法 getClassName()
                    console.log(super.mkl) => 14                    
                }
            }
        注： Qmz 将会 继承 Mkl 的所有 属性和方法 ，除了私有属性
            使用 extends 继承 的 class  必须 在 constructor 中 执行 super(),否则报错
            super() 的作用 就是 让 Qmz 继承 Mkl 的所有属性 并 创建 this 指向 new Qmz() 实例
            并且 super()  只能在 constructor 中使用

            super 也可能当成对象 来使用， 此时 super 指向 的是 父类的 原型对象
                如上 getName() 方法中 的使用
            注： super 在 静态方法中使用时， super 指向 的是 Mkl 本身 ，而非 实例

            可以使用 Object.getPrototypeOf(Qmz) 来获取 Qmz 的父类 Mkl
            即 Object.getPrototyOf(Qmz) === Mkl

#  新 的数据 结构   Set  和 Map

        使用方法 ： 
             let s = new Set() 
             let m = new Map()

        1、 Set 的数据结构 就是 一 个 没有重复数据的 数组 

            可使用 new Set() 进行数组 去重
                let arr = [1,1,1,1,2,3,4,2]
                [...new Set(arr)]  => [1,2,3,4]

            Set 常用属性方法：
                s.add()
                s.size
                s.delete()
                s.has()
                s.clear()
                s.keys()
                s.values()
                s.entries()
                s.forEach()
        
        2、Map 的数据结构 是  键 值 一 一对应 的 数组 对象
            实质像对象， 但 结构 看起来像 多维数组
            如： [['mkl',25],['qmz', 28]]
            其实是这样的： [[{'mkl' => 25}],[{'qmz' => 28}]]
            即 ： [[{key => value}],[{key => value}]]

           => 所以说 又像对象 又像数组 ，傻傻分不清楚。简称 Map

            Map 常用属性方法：
                m.size
                m.set(key, value)
                m.get(key)
                m.has(key)
                m.detete(key)
                m.clear()
                m.keys()
                m.values()
                m.entries()
                m.forEach()

#  对象 的 代理  Proxy

    使用方法：
        就是对 对象 原有的 属性 或 方法 进行 拦截 代理 ，
        处理数据 后， 返回一个新的 对应的 属性 或 方法，

        常用 的 可拦截的 方法 如下：
        let proxy = new Proxy(Object, {

            get (target, key, receiver) {  },

            set (target, key, value, receiver) {  },

            has (target, key) {  },

            deleteProperty (target, key) {  },

            ownKeys (target) {},

            getOwnPropertyDescriptor (target, key) { },

            defineProperty (target, key, desc) {},

            preventExtensions (target) {},

            getPrototypeOf (target) {},

            isExtensible (target) {},

            setPrototypeOf (target, proto) {},

            apply (target, object, args) {},

            construct (target, args) {}

        })

# 判断 字符串是否 包含 某 字符 
## String.includes()
## String.startsWith()
## String.endsWith()

    使用方法：
        let a = 'mkl'
        a.includes('m') => true
        a.startsWith('m') => true
        a.endsWith('l') => true

# 新增 ... 遍历符

    使用方法：
        可以使用 ...  遍历可遍历的 东东 
        1、遍历对象
            let a = {a:1, b:2}
            let b = {...a}  =>  {a:1, b:2}
        
        2、 遍历数组 

            let a = [1, 2]
            let b = [...a]  => [1, 2]

        3、 遍历 Set 

            let a = new Set([1,1,2])
            let b = [...a]  => [1, 2]
        
        4、 遍历 Map

            let a = new Map([['a',1],['b', 2]])
            let b = [...a] =>  [['a',1],['b', 2]]

        5、 遍历 字符串

            let a= 'mkl'
            let b = [...a] => ['m', 'k', 'l']

        6、遍历 参数 

            let a = (...args) => {console.log(...args)}
            a(1,2,3,4,5) => 1, 2, 3, 4, 5

