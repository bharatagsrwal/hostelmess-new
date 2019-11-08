<template>
    <div :class="[name, 'pb-2']">
        <div class="text-left subtitle-2">{{ name }}</div>
       <v-chip-group
        multiple
        column
        >
        <v-chip v-for="tag in menu" :key="tag" pill>
            <v-avatar left>
              <img :src="image(tag)" alt="trevor">
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
            console.log(pic);
            pic =  pic.split(' ').join('_')
            
            console.log(pic);
          try{
                return require('@/assets/foodImages/'+pic+'.jpg')
          }catch(e){
               return require('@/assets/logo.png')
          }
      },
    }

}
</script>

<style>

</style>