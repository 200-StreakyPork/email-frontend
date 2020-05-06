<template>
    <el-menu
            default-active="this.$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened
            router>
        <el-menu-item index="/category">
            <i class="el-icon-menu"></i>
            <span solt="title">邮件分类</span>
        </el-menu-item>
        <el-menu-item index="/keyword">
            <i class="el-icon-menu"></i>
            <span slot="title">关键字</span>
        </el-menu-item>
        <el-menu-item index="/relationship">
            <i class="el-icon-document"></i>
            <span slot="title">关系网络</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "leftNav",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: auto;
        height: 100%;
    }
</style>
