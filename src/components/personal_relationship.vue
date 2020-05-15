<template>
    <div>
        <div class="searchDiv">
            <el-input class="el-input" v-model="inputEmail" placeholder="请输入用户邮箱" clearable></el-input>
            <el-button class="el-search-button" type="primary" icon="el-icon-search" @click="search">查找</el-button>
        </div>
        <div class="drawerDiv">
            <el-button @click="drawer = true" type="primary">
                点我打开
            </el-button>
            <el-drawer
                    title="我是标题"
                    :visible.sync="drawer"
                    :with-header="false">
                <span>我来啦!</span>
            </el-drawer>
        </div>
        <div class="relationshipChart" id="relationshipChart"></div>
    </div>
</template>

<script>
    import '../api/Relationship'
    import {getAllRelationship, getPersonalRelationship} from "@/api/Relationship";

    export default {
        name: "relationship",
        mounted: function () {
            this.init()
        },
        methods: {
            init() {
                console.log("page named relationship init");
                let result = getAllRelationship(this);
                result.then(function (res) {
                    this.operationData.series[0].data = res.data.node;
                    this.operationData.series[0].links = res.data.link;
                    this.$chart.drawChart('relationshipChart', this.operationData);
                }.bind(this)).catch(function (err) {
                    console.log(err)
                })
            },
            search() {
                let result = getPersonalRelationship(this, this.inputEmail);
                result.then(function (res) {
                    this.operationData.series[0].data = res.data.node;
                    this.operationData.series[0].links = res.data.link;
                    this.$chart.drawChart('relationshipChart', this.operationData);
                }.bind(this)).catch(function (err) {
                    console.log(err)
                })
            }
        },
        data() {
            return {
                inputEmail: '',
                drawer: false,
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
                            type: 'graph',
                            layout: 'force',
                            symbolSize: 10,
                            circular: {
                                rotateLabel: false
                            },
                            force: {
                                repulsion: 8000,
                                edgeLength: 50,
                                gravity: 0.2
                            },
                            label: {
                                show: false,
                                position: 'top',
                                margin: 8
                            },
                            lineStyle: {
                                show: true,
                                width: 2,
                                opacity: 1,
                                curveness: 0.1,
                                type: 'solid'
                            },
                            roam: true,
                            draggable: false,
                            focusNodeAdjacency: true,
                            data: [],
                            edgeLabel: {
                                show: false,
                                position: 'top',
                                margin: 8
                            },
                            edgeSymbol: [null, null],
                            edgeSymbolSize: 10,
                            links: [],
                        }
                    ],
                    legend: [
                        {
                            data: [],
                            selected: {},
                            show: true,
                            padding: 5,
                            itemGap: 10,
                            itemWidth: 25,
                            itemHeight: 14
                        }
                    ],
                    tooltip: {
                        show: true,
                        trigger: 'item',
                        triggerOn: 'mousemove|click',
                        axisPointer: {
                            type: 'line'
                        },
                        textStyle: {
                            fontSize: 14
                        },
                        borderWidth: 0
                    },
                    // title: [
                    //     {
                    //         text: '\u90ae\u7bb1\u5173\u7cfb\u7f51',
                    //         padding: 5,
                    //         itemGap: 10
                    //     }
                    // ]
                }
            }
        }
    }
</script>

<style scoped>
    .drawerDiv {
        z-index: 2;
        margin-left: 2%;
        margin-top: 2%;
        width: 50%;
        position: absolute;
    }
    .searchDiv {
        z-index: 2;
        margin-left: 2%;
        margin-top: 2%;
        width: 50%;
        position: absolute;
    }
    .el-input {
        float: left;
        width: 40%!important;
    }
    .el-search-button {
        float: left;
        margin-left: 1%;
    }
    .relationshipChart {
        width: 1200px;
        height: 600px;
    }
</style>
