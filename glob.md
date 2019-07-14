## glob 用于全局搜索 规定匹配模式的 路径， 并返回一个路径 数组

## 引入方式：

    const glob = require('glob')
  
## 使用方法

### 注： 路径匹配模式 中特殊字符的作用
    *                  =>  匹配 0 个 或  多个 字符串
    **                 =>  匹配 0 个 或  多个 当前目录 或 子目录
    ?                  =>  匹配 1 个 字符串
    [abc]              =>  匹配 a b c 中的一个或多个 字符串
    [^abc] 或 [!abc]   =>  不匹配 a b c 中的任何一个 或 多个字符串
    !(abc|dfe|adc)     =>  匹配与提供模式中不匹配的内容。
    ?(abc|dfe|adc)     =>  匹配提供模式中的 0次 或 1次。
    +(abc|dfe|adc)     =>  匹配提供模式中的 1次 或 多次。
    *(a|b|c)           =>  匹配提供模式中的 0次 或 多次。
    @(abc|dfe|adc)     =>  匹配与提供模式中完全匹配的

### 1、 异步全局搜索路径
    glob('./src/views/**/*.js') => 输出当前目录 或 子目录 下的所有 js 文件 数组 
                    => ['F:/foo/src/views/ddd/a.js', 'F:/foo/src/viewsbrc/b.js', 'F:/foo/src/views/c.js']

### 2、 同步全局搜索路径
    glob.sync('./src/views/**/*.html') => 输出当前目录 或 子目录 下的所有 html 文件 数组 
                => ['F:/foo/src/views/ddd/a.html', 'F:/foo/src/viewsbrc/b.html', 'F:/foo/src/views/c.html']