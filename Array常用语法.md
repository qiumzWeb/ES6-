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



    
         

            