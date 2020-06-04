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
            <el-select v-model="value" placeholder="请选择">
                <el-option
                        v-for="item in options"
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
            console.log('page named personal_keyword init');
            this.init()
        },
        methods: {
            init () {
                let result = getAllKeyword(this);
                result.then(function (res) {
                    let theme0 = res.data.theme0;
                    this.setOperationData(theme0);
                }.bind(this)).catch(function (err) {
                    console.log(err)
                });
            },
            search() {
                console.log(this.dateTime);
                if (this.dateTime == null) {
                    this.init();
                }
                else {
                    let result = getKeywordByDate(this, this.dateTime);
                    let current_value = this.value;
                    result.then(function (res) {
                        let theme;
                        switch (current_value) {
                            case "选项1":  theme = res.data.theme0; break;
                            case "选项2":  theme = res.data.theme1; break;
                            case "选项3":  theme = res.data.theme2; break;
                            case "选项4":  theme = res.data.theme3; break;
                            case "选项5":  theme = res.data.theme4; break;
                        }
                        this.setOperationData(theme);
                    }.bind(this)).catch(function (err) {
                        console.log(err)
                    });
                }
            },
            setOperationData(theme) {
                this.operationData.series[0].data=[];
                for(let i=0; i<theme.length; i++){
                    this.operationData.series[0].data.push({
                        name: theme[i][0],
                        value: theme[i][1],
                        textStyle: {
                            normal: {
                                color: this.operationData.color[i%24]
                            }
                        }
                    });
                }
                this.$chart.drawChart('keywordChart', this.operationData)
            }
        },
        data () {
            return {
                name: 'demo',
                dateTime: [], //yyyy-MM-dd
                options: [
                    {
                        value: '选项1',
                        label: '聚类1'
                    }, {
                        value: '选项2',
                        label: '聚类2'
                    }, {
                        value: '选项3',
                        label: '聚类3'
                    }, {
                        value: '选项4',
                        label: '聚类4'
                    }, {
                        value: '选项5',
                        label: '聚类5'
                    }
                ],
                value: '',
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
                            data: [],
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
    #searchButton {
        margin-left: 1%;
    }
    #keywordChart {
        width: 1200px;
        height: 550px;
    }
</style>
