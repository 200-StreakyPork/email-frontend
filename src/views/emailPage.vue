<template>
    <el-container>
        <el-header style="height: 70px">
            <router-view name="topNav"></router-view>
        </el-header>
        <el-container>
            <el-aside width="15%">
                <router-view name="leftNav"></router-view>
            </el-aside>
            <el-main>
                <router-view name="main"></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "emailPage"
    }
</script>

<style scoped>
    body{margin: 0 0; padding: 0 0}
    .el-container {
        height: 100%;
    }
    .el-header {
        background-color: #b3c0d1;
        color: #333;
        line-height: 60px;
    }
    .el-aside {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
    }
</style>
