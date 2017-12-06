<template>
    <div >
    <v-pageTitle vtitle="MarkdownPage"></v-pageTitle>
    <div class="nav">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>客户管理</el-breadcrumb-item>
				<el-breadcrumb-item>机构管理</el-breadcrumb-item>
			</el-breadcrumb>

		</div>

		<div class="btn">

			<el-button size="medium" type="primary" @click="dialogFormVisible = true">新增</el-button>

			<!--内嵌表格-->

			<el-dialog title="新增" :visible.sync="dialogFormVisible">
				<el-form :model="form">

					<!--<el-form-item label="角色选择" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请选择角色">
							<el-option label="管理员" value="shanghai"></el-option>
							<el-option label="用户" value="beijing"></el-option>
						</el-select>
					</el-form-item>-->

					<el-form-item label="客户名称" :label-width="formLabelWidth">
						<el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="电话" :label-width="formLabelWidth">
						<el-input v-model="form.phone" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="数量" :label-width="formLabelWidth">
						<el-input v-model="form.number" auto-complete="off"></el-input>
					</el-form-item>

					<el-form-item label="日期" :label-width="formLabelWidth">
						<el-col :span="11">
							<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
						</el-col>
						
					</el-form-item>

				</el-form>

				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
				</div>
			</el-dialog>
			
			<el-button size="medium" type="success">刷新</el-button>
			<el-button size="medium" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>

		</div>

		<el-table :data="tableData" style="width: 100%" class="table">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="name" label="客户名称" width="180">
			</el-table-column>
			<el-table-column prop="telephone" label="电话" width="180">
			</el-table-column>
			
			<el-table-column prop="number" label="数量">
			</el-table-column>
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>

			<el-table-column label="操作">
				<template slot-scope="scope">

					<!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>-->
					<router-link to="../MarkdownPage">
						<el-button size="mini" type="warning">空间管理</el-button>
					</router-link>

					<el-button size="mini" type="primary" @click="dialogFormVisible = true">修改</el-button>

				</template>
			</el-table-column>
		</el-table>
		
		 <div class="paging block">
		 	
   <!-- <span class="demonstration">调整每页显示条数</span>-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
	</div>
</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
   
   

  

    export default {
        components:{
            vPageTitle,
           
        },
        data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: ' 南京蒙特梭利幼儿园 ',
					telephone: '025-5201314',
					number: '15'
				}, {
					date: '2016-05-04',
					name: ' 南京蒙特梭利幼儿园 ',
					telephone: '025-5201314',
					number: '15'
				}, {
					date: '2016-05-01',
					name: ' 南京蒙特梭利幼儿园 ',
					telephone: '025-5201314',
					number: '15'
				}, {
					date: '2016-05-03',
					name: ' 南京蒙特梭利幼儿园 ',
					telephone: '025-5201314',
					number: '15'
				}],
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px'
			}

		},
        methods: {      
        }
    }
</script>

<style scoped>

	.btn {
		margin-bottom: 20px;
	}
	
	.nav {
		margin-bottom: 20px;
		font-size: 30px;
	}
	.paging{
		margin-top: 30px;
		text-align: center;
	}
</style>