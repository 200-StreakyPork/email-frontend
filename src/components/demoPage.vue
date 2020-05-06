<template>
    <div>
        <div>
            <p> {{name}} </p>
            <p> {{user.level}} </p>
            <el-button type='primary' @click='consoleShow'>我是一个按钮</el-button>
        </div>
        <div id="chart"></div>
    </div>
</template>

<script>
    import {getUserName} from '../api/getUser'
    export default {
        name: "demoPage",
        mounted: function () {
            this.$axios({
                method: 'get',
                url: '/drawChart'
            }).then(function (res) {
                this.operationData.xAxis.data = res.data.date;
                this.operationData.series[0].data = res.data.number;
                this.$chart.drawChart('chart', this.operationData)
            }.bind(this)).catch(function (err) {
                console.log(err)
            });
            this.init()
        },
        methods: {
            init () {
                // console.log指在控制台输出内容，在浏览器界面按F12打开，选择console即可看到内容了
                console.log('page named demoPage init')
            },
            consoleShow () {
                console.log('the button is clicked.');
                let result = getUserName(this, "161250094");
                result.then(function (res) {
                    console.log(res.data);
                    this.user.userName = res.data;
                    this.$router.push({
                        path: '/newDemo',
                        query: {
                            userName: 'StreakyPork'
                        }
                    })
                }.bind(this)).catch(function (err) {
                    console.log(err)
                })
            }
        },
        data () {
            return {
                name: 'demo',
                user: {
                    userId: '10000',
                    level: 'level2',
                    userName: ''
                },
                operationData: {
                    xAxis: {
                        type: 'category',
                        data: []
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [],
                        type: 'line',
                        smooth: true
                    }]
                }
            }
        }
    }
</script>

<style>
    #chart {
        width: 1200px;
        height: 600px;
    }
</style>
