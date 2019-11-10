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
        <v-img
              :src="check()"
              :lazy-src="check()"
              max-height="150"
              contain
              class="transparent mb-5"
            >
            <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
            </v-img>
        <p>{{ error }}</p>
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
      date: new Date().toISOString().substr(0, 10),
      modal: false,
      menuData:{},
      notAvailable:true,
      error:"Waiting for instructions...",
      ty:"",
    }),
    methods:{
      check(){
        if(this.ty==null || this.ty.length ==0){
          console.log(this.ty)
          console.log("NULL")
          return require("@/assets/waiting.svg")
        }else{
          console.log(this.ty)
          console.log("NOT NULL")
          return require("@/assets/something.svg")
        }
      },
      postDate(event){
        this.ty = ""
        this.notAvailable = false;
        this.menuData = {};
        event.save(this.date)
        try{
          fetch('https://hostelmess.iambharat.tk/api/byDate/'+this.date).then(res=>res.json()).then(data=>{
            console.log(data);
            if(data)
            this.menuData = data;
          }).catch(e=>{
            this.error = "Something went wrong, please try again or check your Internet Connection";
            this.notAvailable = true;
            this.ty = e;
          })
        }catch(e){
          this.error = "Failed to fetch Data, Check your Internet connection and try again";
          this.notAvailable = true;
          this.ty = e;
        }
      }
    }
}
</script>

<style>

</style>