<template>
	<div>
		<!--<v-pageTitle vtitle="EditorPage"></v-pageTitle>-->
		<h2>设备管理</h2>
		<div class="nav">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>设备管理</el-breadcrumb-item>

			</el-breadcrumb>

		</div>

		<div class="br"></div>

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

					<el-form-item label="真实姓名" :label-width="formLabelWidth">
						<el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>

					<el-form-item label="角色类型" :label-width="formLabelWidth">
						<el-input v-model="form.role" auto-complete="off"></el-input>
					</el-form-item>

					<!--下拉菜单选择后期开发-->
					<!--<el-dropdown>
						<span class="el-dropdown-link">选择<i class="el-icon-arrow-down el-icon--right"></i></span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>用户</el-dropdown-item>
							<el-dropdown-item>维护员</el-dropdown-item>
							<el-dropdown-item disabled>管理员</el-dropdown-item>
							<el-dropdown-item divided>蚵仔煎</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>-->

					<el-form-item label="电话" :label-width="formLabelWidth">
						<el-input v-model="form.telephone" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="邮箱" :label-width="formLabelWidth">
						<el-input v-model="form.email" auto-complete="off"></el-input>
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

			<el-button size="medium" type="success" @click="open3">刷新</el-button>
			<el-button size="medium" type="danger" @click="open6">删除</el-button>

		</div>

		<el-table :data="tableData" style="width: 100%" class="table">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="controlid" label="控制器ID">
			</el-table-column>
			<el-table-column prop="status" label="设备状态">
			</el-table-column>
			<el-table-column prop="time" label="已使用时长" width="180">
			</el-table-column>
			<el-table-column prop="surplus" label="账户剩余时长 ">
			</el-table-column>

			<el-table-column label="操作">
				<template slot-scope="scope">

					<!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>-->
					<el-switch style="display: block" v-model="value4" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费" inactive-text="按年付费">
					</el-switch>

				</template>
			</el-table-column>
		</el-table>

		<div class="paging block">

			<!-- <span class="demonstration">调整每页显示条数</span>-->
			<el-pagination :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="sizes, prev, pager, next" :total="1000">
			</el-pagination>

			<!--@size-change="handleSizeChange"-->
			<!--@current-change="handleCurrentChange"-->
			<!--:current-page.sync="currentPage2"-->
		</div>

	</div>
</template>

<script>
	//	import vPageTitle from '../common/pageTitle.vue';
	export default {
		data() {
			return {
				tableData: [{
					controlid: 'V12332JSA12SH',
					status: '离线',
					time: '250小时',
					surplus: '2800小时'
				}, {
					controlid: 'X12332JSA12SH',
					status: '在线',
					time: '250小时',
					surplus: '2800小时'

				}, {
					controlid: 'Q12332JSA12SH',
					status: '在线',
					time: '250小时',
					surplus: '2808小时'
				}, {
					controlid: 'Z12332JSA12SH',
					status: '离线',
					time: '250小时',
					surplus: '1280小时'
				}],
				value4: true,
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
			open6() {
				this.$confirm('此操作将永久删除该数据 , 是否继续呢?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			},
			open3() {
				this.$notify({
					title: '成功',
					message: '刷新成功了哟，点击可关闭',
					type: 'success'
				});
			}
		}
	}
</script>

<style scoped>
	h2 {
		margin: 5px 0 18px 0;
	}
	
	.br {
		border: 0.5px solid #6085B0;
	}
	
	.btn {
		margin: 35px 0 15px 0;
	}
	
	.nav {
		margin-bottom: 20px;
		font-size: 30px;
	}
	
	.paging {
		margin-top: 30px;
		text-align: center;
	}
	
	.el-button+.el-button {
		margin-left: 0;
	}
</style>