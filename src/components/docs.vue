<template>
    <div>
        <el-breadcrumb class="header" separator="/">
            <el-breadcrumb-item :to="{ path: '/category' }">分类详情</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/topic', query: {category:this.category} }">邮件主题</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/doc', query: {category:this.category, topics:this.topics} }">邮件详情</el-breadcrumb-item>
            <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
        <div style="padding: 2%">
            <el-collapse v-model="activeName" accordion @change="handleChange">
                <template v-for="(email, index) in emails">
                    <el-collapse-item :title="email.title" :name=index>
                        <el-tree :data="email.emailData" :props="handleNodeClick"></el-tree>
                    </el-collapse-item>
                </template>
            </el-collapse>
        </div>
    </div>
</template>

<script>
    export default {
        name: "docs",
        mounted: function () {
            this.init()
        },
        methods: {
            init() {
                console.log('page named docs init');
                this.category = this.$route.query.category;
                this.topics = this.$route.query.topics
                console.log(this.category)
            },
            goBack() {
                this.$router.push({
                    path: '/topic',
                    query: {
                        category: this.category,
                    }
                })
            },
            handleChange(val) {
                console.log("collapse "+val+" has been touched.");
            },
            handleNodeClick(data) {
                console.log("node "+data+" has been touched.")
            },
        },
        data() {
            return {
                category: '',
                topics: [],
                activeName: '1',
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                len: 2,
                emails: [
                    {
                        title: '标题0',
                        from: '发件人0',
                        to: '收件人0',
                        emailData: [
                            {
                                label: '关键字',
                                children: [{
                                    label: '0'
                                }]
                            },
                            {
                                label: '摘要',
                                children: [{
                                    label: '0'
                                }]
                            },
                            {
                                label: '原文',
                                children: [{
                                    label: '0'
                                }]
                            }
                        ]
                    },
                    {
                        title: '标题1',
                        from: '发件人1',
                        to: '收件人1',
                        emailData: [
                            {
                                label: '关键字',
                                children: [{
                                    label: '1'
                                }]
                            },
                            {
                                label: '摘要',
                                children: [{
                                    label: '1'
                                }]
                            },
                            {
                                label: '原文',
                                children: [{
                                    label: '1'
                                }]
                            }
                        ]
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .header {
        margin-left: 2%;
        margin-top: 2%;
    }
</style>
