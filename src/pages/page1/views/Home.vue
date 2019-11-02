<template>
  <div class="home">
    <button @click="go">去项目2</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  },
  methods:{
    go(){
      window.location.href="/page2.html"
    },
    getData(){
      let params = {
        aa:1
      };
      this.$https.getData(params).then(res=>{
        console.log(res);
      });
    }
  },
  mounted(){
    this.getData();
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
