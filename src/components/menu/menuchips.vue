<template>
    <div :class="name">
        <p class="text-left font-weight-medium">{{ name }}</p>
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