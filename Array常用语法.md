# Array 对象 的 自身方法

## Array.isArray(Obj)

    使用说明 ：

        判断一个对象是不是数组 ，返回 Boolean 值 

    使用方法:

        Array.isArray([]) => true

        Array.isArray({}) => false

## Array.from(alikeArr,callback)     `*ES6 新增语法*`

    使用说明 ： 

        将一个 可遍历的 对象 或 伪数组 转换成 一个新的数组，
        如果 callback 存在，则每次 生成 子元素 时会调用 callback, 
        并把该 以参数 传给 callback, 最后取 callback() 返回的值 为新子元素

    使用方法：

        Array.from([1,2,3]) => [1,2,3]

        Array.from([1,2,3], value => value + 1)  => [2, 3, 4]

## Array.of(...arg)    `*ES6 新增语法*`

    使用说明 ：

        将 一 组 参数  转换成 一个新的 数组

    使用方法： 

        Array.of(1,2,3,4) =>  [1,2,3,4]


# Array 原型 继续 的方法
# 会改变原数组的方法

## Array.copyWithin(index, start = 0, end = this.length)   `*ES6 新增语法*`

    使用说明：

        把一个数组内部 从 start  位置开始（包含start）  到 end  结束（不包含end）
        的部分 复制并替换 从 index  位置开始 （包含index）之后的值 

        注： 此方法不会改变原数组的长度

        用法 ： 
            [1,2,3,4,5].copyWithin(1, 3, 4)  => [1, 4, 3, 4, 5]

## Array.fill(value, start = 0, end = this.length)     `*ES6 新增语法*`

    使用说明：

        把一个数组  从 start  位置开始（包含start）  到 end  结束（不包含end）
        的部分 全部 使用 value 值 替换

        注： 此方法不会改变原数组的长度

        用法：
            [1,2,3,4,5].fill(6, 1, 3) =>  [1, 6, 6, 4, 5]

## Array.pop()

    使用说明：

        删除数组的最后一个元素， 并返回这个元素

        注： 此方法会改变原数组的长度

        用法 ：
            [1,2,3,4,5].pop()  =>  5
                原数组 变为 =>  [1,2,3,4]

## Array.push(...args)

    使用说明：

        向数组后末尾 添加 一个或 多个 新元素 ，并返回该数组 的长度

        用法：

            [1,2,3,4].push(1,2) =>  6
                原数组 变为 =>  [1,2,3,4,1,2]

## Array.reverse()

    使用说明：

        将数组倒序排列

        用法：
            [1,2,3,4].reverse() => [4,3,2,1]

## Array.shift()

    使用说明：

        删除数组的第一个元素，并返回该元素

        用法：
            [1,2,3,4,5].shift()  =>  1
                原数组 变为 =>  [2,3,4,5]

## Array.sort(compareFn)

    使用说明：

        对数组进行排序，并返回原数组;
        默认是根据字符串Unicode码点排序，
        也可接收 一个 compareFn 对比函数，
        对比函数接收两个参数 =>（a, b）
        a =>  传入的第一个用于比较的元素
        b =>  传入的 第二个用于比较的元素

        1、如果 compareFn (a, b) 返回的结果 小于 0 ， 则 a 会 排在 b 的前面 

        2、如果 compareFn (a, b) 返回的结果 大于 0 ， 则 a 会排在 b  的后面

        3、如果 compareFn (a, b) 返回的结果 等于 0 ， 则 a 和 b 的顺序 不变

    使用方法：

        let arr = [1, 2, 4, 3, 9, 5]

        1、数组 元素从小到大排序 

            arr.sort((a, b) => a - b)  =>  [1, 2, 3, 4, 5, 9]

        2、数组元素 从大到小的排序

            arr.sort((a, b) => b - a) => [9, 5, 4, 3, 2, 1]

        3、数组元素 随机排序 

            arr.sort(() => Math.random() - Math.random())  =>  输出为随机 顺序

        4、数组元素 驼峰 排序

            let L = Math.floor(arr.length / 2)
            let M = Math.ceil(arr.length / 2)

            arr.sort((a, b) => a - b).slice(0, L).concat(arr.sort((a, b) => b - a).slice(0, M))
            => [1, 2, 3, 9, 5, 4]

            arr.sort((a, b) => b - a).slice(0, L).concat(arr.sort((a, b) => a - b).slice(0, M))
            => [9, 5, 4, 1, 2, 3]

## Array.splice(index, count, ...newChild)

    使用说明：
      
        删除数组元素 或 添加 新元素. 并以数组形式返回被修改的 值 
        参数说明 ：
        index =>  从 数组 index 位置处开始 删除 元素
        count =>  从 index 索引 开始 向后面删除 元素的 数量 
        ...newChild => 从 数组 index 位置处 开始新加 的 元素

    使用方法：

        let arr = [1, 2, 4, 5]
        
        1、删除 数组 index = 2 的值 

            arr.splice(2, 1) = > [4]
            arr => [1,2,5]

        2、删除 数组 index = 2 的值 ，并替换为9

            arr.splice(2, 1, 9) => [4]
            arr => [1, 2, 9, 5]
        
        3、在数组 index = 2 处添加 9

            arr.splice(2, 0, 9) => []
            arr => [1, 2, 9, 4, 5]

            注： count = 0 时 不会删除元素

