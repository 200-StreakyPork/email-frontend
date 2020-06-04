import echarts from 'echarts'

const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get () {
                return {
                    drawChart: function (id, optionData) {
                        this.chart = echarts.init(document.getElementById(id));
                        //console.log(optionData.xAxis.data)
                        this.chart.clear();
                        this.chart.setOption(optionData)
                    }
                }
            }
        }
    })
};

export default {
    install
}
