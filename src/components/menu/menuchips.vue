<template>
    <div :class="[name, 'pb-2']">
        <div class="text-left">{{ name }}</div>
       <v-chip-group
        multiple
        column
        >
        <v-chip v-for="tag in menu" :key="tag" pill>
            <v-avatar left>
              <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
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
    }

}
</script>

<style>

</style>