## Array.unshift(...args)

    使用说明： 

        向数组 的开头位置 添加一个或多个元素 ,并返回 数组 的新长度

        此方法 刚好 与 Array.push() 用法 相反

    使用方法：

        let arr = [1,2]
        arr.unshift(5,3) => 4
        arr => [5,3,1,2]
            
# 不会改变 原数组 的方法

## Array.concat(...arr)

    使用说明： 

        将 两个 或多个数组 合并，并返回一个新的数组

    使用方法：

        let a = [1,2]
        let b = [3,4]
        let c = 5

        a.concat(b,c) => [1,2,3,4,5]

## Array.includes(value)    `*ES6新增语法*`

    使用说明 ：

        判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false。

    使用方法： 
        let a = [1,2,3,4]
        a.includes(3) => true
        a.includes(5) => false

## Array.join(split)

    使用说明： 

        将一个数组的元素 以 某个指定的 分隔 符(split) 输出为字符串，默认 split 为 ','

    使用方法： 

        let a= [1,2,3,4]
        a.join()  =>  1,2,3,4
        a.join('?') => 1?2?3?4

## Array.slice(start, end)

    使用说明：

        将一个数组 中截取某一段 并返回为一个新数组 
            start : 数组的起始位置 （包含）, 默认为0
            end: 数组 的结束位置 （不包含）,默认 为 arr.length
        
    使用方法： 

        let a = [1,2,3,4]

        a.slice() => [1,2,3,4]

        a.slice(0,2) => [1,2]

## Array.indexOf(value)

    使用说明：

        返回 数组 中第一个 值 等于 value 的元素的 index 索引 值 ，
        如果找不到元素 则返回 -1

    使用方法： 

        let a = [1,1,2,2,2]
        a.indexOf(2) => 2

## Array.lastIndexOf(value)

    使用说明;

        返回数组 中最后一个 值 等于value 的元素的 index 索引 值 。
        如果找不到元素 则返回 -1

    使用方法： 

        let a= [1,1,2,3,1,2]
        a.lastIndexOf(1) => 4

## Array.flat(depth)    `*ES6新增语法*`

    使用说明 ： 

        将 多维数组 进行扁平处理 生成一个新 的 低 维 数组 ，扁平的深度 由 参数 depth 决定， depth 默认值 为 1

    使用方法 ：

        let a = [1, [2,3], [4, [6,7]]]

        a.flat()  => [1, 2, 3, 4, [6, 7]]

        a.flat(2) => [1, 2, 3, 4, 6, 7]

# 数组 的遍历

## Array.forEach(callback)

    使用说明 ：

        对数组 进行遍历
        callback 提供的参数 如下：
            callback(value, index, arr)

            value => 被遍历的值
            index => 被遍历值的 索引
            arr =>  当前 被遍历的数组

    使用方法：
        let b= []
        [1,2,3,4].forEach(value => b.push(value))  

        b => [1,2,3,4]

## Array.entries()    `*ES6新增语法*`

    使用说明 ：

        返回一个 可遍历对象，遍历的值 为键值对

    使用方法： 

        let a = [1,2,3]
        for (let [key,value] of a.entries()) {
            console.log(key, value)
        }

## Array.keys()    `*ES6新增语法*`
            
    使用说明 ：

        返回一个 可遍历对象，遍历的值 为 键

    使用方法： 

        let a = [1,2,3]
        for (let key of a.keys()) {
            console.log(key)
        }

 
## Array.values()    `*ES6新增语法*`
            
    使用说明 ：

        返回一个 可遍历对象，遍历的值 为 值

    使用方法： 

        let a = [1,2,3]
        for (let value of a.values()) {
            console.log(value)
        }

## Array.some(callback)

    使用说明 ：

        对数组 进行遍历， 如果 callback() 返回 true 则中止 遍历，返回 true,
        否则 返回 false
        callback 提供的参数 如下：
            callback(value, index, arr)

            value => 被遍历的值
            index => 被遍历值的 索引
            arr =>  当前 被遍历的数组

    使用方法：
        
        [1,2,3,4].some(value => value === 1)   => true  （刚开始就结束了遍历）

        [1,2,3,4].some(value => value === 6)  => false  （会完成遍历，直到最后）


