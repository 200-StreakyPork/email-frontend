<template>
    <!--显示邮件主题-->
    <div>
        <el-breadcrumb class="header" separator="/">
            <el-breadcrumb-item :to="{ path: '/category' }">聚类详情</el-breadcrumb-item>
            <el-breadcrumb-item>邮件主题</el-breadcrumb-item>
            <el-breadcrumb-item>邮件详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table
                v-loading="loading"
                :data="categoryData"
                style="width: 60%; margin: 2% auto 0px;">
            <el-table-column prop="category" label="邮件类别" align="center"></el-table-column>
            <el-table-column prop="number" label="邮件数量" align="center"></el-table-column>
            <el-table-column prop="check" label="查看详情" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" @click="check(scope.row)">查看</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    import {getCategory, getTopic, getDoc} from "@/api/Mail"
    export default {
        name: "categories",
        mounted: function() {
            this.init()
        },
        methods: {
            init() {
                console.log("page named categories init");
                let catData = this.$route.query.categoryData;
                if(catData==null){
                    let result = getCategory(this);
                    result.then(function (res) {
                        this.categoryData = res.data;
                        this.loading = false;
                    }.bind(this)).catch(function (err) {
                        console.log(err);
                    });
                }
                else {
                    this.categoryData = catData;
                    this.loading = false;
                }
            },
            check(row) {
                console.log(row);
                this.$router.push({
                    path: '/topic',
                    query: {
                        category: row.category,
                        categoryData: this.categoryData
                    }
                })
            }
        },
        data() {
            return {
                loading: true,
                categoryData: []
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
