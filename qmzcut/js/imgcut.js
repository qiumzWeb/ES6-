import Cropper from './cropper'
require('../css/cropper.scss')
export default class Qmz {
    constructor(options) {
        this.options = Object.assign({}, {
            // 输出图片大小
            outImgSize: 200,
            // 选择图片按钮
            selectBtn: '',
            // 保存图片按钮
            saveBtn: '',
            // 裁剪图片容器
            cutContainer: '',
            // 预览图片容器
            preview: '',
            // 保存图片时的回调函数
            saveCallBack: '' ,
            // 压缩图片质量
            quality: .9,
            // 加载状态 true 加载中  false 加载完成
            loading: ''

        }, options)
        this.init()
    }
    init () {
        if (!Qmz.isObject(this.options)) {
            throw new Error('options is not a object')
        }
        this.initElement('selectBtn', this.options.selectBtn)
        this.initElement('cutContainer', this.options.cutContainer)
        this.initElement('preview', this.options.preview)
        this.initElement('saveBtn', this.options.saveBtn)
        this.create()
    }
    create () {
        this.createSelectBtn()
        this.createSaveBtn()
    }
    createSaveBtn () {
        this.addWatch(this.saveBtn, 'click', (e) => this.saveImage(e))
    }
    createSelectBtn () {
        this.fileInput = Qmz.createInput()
        this.addWatch(this.fileInput, 'change', (e) => this.fileChange(e))
        this.addWatch(this.selectBtn, 'click', (e) => this.fileInput.click(e))
        this.selectBtn.appendChild(this.fileInput)
    }
    async fileChange (e) {
        let file = e.target.files[0]
        if (Qmz.isFn(this.options.loading)) this.options.loading(true)
        let url = await Qmz.fileReader(file)
        if (!url) return false
        this.file = this.options.file = file
        this.createCropper(url)
    }
    async createCropper (url) {
        if (!this.Cropper) {
            this.image = new Image()
            this.options.url = url
            this.cutContainer.appendChild(this.image)
            this.Cropper = new Cropper(this.image, Object.assign({}, this.options))
        } else {
            this.Cropper.replace(url)
        }
        setTimeout(() => {
            if (Qmz.isFn(this.options.loading)) this.options.loading(false)
        })
    }
    async saveImage () {
        let imgData = {}
        if (this.Cropper) {
            if (Qmz.isFn(this.options.loading)) this.options.loading(true)
            let {x, y, width, height} = this.Cropper.getData()
            let canvasWidth =  this.options.imgWidth || this.options.imgHeight
            let canvasHeight = this.options.imgHeight || this.options.imgWidth
            let {canvas, cxt, args} = Qmz.createCanvas(canvasWidth, canvasHeight)
            cxt.drawImage(this.Cropper.image, x, y, width, height, ...args)
            imgData = await new Promise(resolve => {
                let imgBlob = Qmz.dataURLtoBlob(canvas.toDataURL(this.file.type, this.options.quality))
                let newFile = new File([imgBlob], this.file.name, {type: this.file.type})
                Qmz.fileReader(newFile).then(url => {
                    resolve({
                        url: url,
                        file: newFile
                    })
                })
            })
        }
        if (Qmz.isFn(this.options.saveCallBack)) {
            this.options.saveCallBack(imgData)
            if (Qmz.isFn(this.options.loading)) this.options.loading(false)
        }
    }    
    initElement (name, target) {
        if (Qmz.isString(target)) {
            this[name] = document.querySelector(target)
        } else if (Qmz.isDom(target)) {
            this[name] = target
        } else {
            throw new Error(`${name} is Not a CSS selector or DOM element`)
        }
    }    
    addWatch (dom, event, change) {
        dom.addEventListener(event, change, false)
    }
    removeWatch (dom, event, change) {
        dom.removeEventListener(event, change, false)
    }
    static createInput () {
        let input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'
        input.style = `display:none`
        return input
    }
    static async createNewImage (img, url, type) {
        img.src = url
        return await new Promise(resolve => {
            img.onload = () => {
                let {canvas, cxt, args} = this.createCanvas(img.naturalWidth, img.naturalHeight)
                cxt.drawImage(img, ...args)
                let canvasUrl = canvas.toDataURL(type, 1)
                resolve({
                    canvas,
                    canvasUrl
                })
            }
        })
    }
    static createCanvas (width, height) {
        let canvas = document.createElement('canvas')
        canvas.width =  width
        canvas.height = height
        let args = [0, 0, canvas.width, canvas.height]
        let cxt = canvas.getContext('2d')
        cxt.clearRect(...args)
        return {
            canvas,
            cxt,
            args
        }      
    }
    //将base64转换为blob
    static dataURLtoBlob (dataurl) { 
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }      
    static async fileReader (file) {
        if (!file || !this.isImageType(file.type)) return false
        let reader = new FileReader()
        reader.readAsDataURL(file)
        return await new Promise(resolve => {
            reader.onload = e => {
                resolve(e.target.result)
            }
        })
    }
    static isImageType (type) {
        return /^image\/\w+/.test(type)
    }
    static getDataType (data) {
        return Object.prototype.toString.call(data).match(/^\[object\s(.*)\]$/)[1]
    }
    static isObject (obj) {
        return this.getDataType(obj) === 'Object'
    }
    static isString (obj) {
        return this.getDataType(obj) === 'String'
    }
    static isDom (obj) {
        return obj && obj instanceof window.HTMLElement
    }
    static isFn (obj) {
        return obj && typeof obj === 'function'
    }
}