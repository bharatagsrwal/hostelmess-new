<template>
    <v-container fluid class="text-center">
        <div class="pt-12" v-if="Object.keys(menu).length==0">
            <v-progress-circular
        class=""
      :size="50"
      :width="5"
      color="purple"
      indeterminate
    ></v-progress-circular>
        </div>
        <h1 v-else>
            <p class="text-center display-1 pt-5 font-weight-medium">{{ menu.day }}</p>
            {{ menu }}</h1>
    </v-container>
</template>

<script>
export default {
    name:"Menu",
    props: {
        menu:Object,
        isLoading:Boolean
    },

}
</script>

<style>

</style>