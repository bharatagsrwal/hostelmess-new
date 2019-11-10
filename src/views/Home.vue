<template>
  <div class="home">
    <Menu :menu="menuData"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/common/menu';
export default {
  name: 'home',
  components: {
    Menu
  },
  data: ()=>({
    menuData:{},
    error:""
  }),
  methods:{
    dataLoad(){
      this.menuData = {};
      fetch('https://hostelmess.iambharat.tk/api/today').then(res=>res.json()).then(data=>{
        this.menuData = data;
      }).catch(e=>{
        // console.log(e)
        this.error = e;
      })

    }
  },
   mounted(){
      this.dataLoad()
  }
}
</script>
