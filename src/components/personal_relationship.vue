<template>
    <div>
        <div class="drawerDiv">
            <el-button @click="drawer = true" type="primary">
                打开搜索栏
            </el-button>
        </div>
        <el-drawer
                title="搜索栏"
                :visible.sync="drawer"
                direction="rtl"
                size="30%">
            <div class="searchDiv">
                <el-input class="el-input" v-model="inputEmail" placeholder="请输入用户邮箱" clearable></el-input>
                <el-button class="el-search-button" type="primary" icon="el-icon-search" @click="search">查找</el-button>
                <div style="padding-top: 5%; height: 7%">
                    <el-scrollbar class="el-scrollbar">
                        <p v-for="(item, i) in this.users" style="margin: 0">
                            <el-button type="text" @click="chooseMail($event)"> {{item}} </el-button>
                        </p>
                    </el-scrollbar>
                </div>
            </div>
        </el-drawer>
        <div class="relationshipChart" id="relationshipChart"></div>
    </div>
</template>

<script>
    import '../api/Relationship'
    import {getAllRelationship, getPersonalRelationship} from "@/api/Relationship";
    import {getMail} from "@/api/getUser"

    export default {
        name: "relationship",
        created() {
            this.init();
        },
        methods: {
            init() {
                console.log("page named relationship init");
                let result = getPersonalRelationship(this, "zhan@126.com");
                result.then(function (res) {
                    console.log(res.data);
                    this.operationData.series[0].data = res.data.node;
                    this.operationData.series[0].links = res.data.link;
                    this.$chart.drawChart('relationshipChart', this.operationData);
                }.bind(this)).catch(function (err) {
                    console.log(err)
                });
                let result1 = getMail(this);
                result1.then(function (res) {
                    this.users = res.data;
                }.bind(this)).catch(function (err) {
                    console.log(err)
                });
            },
            search() {
                let result = getPersonalRelationship(this, this.inputEmail);
                result.then(function (res) {
                    console.log(res.data);
                    this.operationData.series[0].data = res.data.node;
                    this.operationData.series[0].links = res.data.link;
                    this.$chart.drawChart('relationshipChart', this.operationData);
                    this.drawer = false
                }.bind(this)).catch(function (err) {
                    console.log(err)
                });
            },
            chooseMail: function (event) {
                let el = event.currentTarget;
                let result = getPersonalRelationship(this, el.innerText);
                result.then(function (res) {
                    this.operationData.series[0].data = res.data.node;
                    this.operationData.series[0].links = res.data.link;
                    this.$chart.drawChart('relationshipChart', this.operationData);
                    this.drawer = false
                }.bind(this)).catch(function (err) {
                    console.log(err)
                });
            }
        },
        data() {
            return {
                inputEmail: '',
                users: [1,2,3],
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
        margin-left: 2%;
        margin-top: 2%;
        width: 50%;
    }
    .searchDiv {
        margin-left: 4%;
        width: 180%;
        height: 80%;
    }
    .el-input {
        float: left;
        width: 40%!important;
    }
    .el-search-button {
        float: left;
        margin-left: 1%;
    }
    .el-scrollbar {
        height: 100%;
        overflow-x: hidden;
    }
    .relationshipChart {
        width: 1200px;
        height: 600px;
    }
</style>
