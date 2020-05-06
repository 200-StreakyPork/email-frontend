<template>
    <!--显示邮件主题-->
    <div>
        <el-breadcrumb class="header" separator="/">
            <el-breadcrumb-item :to="{ path: '/category' }">分类详情</el-breadcrumb-item>
            <el-breadcrumb-item>邮件主题</el-breadcrumb-item>
            <el-breadcrumb-item>邮件详情</el-breadcrumb-item>
        </el-breadcrumb>
        <h3 style="text-align: center">邮件集分类</h3>
        <h6 style="text-align: center">分类方式：TF-IDF计算出特征矩阵，使用K-means进行分类。</h6>
        <el-table :data="categoryData" style="width: 50%; margin: 0px auto">
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
    export default {
        name: "categories",
        mounted: function() {
            this.init()
        },
        methods: {
            init() {
                console.log("page named categories init")
            },
            check(row) {
                console.log(row);
                this.$router.push({
                    path: '/topic',
                    query: {
                        category: row.category,
                    }
                })
            }
        },
        data() {
            return {
                categoryData: [
                    {
                        category: '类别0',
                        number: '100'
                    },
                    {
                        category: '类别1',
                        number: '200'
                    },
                    {
                        category: '类别2',
                        number: '300'
                    }
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
