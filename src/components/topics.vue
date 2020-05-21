<template>
    <div>
        <el-breadcrumb class="header" separator="/">
            <el-breadcrumb-item :to="{ path: '/category', query:{categoryData: this.categoryData}}">聚类详情</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/topic', query: {category: this.category, categoryData: this.categoryData}}">邮件主题</el-breadcrumb-item>
            <el-breadcrumb-item>邮件详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin-left: 5%; margin-top: 2%" v-loading="loading">
            <template v-for="topic in topics">
                <el-card class="box-card" style="display: inline-block; margin-top: 15px; margin-left: 2%">
                    <div slot="header" class="clearfix">
                        <span>{{topic.topicName}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="check(topic.topicName)">查看</el-button>
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
    import {getTopic} from "@/api/Mail"
    export default {
        name: "topics",
        mounted: function () {
            this.init()
        },
        methods: {
            init() {
                console.log('page named topics init');
                this.category = this.$route.query.category;
                this.categoryData = this.$route.query.categoryData;
                let topics = this.$route.query.topics;
                if(topics==null){
                    let result = getTopic(this, this.category);
                    result.then(function (res) {
                        this.topics = res.data;
                        this.loading = false;
                    }.bind(this)).catch(function (err) {
                        console.log(err);
                    });
                }
                else {
                    this.topics = topics;
                    this.loading = false;
                }

            },
            check(topic) {
                this.$router.push({
                    path: '/doc',
                    query: {
                        category: this.category,
                        categoryDat: this.categoryData,
                        topics: this.topics,
                        topic: topic
                    }
                })
            }
        },
        data() {
            return {
                loading: true,
                category: '',
                categoryData: [],
                topics: []
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
