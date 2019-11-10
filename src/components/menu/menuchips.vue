<template>
    <div :class="[name, 'pb-2']">
        <div class="text-left subtitle-2">{{ name }} <span class="grey--text text--darken-1">({{ timing }})</span></div>
       <v-chip-group
        multiple
        column
        >
        <v-chip v-for="(tag,index) in menu" :key="index" :href="'https://www.google.com/search?q='+tag" target="_blank" pill>
            <v-avatar left>
              <img :src="image(tag)" :alt="tag">
            </v-avatar>
          {{ tag }}
        </v-chip>
      </v-chip-group>
      
    </div>
</template>

<script>
export default {
    name:"MenuChips",
    props:{
        menu:Array,
        name:String,
        timing:String
    },
    methods:{
        image(pic) {
            pic =  pic.split(' ').join('_');
          try{
                return require('@/assets/foodImages/'+pic+'.jpg');
          }catch(e){
               return require('@/assets/logo.png');
          }
      },
    }

}
</script>

<style>

</style>