<template>
    <div>
        <el-breadcrumb class="header" separator="/">
            <el-breadcrumb-item :to="{ path: '/category' }">分类详情</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/topic', query: {category: this.category}}">邮件主题</el-breadcrumb-item>
            <el-breadcrumb-item>邮件详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin-left: 5%; margin-top: 2%">
            <template v-for="topic in topics">
                <el-card class="box-card" style="display: inline-block; margin-top: 15px; margin-left: 2%">
                    <div slot="header" class="clearfix">
                        <span>{{topic.topicName}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="check">查看</el-button>
                    </div>
                    <div v-for="keyword in topic.keywords" :key="keyword" class="text item">
                        {{keyword}}
                    </div>
                </el-card>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topics",
        mounted: function () {
            this.init()
        },
        methods: {
            init() {
                console.log('page named topics init');
                this.category = this.$route.query.category
                console.log(this.category)
            },
            check() {
                this.$router.push({
                    path: '/doc',
                    query: {
                        category: this.category,
                        topics: this.topics
                    }
                })
            }
        },
        data() {
            return {
                category: '',
                topics: [
                    {
                        topicName: '主题0',
                        keywords: ['a','b','c','d','e']
                    },
                    {
                        topicName: '主题1',
                        keywords: ['f','g','h','i','j']
                    },
                    {
                        topicName: '主题0',
                        keywords: ['a','b','c','d','e']
                    },
                    {
                        topicName: '主题0',
                        keywords: ['a','b','c','d','e']
                    },
                    {
                        topicName: '主题0',
                        keywords: ['a','b','c','d','e']
                    },
                    {
                        topicName: '主题0',
                        keywords: ['a','b','c','d','e']
                    },
                    {
                        topicName: '主题0',
                        keywords: ['a','b','c','d','e']
                    },
                    {
                        topicName: '主题0',
                        keywords: ['a','b','c','d','e']
                    },
                    {
                        topicName: '主题0',
                        keywords: ['a','b','c','d','e']
                    },
                    {
                        topicName: '主题0',
                        keywords: ['a','b','c','d','e']
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

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 10px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 15%;
        height: auto;
    }
</style>
