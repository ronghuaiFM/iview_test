<template>
    <div class="demo-avatar">
        <div class="allIcon">
            <span>选择图标：</span>
            <i-col v-for="(item,index) in iconList" class="oneIcon" :key="index">
            <Icon  :type="item.icon" size="30" class="oneIcon" :style="{color:color[index]}" @click="handleChangeIcon(item,index)"></Icon>
            </i-col>
        </div>
       <div class="bothColor" >
           <div class="changeColor">
            选择颜色：
           </div>
           <div class="bothColorBlock">
            <div class="bothColor" v-for="(item,index) in colorList" :key="index">
                <span class="oneColor" @click="handleChange(item)" :style="{background:item.color }"></span>
            </div>
           </div>   
        </div>

    </div>
</template>
<script>
    export default {
      name: 'testIcon',
        // props:{
        //     iconObj:{
        //         type: Object,
        //         default: false
        //     }
        // },
        data () {
            return {
                colorDefault:'#ff6f00',
                color: [],
                colorSelect:false,
                flagIconIndex:null,
                iconObj:{
                    icon:'ios-appstore-outline',
                    color:'#ef5350'
                },
                iconList:[
                    {
                        icon:'ios-add-circle',

                    },
                    {
                        icon:'ios-appstore-outline',
                    },
                    {
                        icon:'ios-archive-outline',
                    },
                ],
                colorList:[
                    {
                        color:'#ff6f00',
                    },
                    {
                        color:'#ef9a9a',
                    },
                    {
                        color:'#ef5350',
                    },
                    {
                        color:'#e53935',
                    },
                    {
                        color:'#c62828',
                    },
                    {
                        color:'#f48fb1',
                    },
                    {
                        color:'#ec407a',
                    },
                    {
                        color:'#d81b60',
                    },
                    {
                        color:'#ad1457',
                    },
                    {
                        color:'#b39ddb',
                    },
                    {
                        color:'#7e57c2',
                    },
                    {
                        color:'#5e35b1',
                    },
                    {
                        color:'#4527a0',
                    },
                    {
                        color:'#90caf9',
                    },
                    {
                        color:'#42a5f5',
                    },
                    {
                        color:'#00838f',
                    },
                    {
                        color:'#a5d6a7',
                    },
                    {
                        color:'#66bb6a',
                    },
                    {
                        color:'#43a047',
                    },
                    {
                        color:'#2e7d32',
                    },
                    {
                        color:'#dce775',
                    },
                    {
                        color:'#cddc39',
                    },
                    {
                        color:'#afb42b',
                    },
                    {
                        color:'#827717',
                    },
                    {
                        color:'#bcaaa4',
                    },
                    {
                        color:'#8d6e63',
                    },
                    {
                        color:'#6d4c41',
                    },
                    {
                        color:'#4e342e',
                    },
                    {
                        color:'#b0bec5',
                    },
                    {
                        color:'#78909c',
                    },

                ]
            };
        },
        created(){
            // console.log(this.iconObj.color,'x');
            if(this.iconObj.color){
                this.iconList.forEach((item,index)=>{
                    if(item.icon==this.iconObj.icon){
                        this.flagIconIndex = index,
                        this.colorDefault = this.iconObj.color;
                        this.$set(this.color, this.flagIconIndex,this.colorDefault);
                    }
                });
                return;
            }
            this.color[0] = this.colorDefault;
        },
        methods: {
            handleChangeIcon(item,index){
                this.flagIconIndex = index;
                let ccc = this.color.indexOf(this.colorDefault);
                this.$set(this.color, ccc, null);
                this.$set(this.color, this.flagIconIndex,this.colorDefault);
                // let ccc = this.color.indexOf('#ccc'); 
                // this.$set(this.color, ccc, 'transparent');
                // this.$set(this.color, index, '#ccc');

            },
            handleChange (item) {
                if(!this.flagIconIndex&&this.flagIconIndex!=0){
                    this.$set(this.color,0, item.color);
                    this.colorDefault = item.color;
                    return;
                }
                let ccc = this.color.indexOf(this.colorDefault);
                
                this.$set(this.color, ccc, null);
                this.$set(this.color, this.flagIconIndex, item.color);
                this.colorDefault = item.color;
            }
            
        }
    };
</script>
<style>
.oneIcon{
    display: inline-block;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 50%;
}
.bothColor{
    display: inline-block;
    margin-right: 20px;
}
.changeColor{
    width: 60px;
    height: 30px;
    text-align: center;
    float: left;
    line-height: 50px;
}
.oneColor{
    display: inline-block;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 5px;
}
.bothColor{
    margin-top: 10px;
}
.bothColorBlock{
    float:right;
    width: 750px;
}
</style>
