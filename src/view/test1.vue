<template>
  <div class="test1">
    <div>
      <Input v-model="searchName" @keyup.native="likeSearch(searchName)" search placeholder="请输入员工姓名/工号、部门名称/编号、职级/岗位搜索" />
    </div>
    <div style="margin-top:20px">
      <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
        <Checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll">全选</Checkbox>
      </div>
      <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
          <Checkbox v-for="item in ygshowList" :label="item.id" :key="item.id" true-value="true">{{item.name}}({{item.id}})-{{item.name}}<span style="float: right;margin-right: 180px;width: 50px;
    text-align: center;">{{item.name}}</span></Checkbox>
      </CheckboxGroup>
      <!-- <Page :total="rytotal" size="small" :page-size='4' @on-change="rychangePage"></Page> -->
    </div>
    <div style="margin-top:20px">
      <Tag v-for="item in selectedShowItems" :key="item.id" :name="item.name" closable @on-close="handleClose(item)">{{item.name}}</Tag>
    </div>
  </div>
</template>
<script>
export default {
  name: 'test1',
  data(){
    return{
      checkAll: false,
      searchName:'',
      checkAllGroup: [],
      indeterminate:true,
      rytotal:0,
      ygshowList:[],
      yglist:[
        {
            name: "上海",
            id: 1
        },
        {
            name: "北京",
            id: 2
        },
        {
            name: "重庆",
            id: 3
        },
        {
            name: "嗨嗨",
            id: 4
        },
        {
            name: "海上",
            id: 5
        },
        {
            name: "aa",
            id: 6
        },
        {
            name: "bb",
            id: 7
        },
        {
            name: "cc",
            id: 8
        },
        {
            name: "dd",
            id: 9
        },
        {
            name: "ee",
            id: 10
        },
        {
            name: "ff",
            id: 11
        },
        {
            name: "gg",
            id: 12
        }
      ],
      selectedShowItems:[],
    }
  },
  methods:{
    likeSearch(searchName){
      var $this = this;
      if('' == searchName){
        return;
      }
      $this.ygshowList = $this.yglist;
      // $this.ygshowList = $this.yglist.slice(0,5);
      // $this.rytotal = $this.yglist.length;
    },
    handleCheckAll(){
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
        this.indeterminate = false;
      if (this.checkAll) {
        this.checkAllGroup = this.ygshowList.map(item=>{
          return item.id
        })
        let selecteTag = []
        selecteTag = this.ygshowList.map(item=>{
        return {name:item.name,id:item.id}
        })
        this.selectedShowItems = [...this.selectedShowItems,...selecteTag]

      } else {
      this.checkAllGroup = [];
      this.selectedShowItems = [];
  }
    },
    checkAllGroupChange(data){
      if (data.length === this.ygshowList.length) {
          this.indeterminate = false;
          this.checkAll = true;
          this.selectedShowItems = this.ygshowList.filter(item=>
              this.checkAllGroup.includes(item.id)
          )
      } else if (data.length > 0) {
          this.indeterminate = true;
          this.checkAll = false;
          this.selectedShowItems = this.ygshowList.filter(item=>
              this.checkAllGroup.includes(item.id)
          )
      } else {
          this.indeterminate = false;
          this.checkAll = false;
          this.selectedShowItems = []
      }
    },
    handleClose(item){
      if(!this.checkAllGroup){
          this.checkAll = false;
      }
      this.selectedShowItems = this.selectedShowItems.filter(num=>
          num.id!=item.id
      )
      this.checkAllGroup = this.selectedShowItems.map(item=>{
          return item.id
      })
      if(this.checkAllGroup.length===0){
          this.checkAll = false;
      }
    },
    rychangePage(page){
      if(page===1){
          this.ygshowList = this.yglist.slice(0,5)
          return
      }
      this.checkAll = false;
      this.ygshowList = this.yglist.slice((page - 1)*6-1,(page - 1)*6+4);
    }
  }
}
</script>
<style lang="less">
  .test1{
    width: 500px;
    margin: 0 auto;
    padding-top: 50px;
  }
</style>
