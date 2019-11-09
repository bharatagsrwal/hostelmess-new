<template>
<div class="AllMenu">
    <v-tabs
    v-model="tab"
      color="#ce1013"
      background-color="transparent"
      centered
    >
      <v-tabs-slider color="#ce1013"></v-tabs-slider>
      <v-tab
        v-for="(i,index) in days"
        :key="index"
      >
        {{ i }}
      </v-tab>
    </v-tabs>

    <v-tabs-items  class="transparent" v-model="tab" >
      <v-tab-item
        v-for="(i,index) in days"
        :key="index"
      >
        <div class="tabs">
            <Menu :menu="(menuData[i]==null || menuData[i]==undefined)?{}:menuData[i]"/>
        </div>
      </v-tab-item>
    </v-tabs-items>
</div>   
</template>

<script>
import Menu from '@/components/common/menu';
export default {
    name:"AllMenu",
    components:{
        Menu,
    },
    data:()=>({
        tab:0,
        menuData:{},
        days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    }),
    methods:{

    dataLoad(){
      this.menuData = {};
      fetch('https://hostelmess.iambharat.tk/api/all').then(res=>res.json()).then(data=>{
        this.menuData = data;
      }).catch(e=>{
        console.log(e)
      })

    }
  },
   mounted(){
      this.dataLoad()
  }
}
</script>

<style>
.v-tabs-bar.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes) .v-slide-group__prev{
    display: none !important;
}
</style>