## Array.every(callback)

    使用说明 ：

        对数组 进行遍历， 如果 callback() 返回 false 则中止 遍历，返回 false,
        否则 返回 true
        callback 提供的参数 如下：
            callback(value, index, arr)

            value => 被遍历的值
            index => 被遍历值的 索引
            arr =>  当前 被遍历的数组

    使用方法：
        
        [1,2,3,4].every(value => value === 4)   => true  (会完成 遍历，直到最后)

        [1,2,3,4].every(value => value === 6)  => false （还没开始就结束了）

    注： 跟 Array.some() 刚好相反

## Array.map(callback)

    使用说明 ：

        对数组 进行遍历，并获取每一次遍历 callback() 返回的值 组成一个新数组
        
        callback 提供的参数 如下：
            callback(value, index, arr)

            value => 被遍历的值
            index => 被遍历值的 索引
            arr =>  当前 被遍历的数组

    使用方法：
        
        [1,2,3,4].map(value => value + 1)   =>  [2,3,4,5]

## Array.flatMap(callback)  `*ES6新增语法*`

    使用说明 ：

        对数组 进行遍历，并获取每一次遍历 callback() 返回的值 组成一个新数组，
        与 arr.map() 不一样，他输出的结果 全进行 扁平 1 次
        
        callback 提供的参数 如下：
            callback(value, index, arr)

            value => 被遍历的值
            index => 被遍历值的 索引
            arr =>  当前 被遍历的数组

    使用方法：
        
        [1,2,3,4].flatMap(value => [value + 1])   =>  [2,3,4,5]



## Array.find(callback)   `*ES6新增语法*`

    使用说明 ：

        对数组 进行遍历，如果 callback() 返回 true ,
        则获取 该元素 的值 并返回 ，否则返回 undefine
        
        callback 提供的参数 如下：
            callback(value, index, arr)

            value => 被遍历的值
            index => 被遍历值的 索引
            arr =>  当前 被遍历的数组

    使用方法：
        
        [1,2,3,4].find(value => value === 2)   =>  2

## Array.filter(callback)

    使用说明 ：

        对数组 进行遍历，如果 callback() 返回 true ,
        则筛选出 返回为 true 的值 数组 一个新的数组，并返回
        
        callback 提供的参数 如下：
            callback(value, index, arr)

            value => 被遍历的值
            index => 被遍历值的 索引
            arr =>  当前 被遍历的数组 

    使用方法：
        
        [1,2,3,4].filter(value => value > 2)   =>  [3, 4]

## Array.findIndex(callback)  `*ES6新增语法*`

    使用说明 ：

        对数组 进行遍历，如果 callback() 返回 true ,
        则返回 该 元素的 index 索引 值
        
        callback 提供的参数 如下：
            callback(value, index, arr)

            value => 被遍历的值
            index => 被遍历值的 索引
            arr =>  当前 被遍历的数组 

    使用方法：
        
        [1,2,3,4].findIndex(value => value === 2)   =>  1

## Array.reduce(callback, firstValue)


    使用说明 ：

        callback 提供的参数 如下：
            callback(value, realValue, index, arr)

            value => 上一次callback() 的返回值
            realValue => 当前元素
            index  =>  当前元素的索引  
            arr => 当前遍历 数组 
        
        firstValue => 作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。

        对数组 进行遍历，取 callback()  返回的值 作为第一个 callback 的参数 value，
        取当前 元素 作为 callback 第二个 参数 realValue,
        返回最后 一次 遍历 callback() 返回的值



    使用方法：
        
        [1,2,3,4].reduce((value, realValue) => value + realValue)   =>  10

        [1,2,3,4].reduce((value, realValue) => value + realValue , 1)  => 11

        [1,2,3,4].reduce((value, realValue) => value)  => 1


        注意：如果没有提供firstValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引，

        取第一个值 作为 value 参数 ，取第二个值 作为 realValue;
        
        如果提供firstValue，从索引0开始。
        
         
## Array.reduceRight(callback, firstValue)


    使用说明 ：

        callback 提供的参数 如下：
            callback(value, realValue, index, arr)

            value => 上一次callback() 的返回值
            realValue => 当前元素
            index  =>  当前元素的索引  
            arr => 当前遍历 数组 
        
        firstValue => 作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的最后一个元素。 在没有初始值的空数组上调用 reduce 将报错。

        对数组 进行遍历，取 callback()  返回的值 作为第一个 callback 的参数 value，
        取当前 元素 作为 callback 第二个 参数 realValue,
        返回最后 一次 遍历 callback() 返回的值



    使用方法：
        
        [1,2,3,4].reduceRight((value, realValue) => value + realValue)   =>  10

        [1,2,3,4].reduceRight((value, realValue) => value + realValue , 1)  => 11

        [1,2,3,4].reduceRight((value, realValue) => value)  => 4


        注意：如果没有提供firstValue，reduce 会从索引右边开始 第二个 的地方开始执行 callback 方法，跳过最后一个索引，

        取最后一个值 作为 value 参数 ，取倒数第二个值 作为 realValue;
        
        如果提供firstValue，从索引最后一个开始。


        此方法刚好 与 Array.reduce() 方法 意思相反
            