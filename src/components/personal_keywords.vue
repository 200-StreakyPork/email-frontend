<template>
    <div>
        <div id="block">
            <el-date-picker
                    v-model="dateTime"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>
            <el-select class="options" v-model="categoryValue" filterable placeholder="请选择邮件类别">
                <el-option
                        v-for="item in categoryOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-button id="searchButton" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        </div>
        <div id="keywordChart"></div>
    </div>
</template>

<script>
    import 'echarts-wordcloud'
    import {getAllKeyword, getKeywordByDate} from "@/api/Keyword";

    export default {
        name: "personal_keywords",
        mounted: function () {
            this.init()
        },
        methods: {
            init () {
                console.log('page named personal_keyword init');
                let result = getAllKeyword(this);
                result.then(function (res) {
                    this.operationData.series.data = res.data.result;
                    this.$chart.drawChart('relationshipChart', this.operationData)
                }.bind(this)).catch(function (err) {
                    console.log(err)
                });
                this.$chart.drawChart('keywordChart', this.operationData)
            },
            search() {
                console.log(this.dateTime, this.categoryValue);
                let result = getKeywordByDate(this, this.dateTime);
                result.then(function (res) {
                    this.operationData.series.data = res.data.result;
                    this.$chart.drawChart('relationshipChart', this.operationData)
                }.bind(this)).catch(function (err) {
                    console.log(err)
                });
                this.$chart.drawChart('keywordChart', this.operationData)
            }
        },
        data () {
            return {
                name: 'demo',
                dateTime: [], //yyyy-MM-dd
                categoryValue: '',
                categoryOptions: [
                    {
                        value: '选项一',
                        label: '猫',
                    },{
                        value: '选项二',
                        label: '狗',
                    },{
                        value: '选项三',
                        label: '兔子',
                    },{
                        value: '选项四',
                        label: '仓鼠',
                    },{
                        value: '选项五',
                        label: '乌龟',
                }],
                operationData: {
                    animation: true,
                    animationThreshold: 2000,
                    animationDuration: 1000,
                    animationEasing: 'cubicOut',
                    animationDelay: 0,
                    animationDurationUpdate: 300,
                    animationEasingUpdate: 'cubicOut',
                    animationDelayUpdate: 0,
                    color: [
                        "#c23531",
                        "#2f4554",
                        "#61a0a8",
                        "#d48265",
                        "#749f83",
                        "#ca8622",
                        "#bda29a",
                        "#6e7074",
                        "#546570",
                        "#c4ccd3",
                        "#f05b72",
                        "#ef5b9c",
                        "#f47920",
                        "#905a3d",
                        "#fab27b",
                        "#2a5caa",
                        "#444693",
                        "#726930",
                        "#b2d235",
                        "#6d8346",
                        "#ac6767",
                        "#1d953f",
                        "#6950a1",
                        "#918597"
                    ],
                    series: [
                        {
                            type: 'wordCloud',
                            shape: 'circle',
                            rotationRange: [-90, 90],
                            rotationStep: 90,
                            girdSize: 20,
                            sizeRange: [40, 80],
                            data: [
                                {
                                    "name": "\u516c\u53f8",
                                    "value": 120.58427460078256,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(153,15,141)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u53d1\u7968",
                                    "value": 87.34687480395533,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(128,56,123)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u5408\u4f5c",
                                    "value": 53.93195587055139,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(28,56,42)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u4f18\u60e0",
                                    "value": 51.19965591050451,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(115,53,145)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u6709\u9650\u516c\u53f8",
                                    "value": 43.07829706608994,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(51,54,80)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u5b9e\u4e1a",
                                    "value": 41.39863383752081,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(76,48,38)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u4fe1\u606f",
                                    "value": 39.26789797607576,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(102,66,38)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u5e7f\u544a",
                                    "value": 39.23273132026893,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(79,72,89)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u8d35\u53f8",
                                    "value": 38.41254908102754,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(3,43,76)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u4ee3\u5f00",
                                    "value": 37.72883465159276,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(100,45,132)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u6211\u53f8",
                                    "value": 36.225050587275014,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(117,68,8)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u8fd0\u8f93",
                                    "value": 35.23654972340907,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(45,55,119)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u8d1f\u8d23\u4eba",
                                    "value": 32.911470972803876,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(5,31,7)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u670d\u52a1",
                                    "value": 31.5970796473103,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(147,71,77)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u670b\u53cb",
                                    "value": 31.335114030453344,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(151,16,142)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u7ecf\u7406",
                                    "value": 31.309345253519563,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(121,82,109)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u7535\u8111",
                                    "value": 30.856175959981712,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(97,77,136)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u5730\u7a0e",
                                    "value": 29.903511404240646,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(92,106,119)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u8d22\u52a1",
                                    "value": 29.457821176539365,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(131,113,41)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u70b9\u6570",
                                    "value": 29.144994189578192,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(50,139,58)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u4e0a\u7f51",
                                    "value": 29.091448966194818,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(140,110,82)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u8054\u7cfb\u4eba",
                                    "value": 28.270414353317783,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(89,65,57)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u589e\u503c\u7a0e",
                                    "value": 26.715495026356354,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(156,150,31)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u6d3d\u5546",
                                    "value": 24.525852368315288,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(63,73,105)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u4e1a\u52a1",
                                    "value": 24.05028818220448,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(50,112,10)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u62b5\u6263",
                                    "value": 23.941458857616023,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(95,129,75)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u6765\u7535",
                                    "value": 23.22698205489542,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(136,125,143)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u56fd\u7a0e",
                                    "value": 22.795072291792387,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(73,121,21)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u8fdb\u9879",
                                    "value": 22.708879350213962,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(110,107,70)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u6df1\u5733\u5e02",
                                    "value": 21.848039105206166,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(46,56,5)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u8be6\u60c5\u8bf7",
                                    "value": 20.834816939080756,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(72,98,91)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u4f01\u4e1a",
                                    "value": 20.36907528409999,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(114,113,111)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u7535\u8bdd",
                                    "value": 19.974639747060767,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(124,77,46)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u771f\u7968",
                                    "value": 19.945514764556613,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(158,54,63)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u989d\u5ea6",
                                    "value": 19.3366584599176,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(21,59,146)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u5546\u8ba8",
                                    "value": 19.317782815320054,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(7,90,105)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u5206\u516c\u53f8",
                                    "value": 18.989849900509526,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(0,44,63)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u67e5\u8bc1",
                                    "value": 18.532068898794517,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(36,149,46)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u63d0\u4f9b",
                                    "value": 18.50836432080995,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(47,153,86)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u5e0c\u671b",
                                    "value": 18.492473293206732,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(48,143,129)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u54a8\u8be2",
                                    "value": 18.16704151687727,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(83,30,48)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u4ed8\u6b3e",
                                    "value": 17.12736759957825,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(138,132,79)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u7f51\u7ad9",
                                    "value": 17.051571845916143,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(57,0,82)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u5c0f\u65f6",
                                    "value": 16.9848908775699,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(65,138,67)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u62c5\u5fc3",
                                    "value": 16.758208978129304,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(78,39,149)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u7591\u8651",
                                    "value": 16.35634404020313,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(29,54,142)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u6d77\u5173",
                                    "value": 15.907019147335182,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(102,106,156)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u627f\u8bfa",
                                    "value": 15.86602570408119,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(132,143,55)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u5168\u56fd",
                                    "value": 15.501212290253529,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(60,129,24)"
                                        }
                                    }
                                },
                                {
                                    "name": "\u7968\u636e",
                                    "value": 15.410753388744052,
                                    "textStyle": {
                                        "normal": {
                                            "color": "rgb(39,52,35)"
                                        }
                                    }
                                }
                            ],
                            drawOutOfBound: false,
                            textStyle: {
                                emphasis: {}
                            }
                        }
                    ],
                    legend: [
                        {
                            data: [],
                            selected: {}
                        }
                    ],
                    tooltip: {
                        show: true,
                        trigger: 'item',
                        triggerOn: 'mousemove|click',
                        axisPointer: {
                            type: 'line',
                        },
                        textStyle: {
                            fontSize: 14
                        },
                        borderWidth: 10
                    }
                }
            }
        }
    }
</script>

<style scoped>
    body{margin: 0 0; padding: 0 0}
    #block {
        margin-left: 2%;
        margin-top: 2%;
    }
    .options {
        margin-left: 1%;
    }
    #searchButton {
        margin-left: 1%;
    }
    #keywordChart {
        width: 1200px;
        height: 550px;
    }
</style>
