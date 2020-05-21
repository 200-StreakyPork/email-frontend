<template>
    <div>
        <el-breadcrumb class="header" separator="/">
            <el-breadcrumb-item :to="{ path: '/category', query: {categoryData:this.categoryData} }">聚类详情</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/topic', query: {category:this.category, categoryData:this.categoryData, topics:this.topics} }">邮件主题</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/doc', query: {category:this.category, categoryData: this.categoryData, topics:this.topics, topic:this.topic} }">邮件详情</el-breadcrumb-item>
            <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
        <div style="padding: 2%" v-loading="loading">
            <el-collapse v-model="activeName" accordion @change="handleChange">
                <template v-for="(email, index) in emails">
                    <el-collapse-item :title="'标题:'+email.title+'; 发件人:'+email.from+'; 收件人:'+email.to" :name=index>
                        <el-tree :data="email.emailData" :props="handleNodeClick" style="width: 100%">
                            <span class="span-ellipsis" slot-scope="{ node, data }">
		                        <span :title="node.label">{{ node.label }}</span>
                            </span>
                        </el-tree>
                    </el-collapse-item>
                </template>
            </el-collapse>
        </div>
    </div>
</template>

<script>
    import {getDoc} from "@/api/Mail"
    export default {
        name: "docs",
        mounted: function () {
            this.init()
        },
        methods: {
            init() {
                console.log('page named docs init');
                this.category = this.$route.query.category;
                this.categoryData = this.$route.query.categoryData;
                this.topics = this.$route.query.topics;
                this.topic = this.$route.query.topic;
                let result = getDoc(this, this.category, this.topic);
                result.then(function (res) {
                    let mails = res.data;
                    console.log(mails);
                    this.emails = [];
                    for(let i=0; i<mails.length; i++){
                        this.emails.push({
                            title: mails[i].title,
                            from: mails[i].from,
                            to: mails[i].to,
                            emailData: [
                                {
                                    label: '关键字',
                                    children: [{
                                        label: mails[i].keyword
                                    }]
                                },
                                {
                                    label: '摘要',
                                    children: [{
                                        label: mails[i].abstract
                                    }]
                                },
                                {
                                    label: '原文',
                                    children: [{
                                        label: mails[i].docs
                                    }]
                                }
                            ]
                        });
                    }
                    this.loading = false;
                }.bind(this)).catch(function (err) {
                    console.log(err);
                });
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
                loading: true,
                category: '',
                categoryData: [],
                topics: [],
                topic: '',
                activeName: '1',
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                len: 2,
                emails: []
            }
        }
    }
</script>

<style scoped>
    .header {
        margin-left: 2%;
        margin-top: 2%;
    }
    .span-ellipsis {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
