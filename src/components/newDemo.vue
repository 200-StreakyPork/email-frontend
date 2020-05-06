<template>
    <div>
        <el-button type='primary' @click='myTry'>测试页面的数据传输</el-button>
    </div>
</template>

<script>
    export default {
        name: "newDemo",
        mounted: function () {
            this.init()
        },
        methods: {
            init() {
                console.log('page init');
                this.param = this.$route.query.userName
            },
            myTry() {
                console.log(this.param)
            }
        },
        data () {
            return {
                name: 'demo',
                param: ''
            }
        }
    }
</script>

<style>

</style>
