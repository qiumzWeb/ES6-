#配置项 Options

## 输出图片宽

imgWidth: 200,

## 输出图片高

imgHeight: 200,

## 选择图片按钮

selectBtn: '',

## 保存图片按钮

saveBtn: '',

## 裁剪图片容器

cutContainer: '',

## 预览图片容器

preview: '',

## 保存图片时的回调函数

saveCallBack: '' ,

## 压缩图片质量

quality: .9,

## 加载状态 true 加载中  false 加载完成

loading: ''

## 定义裁剪器的视图模式

viewMode: 2, ## 0, 1, 2, 3

## 定义裁剪器的拖动模式
dragMode: DRAG_MODE_MOVE, ## 'crop', 'move' or 'none'

## 定义裁剪框的初始纵横比
initialAspectRatio: NaN,

## 定义裁剪框的纵横比
aspectRatio: 1,

## 具有上一个裁剪结果数据的对象
data: null,

## 用于添加额外容器以预览的选择器
preview: '',

## 调整窗口大小时重新渲染裁剪器
responsive: true,

## 调整窗口大小后恢复裁剪区域
restore: true,

## 检查当前图像是否为交叉原点图像
checkCrossOrigin: true,

## 检查当前图像的exif方向信息
checkOrientation: true,

## 显示黑色模式
modal: true,

## 显示用于引导的虚线
guides: true,

## 显示导向中心指示器
center: true,

## 显示白色模式以突出显示裁剪框
highlight: true,

## 显示网格背景
background: true,

## 启用在初始化时自动裁剪图像
autoCrop: true,

## 定义初始化时自动裁剪区域的百分比
autoCropArea: 0.8,

## 启用以移动图像
movable: true,

## 启用旋转图像
rotatable: true,

## 启用以缩放图像
scalable: true,

## 启用缩放图像
zoomable: true,

## 通过拖动触摸来缩放图像
zoomOnTouch: true,

## 启用通过旋转鼠标缩放图像
zoomOnWheel: true,

## 当通过旋转鼠标缩放图像时定义缩放比率
wheelZoomRatio: 0.1,

## 启用以移动裁剪框
cropBoxMovable: true,

## 启用以调整裁剪框的大小
cropBoxResizable: true,

## 当单击裁剪器两次时，在“裁剪”和“移动”之间切换拖动模式
toggleDragModeOnDblclick: true,

## 尺寸限制
minCanvasWidth: 0,
minCanvasHeight: 0,
minCropBoxWidth: 100,
minCropBoxHeight: 100,
minContainerWidth: 200,
minContainerHeight: 100,

## 事件快捷方式
ready: null,
cropstart: null,
cropmove: null,
cropend: null,
crop: null,
zoom: null,