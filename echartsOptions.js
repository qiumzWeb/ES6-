export default function (data) {
    return {
        title: {
            text: '',
            link: '',
            subtext: '',
            sublink: ''
        },
        color: [],
        legend: {
            type: 'plain',
            left: 'auto',
            top: 'auto',
            right: 'auto',
            bottom: 'auto',
            orient: 'horizontal',
            itemWidth: 14,
            itemHeight: 14,
            formatter: null,
            data: data.series.map(key => key.name),
        },
        grid: {
            show: false,
            left: '10%',
            top: 60,
            right: '10%',
            bottom: 60,          
        },
        xAxis: {
            type: 'category',
            name: '',
            // nameTextStyle: {},
            nameGap: 15,
            nameRotate: null,
            boundaryGap: true,
            // splitNumber: 5,
            // minInterval: 0,
            // maxInterval: 1000,
            // interval: 1,
            axisLine: { // 轴线
                show: true,
                // lineStyle: {}
            },
            axisTick: { // 刻度
                show: false,
                // lineStyle: {}
            },
            axisLabel: { // 刻度标签
                show: true,
                interval: 'auto',
                inside: false,
                rotate: 0,
                margin: 8,
                formatter: null,
                color: '#333',
                fontStyle: 'normal',
                fontWeight: normal,
                fontFamily: 'sans-serif',
                fontSize: 12,
                align: 'center',
                verticalAlign: 'middle',
                // lineHeight: 40,
            },
            splitArea: { // 分割区域
                interval: 'auto',
                show: false,
                // areaStyle: {},               
            },
            data: data.xAxis || [],
            axisPointer: { // 指示器
                show: false,
                type: 'line', // 'shadow'
                // lineStyle: {},
                // shadowStyle: {},
            },                 
        },
        yAxis: {
            type: 'value',
            name: '',
            // nameTextStyle: {},
            nameGap: 15,
            nameRotate: null,
            boundaryGap: true,
            // splitNumber: 5,
            // minInterval: 0,
            // maxInterval: 1000,
            // interval: 1,
            axisLine: { // 轴线
                show: true,
                // lineStyle: {}
            },
            axisTick: { // 刻度
                show: false,
                // lineStyle: {}
            },
            axisLabel: { // 刻度标签
                show: true,
                interval: 'auto',
                inside: false,
                rotate: 0,
                margin: 8,
                formatter: null,
                color: '#333',
                fontStyle: 'normal',
                fontWeight: normal,
                fontFamily: 'sans-serif',
                fontSize: 12,
                align: 'center',
                verticalAlign: 'middle',
                // lineHeight: 40,
            },
            splitArea: { // 分割区域
                interval: 'auto',
                show: false,
                // areaStyle: {},               
            },
            data: data.yAxis || [],
            axisPointer: { // 指示器
                show: false,
                type: 'line', // 'shadow'
                // lineStyle: {},
                // shadowStyle: {},
            },                 
        },
        series: data.series.map(key => Object.assign({}, {
            type: data.type,
            name: '',
            stack: null,
            data: [12, 13, 45, 56, 78, 234, 23, 12]
        }, key))

    }
}