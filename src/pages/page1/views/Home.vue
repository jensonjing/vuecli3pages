<template>
  <div class="home">
    <button @click="go">去项目2</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { getData } from '@/server/https'

export default {
  name: 'home',
  components: {
    
  },
  methods:{
    go(){
      window.location.href="/page2.html"
    },
    async getData(){
      const {code, data, msg} = await getData({
        code: '123'
      })
      if (code === 200) {

      } else {
        console.log('获取信息失败')
      }
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
