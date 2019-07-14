
## path 用于处理文件路径和目录路径

## 引入方式：

    const path = require('path')

## 使用方法：

### 环境分割符
    windows : '\\'

    posix : '/'

#### 注： 需要解析或输出特定分割符时 可使用  path.posix 或 path.win32 代替 path 使用


# 1、读取文件名-带扩展名
    path.basename('/foo/bar/baz/mkl.html')  =>  'mkl.html'

# 2、读取文件名-不带扩展名
    path.basename('/foo/bar/baz/mkl.html', '.html')  =>  'mkl'

# 3、读取文件的目录
    path.dirname('/foo/bar/baz/mkl.html') => '/foo/bar/baz'

# 4、读取文件的扩展名
    path.extname('/foo/bar/baz/mkl.html') => '.html'

# 5、拼接路径
    path.join('/foo', '/bar/baz', 'mkl.html') => '/foo/bar/baz/mkl.html'

# 6、拼接路径 并输出为绝对路径
    path.resolve(_dirname, './foo/bar/baz/mkl.html) => '/NODE_API/foo/bar/baz/mkl.html'
#### 注：如果拼接的路径均为 绝对路径 则输出最后一个路径
    path.resolve(_dirname, '/foo/bar/baz/mkl.html') => '/foo/bar/baz/mkl.html'

# 7、输出 b 相对于 a 的 相对路径 
    const a = '/foo/bar/baz/mkl.html'
    const b = '/foo/bar/bax/qmz.html'
    path.relative(a, b) => '../../bax/qmz.html'

# 8、将路径解析为对象
    path.parse('/foo/bar/baz/mkl.html') =>
    {
        root: '/',
        dir: '/foo/bar/baz',
        base: 'mkl.html',
        ext: '.html',
        name: 'mkl'
    }

# 9、将 对象 解析为路径 
    path.format({
        root: '/',
        dir: '/foo/bar/baz',
        base: 'mkl.html',
        ext: '.html',
        name: 'mkl'        
    })
    => '/foo/bar/baz/mkl.html'

    