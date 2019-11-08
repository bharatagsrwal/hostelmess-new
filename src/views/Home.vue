<template>
  <div class="home">
    <Menu :menu="menuData" :isLoading="isLoading"/>
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
    isLoading: true,
    menuData:{}
  }),
  methods:{
    dataLoad(){
      this.menuData = {};
      fetch('https://hostelmess.iambharat.tk/api/today').then(res=>res.json()).then(data=>{
        this.menuData = data;
        console.log(data);
        this.isLoading = false;
      })

    }
  },
   mounted(){
      this.dataLoad()
  }
}
</script>
