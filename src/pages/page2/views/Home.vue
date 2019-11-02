<template>
  <div class="home">
    <button @click="go">去项目1</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  },
  mounted(){
    this.getData()
  },
  methods:{
    go(){
      window.location.href="/page1.html"
    },
    getData(){
      const params = {
        aa:3
      };
      this.$https.getInfo(params).then(res=>{
        console.log(res);
      });
    }
  }
}
</script>

<style lang="scss">
  .home{
    >button{
      font-size: px2rem(14px);
    }
  }
</style>