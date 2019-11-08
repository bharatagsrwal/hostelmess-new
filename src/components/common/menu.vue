<template>
    <div class="Menu">
        <v-container fluid>
        <div class="pt-12" v-if="Object.keys(menu).length==0">
            <v-progress-circular
            class=""
            :size="50"
            :width="5"
            color="purple"
            indeterminate
            ></v-progress-circular>
        </div>
        <div v-else>
            <p class="text-center display-1 pt-5 font-weight-medium">{{ menu.day }}</p>
            <MenuChips :menu="menu.breakfast.sort((a, b) => a.length - b.length)" name="Breakfast" :timing="menu.timings.breakfast"/>
            <MenuChips :menu="menu.lunch.sort((a, b) => a.length - b.length)"  name="Lunch" :timing="menu.timings.lunch"/>
            <MenuChips :menu="menu.snacks.sort((a, b) => a.length - b.length)" name="Snacks" :timing="menu.timings.snacks"/>
            <MenuChips :menu="menu.dinner.sort((a, b) => a.length - b.length)" name="Dinner" :timing="menu.timings.dinner"/>
        </div>
    </v-container>
    </div>
</template>

<script>
import MenuChips from "@/components/menu/menuchips";

export default {
    name:"Menu",
    props: {
        menu:Object,
        isLoading:Boolean
    },
    components:{
        MenuChips
    }

}
</script>

<style>

</style>