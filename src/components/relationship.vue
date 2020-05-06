<template>
    <div>
        <div class="searchDiv">
            <el-input class="el-input" v-model="inputEmail" placeholder="请输入用户邮箱" clearable></el-input>
            <el-button class="el-search-button" type="primary" icon="el-icon-search" @click="search">查找</el-button>
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
                    this.operationData.series.data = res.data.node;
                    this.operationData.series.links = res.data.link;
                    this.$chart.drawChart('relationshipChart', this.operationData)
                }.bind(this)).catch(function (err) {
                    console.log(err)
                })
            },
            search() {
                let result = getPersonalRelationship(this, this.inputEmail)
                result.then(function (res) {
                    this.operationData.series.data = res.data.node;
                    this.operationData.series.links = res.data.link;
                    this.$chart.drawChart('relationshipChart', this.operationData)
                }.bind(this)).catch(function (err) {
                    console.log(err)
                })
            }
        },
        data() {
            return {
                inputEmail: '',
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
                            data: [
                                {
                                    "name": "\u00c5\u00e0\u00d1\u00b5\u00bf\u00ce\u00b3\u00cc",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "lu@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "pan@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "shi@ccert.edu.cn",
                                    "symbolSize": 25
                                },
                                {
                                    "name": "jian@163.con",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xing@ccert.edu.cn",
                                    "symbolSize": 25
                                },
                                {
                                    "name": "pan@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ling@ccert.edu.cn",
                                    "symbolSize": 30
                                },
                                {
                                    "name": "mei@dghhkjk.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tang@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "ke@163.com",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "yuan@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "jiang@tom.com",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "li@ccert.edu.cn",
                                    "symbolSize": 30
                                },
                                {
                                    "name": "han@davidchans.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "lai@ccert.edu.cn",
                                    "symbolSize": 25
                                },
                                {
                                    "name": "hou@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhong@gznmg.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ke@ccert.edu.cn",
                                    "symbolSize": 25
                                },
                                {
                                    "name": "ding@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhou@ccert.edu.cn",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "qian@fszz.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhao@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "fu@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "pu@ccert.edu.cn",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "hou@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ning@ccert.edu.cn",
                                    "symbolSize": 45
                                },
                                {
                                    "name": "yang@121212.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "gong@ccert.edu.cn",
                                    "symbolSize": 35
                                },
                                {
                                    "name": "zeng@si.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhan",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "lv@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "sun@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhuang@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "zhong@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "huang@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wang@sina.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "lei@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "bi@sian.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "shen@ccert.edu.cn",
                                    "symbolSize": 30
                                },
                                {
                                    "name": "gong@163.con",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ou@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "gong@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xu@ccert.edu.cn",
                                    "symbolSize": 30
                                },
                                {
                                    "name": "fu@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xin@trm448.88ip.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xia@chinabmip74.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "bai@ccert.edu.cn",
                                    "symbolSize": 45
                                },
                                {
                                    "name": "tao@tom.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "guan@ccert.edu.cn",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "wen@sohu.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wen@ccert.edu.cn",
                                    "symbolSize": 25
                                },
                                {
                                    "name": "cen@yahoo.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xin@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "jiang@126.com",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "feng@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "zhu@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "kang@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "mo@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ma@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "che@weyuei",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "huang@133sh.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "jiang@ccert.edu.cn",
                                    "symbolSize": 30
                                },
                                {
                                    "name": "yuan@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wang@ccert.edu.cn",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "feng@cdcvxbc.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wei@ccert.edu.cn",
                                    "symbolSize": 35
                                },
                                {
                                    "name": "shen@sohu.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tian@ccert.edu.cn",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "hou@starwalk.net",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhuang@163.com",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "ou@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wei@13.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tu@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "gong@21cn.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "su@ccert.edu.cn",
                                    "symbolSize": 25
                                },
                                {
                                    "name": "xin@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhong@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "ni@agtc.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "lin@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "chen@soma.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhou@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "he@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "he@12.com",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "sun@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "cai@163.com",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "rao@sian.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "gao@ccert.edu.cn",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "ling@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "long@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "ling@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yi@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "chen@aopijg.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "rao@tjipe.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "qing@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "lu@zj.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tao@ccert.edu.cn",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "ke@tom.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "su@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xing@518.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "gu@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "qian@skinova.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ke@mail.enet.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "rao@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "hua@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "zhang@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "luo@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "kong@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wei@cn.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "you@fszz.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "han@ccert.edu.cn",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "wang@msa.hinet.net",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "bi@jdl.ac.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "qiu@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "jiang@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tang@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "hu@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ou@yk-jhh.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ren@ccert.edu.cn",
                                    "symbolSize": 25
                                },
                                {
                                    "name": "yu@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "bi@qq.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "gan@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "hua@tom.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tan@ccert.edu.cn",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "hong@163.com",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "kang@163.com",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "peng@21cn.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xin@gjkl.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "jin@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "guan@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xue@tom.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "pu@98987.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "bi@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhang@yahoo.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "lv@126.com",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "guo@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yana@ccert.edu.cn",
                                    "symbolSize": 35
                                },
                                {
                                    "name": "wang@cnhop.net",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "liu@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "qian@163.com",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "gao@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zheng@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "fan@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xue@jdl.ac.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "cheng@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "yan@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "lv@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wu@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "weng@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "xin@518.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "liu@service.netease.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xue@chinabyte.net",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xue@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "peng@126.com",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "qian@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "mo@ccert.edu.cn",
                                    "symbolSize": 25
                                },
                                {
                                    "name": "zhao@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "cai@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "201",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yi@sdfljas.net",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "bai@callnetuk.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "cao@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "ye@163.com",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "gong@yahoo.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "cai@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yang@ccert.edu.cn",
                                    "symbolSize": 25
                                },
                                {
                                    "name": "lin@yahoo.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "kong@ccert.edu.cn",
                                    "symbolSize": 25
                                },
                                {
                                    "name": "guan@tom.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "rao@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "cao@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tang@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tu@citiz.net",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "qian@ccert.edu.cn",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "tan@21cn.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xu@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhan@ccert.edu.cn",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "lai@tom.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xu@julichina.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "liu@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "bai@chinatrh.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xu@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tan@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "\u7f51\u7edc\u7535\u89c6",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xia@hi2000.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "lin@flashget.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wua@ccert.edu.cn",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "hong@bghkf.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhang@sheratonbeijing.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "jian@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "chen@98987.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tu@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "lei@163.com",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "shen",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "you@tom.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "gong@sina.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zeng@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "bi@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "cao@56.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "lin@qq.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yan@ccert.edu.cn",
                                    "symbolSize": 20
                                },
                                {
                                    "name": "zhu@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xiao@msn.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yun@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xiao@qq.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ye@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zheng@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wen@163.com",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "xie@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "kong@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhu@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "zeng@mail.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ding@jdl.ac.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "tang@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "mei@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "lai@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wen@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "hu@tom.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhao@tom.com",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "zhou@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yan@21cn.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yun@jdl.ac.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "ma@fygjdhotel.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhan@dd.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "li@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "qing@yahoo.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "lei@21cn.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yu@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zeng@21cn.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xue@chinabmip74.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wua@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "liao@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "zhong@tom.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "jiang@hdgka.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yuan@liyuanculture.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "mei@sina.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhou@21cn...",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xiao@yahoo.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ye@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wei@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xin@hsug.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wu@mart-sh.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "gao@toddrphoto.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "liu@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ou@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tao@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "you@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "pu@163.net",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "cen@sheratonbeijing.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "guo@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "chen@ksestar.net",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "luo@sina.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhan@sohu.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "fu@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "you@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "mo@winro.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "han@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wei@126.com",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "yi@518.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "guo@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhan@126.com",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "xia@abcde.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "che@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "qiu@tom.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tang@sina.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "hong@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "zhao@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "chen@21cn.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yana@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "\u5916\u8d38\u5ba2\u6237\u4e0e\u90ae\u4ef6\u5f80\u6765\u76d1\u7ba1\u7cfb\u7edf",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yun@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "cai@163.net",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "mei@126.com",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "chi@qq.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "kong@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "fan@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "mo@21cn.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ning@xm10000.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xia@ccert.edu.cn",
                                    "symbolSize": 15
                                },
                                {
                                    "name": "cheng@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "cheng@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "hong@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "weng@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wang@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tang@21cn.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xu@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "gao@sian.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "hong@gsdh.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "fan@121212.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wua@cgmcocoon.vicp.net",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "qiu@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ma@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zeng@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ou@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhong@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "pan@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "zheng@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "chi@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yu@bigfoot.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhong@eyou.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "hu@dfre.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "pu@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhao@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yana@yahoo.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "cen@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ye@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tian@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xie@myit365.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "lian@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "gao@chinabyte.net",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhong@yahoo.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhuang@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ling@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "hua@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhou@56.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yana@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "long@263.net",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zheng@hotmail.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "huang@jde152.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "pan@tom.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wei@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xiao@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "cai@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tao@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "cheng@sddydf.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "jian@21cn.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tang@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "peng@ccert.edu.cn",
                                    "symbolSize": 10
                                },
                                {
                                    "name": "qian@flashget.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "fu@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yang@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yan@sddydf.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "pu@zero2ipo.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "tian@chinaitlab.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhan@163.con",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "chen@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wu@sina.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "rao@yahoo.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhuang@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "fan@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xiao@98987.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "huang@21cn.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "mei@abcde.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "wua@tom.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "liu@www.126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "cheng@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "hu@56.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yana@tom.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "hua@chian.myrice.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "guo@12.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "shi@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xia@163",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "xing@163.con",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "chi@ccert.edu.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "cen@suhu.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "ding@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "cheng@126.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "chi@jdl.ac.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "bai@gootom.com.cn",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "fu@sian.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "zhan@163.com",
                                    "symbolSize": 5
                                },
                                {
                                    "name": "yang@126.com",
                                    "symbolSize": 5
                                }
                            ],
                            edgeLabel: {
                                show: false,
                                position: 'top',
                                margin: 8
                            },
                            edgeSymbol: [null, null],
                            edgeSymbolSize: 10,
                            links: [
                                {
                                    "source": "\u00c5\u00e0\u00d1\u00b5\u00bf\u00ce\u00b3\u00cc",
                                    "target": "lu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "pan@jdl.ac.cn",
                                    "target": "shi@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "jian@163.con",
                                    "target": "xing@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "pan@12.com",
                                    "target": "ling@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "mei@dghhkjk.com",
                                    "target": "tang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ke@163.com",
                                    "target": "yuan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "jiang@tom.com",
                                    "target": "li@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "han@davidchans.com",
                                    "target": "lai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hou@jdl.ac.cn",
                                    "target": "li@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhong@gznmg.com",
                                    "target": "ke@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ding@12.com",
                                    "target": "zhou@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "qian@fszz.com.cn",
                                    "target": "zhao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "fu@126.com",
                                    "target": "pu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hou@163.com",
                                    "target": "ning@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yang@121212.com",
                                    "target": "gong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zeng@si.com",
                                    "target": "ning@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhan",
                                    "target": "lv@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "sun@163.com",
                                    "target": "zhuang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhong@126.com",
                                    "target": "huang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wang@sina.com",
                                    "target": "lei@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "bi@sian.com",
                                    "target": "shen@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "gong@163.con",
                                    "target": "ou@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "gong@163.com",
                                    "target": "xu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "fu@jdl.ac.cn",
                                    "target": "pu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xin@trm448.88ip.cn",
                                    "target": "zhao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xia@chinabmip74.com",
                                    "target": "bai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tao@tom.com",
                                    "target": "guan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wen@sohu.com",
                                    "target": "wen@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cen@yahoo.com",
                                    "target": "xin@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "jiang@126.com",
                                    "target": "feng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhu@jdl.ac.cn",
                                    "target": "kang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "mo@163.com",
                                    "target": "ma@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "che@weyuei",
                                    "target": "ma@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "huang@133sh.com",
                                    "target": "jiang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yuan@163.com",
                                    "target": "wang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "feng@cdcvxbc.com.cn",
                                    "target": "wei@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "shen@sohu.com",
                                    "target": "tian@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hou@starwalk.net",
                                    "target": "wei@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhuang@163.com",
                                    "target": "ou@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ou@12.com",
                                    "target": "lei@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wei@13.com",
                                    "target": "lu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tu@jdl.ac.cn",
                                    "target": "guan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "gong@21cn.com",
                                    "target": "su@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xin@jdl.ac.cn",
                                    "target": "zhong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ni@agtc.com.cn",
                                    "target": "lin@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "chen@soma.com",
                                    "target": "lin@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhou@12.com",
                                    "target": "he@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "he@12.com",
                                    "target": "sun@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cai@163.com",
                                    "target": "bai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "rao@sian.com",
                                    "target": "gao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ling@12.com",
                                    "target": "long@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ling@163.com",
                                    "target": "yi@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "chen@aopijg.com",
                                    "target": "gong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "rao@tjipe.edu.cn",
                                    "target": "qing@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "lu@zj.com",
                                    "target": "tao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ke@tom.com",
                                    "target": "ning@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "su@126.com",
                                    "target": "bai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xing@518.com",
                                    "target": "gu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "qian@skinova.cn",
                                    "target": "shi@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ke@mail.enet.com.cn",
                                    "target": "lai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "rao@163.com",
                                    "target": "hua@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhang@126.com",
                                    "target": "luo@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "kong@12.com",
                                    "target": "shi@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wei@cn.cn",
                                    "target": "hua@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "you@fszz.com.cn",
                                    "target": "han@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wang@msa.hinet.net",
                                    "target": "wang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "bi@jdl.ac.cn",
                                    "target": "yuan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "jiang@tom.com",
                                    "target": "qiu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "jiang@jdl.ac.cn",
                                    "target": "qing@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tang@163.com",
                                    "target": "hu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ou@yk-jhh.com",
                                    "target": "ren@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yu@126.com",
                                    "target": "ning@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "bi@qq.com",
                                    "target": "gan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hua@tom.com",
                                    "target": "tan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hong@163.com",
                                    "target": "shen@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "kang@163.com",
                                    "target": "zhuang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "peng@21cn.com",
                                    "target": "bai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xin@gjkl.com",
                                    "target": "jin@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "guan@jdl.ac.cn",
                                    "target": "ling@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xue@tom.com",
                                    "target": "xing@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "pu@98987.com",
                                    "target": "ling@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "bi@163.com",
                                    "target": "sun@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhang@yahoo.com.cn",
                                    "target": "jiang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "lv@126.com",
                                    "target": "tang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "guo@126.com",
                                    "target": "yana@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wang@cnhop.net",
                                    "target": "liu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "qian@163.com",
                                    "target": "yana@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "gao@163.com",
                                    "target": "zheng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "fan@12.com",
                                    "target": "luo@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xue@jdl.ac.cn",
                                    "target": "cheng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yan@163.com",
                                    "target": "tao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "lv@jdl.ac.cn",
                                    "target": "luo@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wu@163.com",
                                    "target": "weng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xin@518.com",
                                    "target": "ning@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "liu@service.netease.com",
                                    "target": "zheng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xue@chinabyte.net",
                                    "target": "xue@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "peng@126.com",
                                    "target": "ning@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "qian@126.com",
                                    "target": "mo@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhao@12.com",
                                    "target": "cai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "201",
                                    "target": "li@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yi@sdfljas.net",
                                    "target": "xing@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "bai@callnetuk.com",
                                    "target": "cao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ye@163.com",
                                    "target": "ren@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "gong@yahoo.com.cn",
                                    "target": "lu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cai@126.com",
                                    "target": "yang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "lin@yahoo.com.cn",
                                    "target": "kong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "guan@tom.com",
                                    "target": "rao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cao@163.com",
                                    "target": "ning@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tang@12.com",
                                    "target": "wen@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "bi@jdl.ac.cn",
                                    "target": "rao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tu@citiz.net",
                                    "target": "qian@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tan@21cn.com",
                                    "target": "bai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xu@163.com",
                                    "target": "zhan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "lai@tom.com",
                                    "target": "shen@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xu@julichina.com",
                                    "target": "ke@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cai@163.com",
                                    "target": "yang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "liu@126.com",
                                    "target": "pu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "bai@chinatrh.com",
                                    "target": "xing@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "he@12.com",
                                    "target": "cheng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xu@12.com",
                                    "target": "guan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tan@jdl.ac.cn",
                                    "target": "li@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xue@jdl.ac.cn",
                                    "target": "ren@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "\u7f51\u7edc\u7535\u89c6",
                                    "target": "xu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xia@hi2000.com",
                                    "target": "zhong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "lin@flashget.com",
                                    "target": "wua@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hong@bghkf.com",
                                    "target": "wei@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhang@sheratonbeijing.com",
                                    "target": "jian@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "chen@98987.com",
                                    "target": "tu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "lei@163.com",
                                    "target": "ren@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "shen",
                                    "target": "zhan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "you@tom.com",
                                    "target": "zhou@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "gong@sina.com",
                                    "target": "zeng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hong@163.com",
                                    "target": "bi@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cao@56.com",
                                    "target": "zheng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ke@163.com",
                                    "target": "yang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "lin@qq.com",
                                    "target": "yan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhu@163.com",
                                    "target": "wei@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xiao@msn.com",
                                    "target": "xu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yun@126.com",
                                    "target": "jiang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xiao@qq.com",
                                    "target": "ye@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zheng@jdl.ac.cn",
                                    "target": "feng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wen@163.com",
                                    "target": "xie@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "qian@163.com",
                                    "target": "shen@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "kong@163.com",
                                    "target": "zhu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zeng@mail.com",
                                    "target": "sun@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ding@jdl.ac.cn",
                                    "target": "he@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tang@126.com",
                                    "target": "mei@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "lai@jdl.ac.cn",
                                    "target": "shi@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wen@jdl.ac.cn",
                                    "target": "bai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hu@tom.com",
                                    "target": "gong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhao@tom.com",
                                    "target": "tian@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhou@126.com",
                                    "target": "gong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "qian@163.com",
                                    "target": "qian@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yan@21cn.com",
                                    "target": "yi@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yun@jdl.ac.cn",
                                    "target": "hua@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ma@fygjdhotel.com",
                                    "target": "guan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhan@dd.com",
                                    "target": "lv@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "li@163.com",
                                    "target": "qiu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "qing@yahoo.com",
                                    "target": "mo@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "lei@21cn.com",
                                    "target": "yu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zeng@21cn.com",
                                    "target": "su@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xue@chinabmip74.com",
                                    "target": "wei@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wua@163.com",
                                    "target": "liao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhong@tom.com",
                                    "target": "han@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "jiang@hdgka.com",
                                    "target": "tan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yuan@liyuanculture.com",
                                    "target": "xu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "mei@sina.com",
                                    "target": "ling@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "lei@163.com",
                                    "target": "long@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhou@21cn...",
                                    "target": "wei@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xiao@yahoo.com.cn",
                                    "target": "kong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ye@12.com",
                                    "target": "qing@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wei@163.com",
                                    "target": "tao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xin@hsug.com",
                                    "target": "li@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ding@jdl.ac.cn",
                                    "target": "mei@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wu@mart-sh.com",
                                    "target": "zhou@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "gao@toddrphoto.com",
                                    "target": "mo@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "liu@12.com",
                                    "target": "lai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ou@126.com",
                                    "target": "yana@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tao@12.com",
                                    "target": "yan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "you@163.com",
                                    "target": "xie@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "pu@163.net",
                                    "target": "ning@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cen@sheratonbeijing.com",
                                    "target": "guo@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "chen@ksestar.net",
                                    "target": "xing@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "luo@sina.com",
                                    "target": "yang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhan@sohu.com",
                                    "target": "liu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "fu@163.com",
                                    "target": "you@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "mo@winro.com",
                                    "target": "kong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "han@126.com",
                                    "target": "wen@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wei@126.com",
                                    "target": "tan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yi@518.com",
                                    "target": "wang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "guo@163.com",
                                    "target": "lai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhan@126.com",
                                    "target": "ren@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "kang@163.com",
                                    "target": "gong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wen@163.com",
                                    "target": "cai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xia@abcde.com",
                                    "target": "che@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "qiu@tom.com",
                                    "target": "ning@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tang@sina.com",
                                    "target": "hong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhao@jdl.ac.cn",
                                    "target": "su@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "chen@21cn.com",
                                    "target": "liu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yana@jdl.ac.cn",
                                    "target": "zhao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "\u5916\u8d38\u5ba2\u6237\u4e0e\u90ae\u4ef6\u5f80\u6765\u76d1\u7ba1\u7cfb\u7edf",
                                    "target": "yun@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cai@163.net",
                                    "target": "lei@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "mei@126.com",
                                    "target": "yun@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "chi@qq.com",
                                    "target": "jian@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "kong@jdl.ac.cn",
                                    "target": "fan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "mo@21cn.com",
                                    "target": "shi@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ning@xm10000.cn",
                                    "target": "xia@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cheng@12.com",
                                    "target": "cai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cheng@jdl.ac.cn",
                                    "target": "mo@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hong@jdl.ac.cn",
                                    "target": "kong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "weng@jdl.ac.cn",
                                    "target": "ling@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wang@163.com",
                                    "target": "gong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tang@21cn.com",
                                    "target": "zhong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xu@126.com",
                                    "target": "ke@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "gao@sian.com",
                                    "target": "xu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hong@gsdh.com",
                                    "target": "weng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "fan@121212.com",
                                    "target": "tian@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wua@cgmcocoon.vicp.net",
                                    "target": "wei@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "qiu@126.com",
                                    "target": "gao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ma@12.com",
                                    "target": "wen@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zeng@163.com",
                                    "target": "yana@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ou@163.com",
                                    "target": "guo@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhong@jdl.ac.cn",
                                    "target": "pan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zheng@163.com",
                                    "target": "jiang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "kang@163.com",
                                    "target": "zeng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "chi@126.com",
                                    "target": "xia@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yu@bigfoot.com",
                                    "target": "wua@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhong@eyou.com",
                                    "target": "yana@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hu@dfre.com",
                                    "target": "bai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "pu@12.com",
                                    "target": "che@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "lv@126.com",
                                    "target": "tao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhao@163.com",
                                    "target": "shen@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhan@126.com",
                                    "target": "xia@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yana@yahoo.com.cn",
                                    "target": "cen@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ye@126.com",
                                    "target": "hong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tian@163.com",
                                    "target": "pu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xie@myit365.com",
                                    "target": "lian@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "gao@chinabyte.net",
                                    "target": "kong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhan@126.com",
                                    "target": "mo@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhong@yahoo.com.cn",
                                    "target": "zhou@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhuang@126.com",
                                    "target": "yan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ling@jdl.ac.cn",
                                    "target": "liao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hua@jdl.ac.cn",
                                    "target": "he@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ye@163.com",
                                    "target": "lin@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhou@56.com",
                                    "target": "wua@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yana@126.com",
                                    "target": "lian@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "long@263.net",
                                    "target": "tang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zheng@hotmail.com",
                                    "target": "qian@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "huang@jde152.cn",
                                    "target": "su@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "pan@tom.com",
                                    "target": "han@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wei@jdl.ac.cn",
                                    "target": "xiao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wei@126.com",
                                    "target": "qian@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yun@jdl.ac.cn",
                                    "target": "weng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cai@jdl.ac.cn",
                                    "target": "cao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tao@jdl.ac.cn",
                                    "target": "ke@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cheng@sddydf.com",
                                    "target": "gong@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "jian@21cn.com",
                                    "target": "shen@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tang@jdl.ac.cn",
                                    "target": "peng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "qian@flashget.com",
                                    "target": "fu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yang@jdl.ac.cn",
                                    "target": "jiang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yan@sddydf.com",
                                    "target": "peng@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "pu@zero2ipo.com.cn",
                                    "target": "xu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "tian@chinaitlab.com",
                                    "target": "han@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhan@163.con",
                                    "target": "chen@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wu@sina.com",
                                    "target": "ou@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "rao@yahoo.com.cn",
                                    "target": "gao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhuang@12.com",
                                    "target": "qiu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhuang@163.com",
                                    "target": "liao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "peng@126.com",
                                    "target": "tan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "fan@163.com",
                                    "target": "zhu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xiao@98987.com",
                                    "target": "yana@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "huang@21cn.com",
                                    "target": "wen@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "mei@abcde.com",
                                    "target": "guo@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wua@tom.com",
                                    "target": "zhan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "liu@www.126.com",
                                    "target": "pan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cheng@163.com",
                                    "target": "tu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hu@56.com",
                                    "target": "yana@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yana@tom.com",
                                    "target": "lai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "hua@chian.myrice.com",
                                    "target": "kang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "guo@12.com",
                                    "target": "bai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "mei@126.com",
                                    "target": "li@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "shi@163.com",
                                    "target": "yan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xia@163",
                                    "target": "tian@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "wen@163.com",
                                    "target": "gu@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhao@tom.com",
                                    "target": "wang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "qian@163.com",
                                    "target": "ke@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "jiang@126.com",
                                    "target": "gao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "xing@163.con",
                                    "target": "chi@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cen@suhu.com",
                                    "target": "wua@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "kang@163.com",
                                    "target": "rao@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "ding@163.com",
                                    "target": "kang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "cheng@126.com",
                                    "target": "bai@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "chi@jdl.ac.cn",
                                    "target": "zhan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "bai@gootom.com.cn",
                                    "target": "ling@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "fu@sian.com",
                                    "target": "yuan@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "zhan@163.com",
                                    "target": "su@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "lei@163.com",
                                    "target": "jiang@ccert.edu.cn",
                                    "weight": 1
                                },
                                {
                                    "source": "yang@126.com",
                                    "target": "yang@ccert.edu.cn",
                                    "weight": 1
                                }
                            ],
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
