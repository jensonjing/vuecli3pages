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
  },
  methods:{
    go(){
      window.location.href="/page1.html"
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