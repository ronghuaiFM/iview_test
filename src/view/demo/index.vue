<template>
  <div id="demo">
    <div class="home-contain" @click="$router.push('test1')">
      test1
    </div>
    <div class="home-contain" @click="$router.push('testIcon')">
      testIcon
    </div>
    <!-- <div class="home-contain" @click="$router.push('testIcon')">
      testIcon
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      
    }
  },
}
</script>
<style lang="less" scoped>
  #demo{
    div{
    display: inline-block;
    border: 1px solid #ccc;
    width: 100px;
    text-align: center;
    margin: 30px;
    cursor: pointer;
    &:hover{
      background-color: blue;
    }
  }
  }

</style>