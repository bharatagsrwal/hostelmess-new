<template>
<div class="searchbyDate">
  <h1>Choose Date</h1>
  <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
          class="pt-4"
            v-model="date"
            label="Choose Date"
            readonly
            outlined
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker color="#ce1013" v-model="date" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="postDate($refs.dialog)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
      <div v-if="notAvailable" class="text-center">
        <p>Select a Date</p>
      </div>
      <Menu v-else :menu="menuData"/>
</div>
  
</template>

<script>

import Menu from '@/components/common/menu';
export default {
  name:"SearchbyDate",
  components: {
    Menu
  },
   data: () => ({
      date: null,
      modal: false,
      menuData:{},
      notAvailable:true,
      error:"",
    }),
    methods:{
      postDate(event){
        this.notAvailable = false;
        event.save(this.date)
        this.menuData = {};
        fetch('https://hostelmess.iambharat.tk/api/byDate/'+this.date).then(res=>res.json()).then(data=>{
          this.menuData = data;
        }).catch(e=>{
          this.error = e;
        })
      }
    }
}
</script>

<style>

</style>