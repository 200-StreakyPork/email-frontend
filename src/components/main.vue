<template>
    <div style="text-align: center;">
        <p>制作人员</p>
        <p>丁雯雯 161250020</p>
        <p>聂文韬 161250094</p>
        <p>秦天一 161250107</p>
    </div>
</template>

<script>
    import '../api/getUser'
    export default {
        name: "mainPage",
        mounted: function() {
            this.init()
        },
        methods: {
            init() {
                console.log("page named main init")
            }
        }
    }
</script>

<style scoped>

</style>
