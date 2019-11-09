<template>
    <div class="Menu">
        <v-container fluid>
        <div class="pt-12 center-text" v-if="check()">
            <v-layout
                fill-height
                align-center
                justify-center
                ma-0
            >
                <v-progress-circular :size="50"
                    :width="5"
                    indeterminate 
                    :color="this.$vuetify.theme.dark?'':'#ce1013'"
                >
                </v-progress-circular>
            </v-layout>
        </div>
        <div v-else>
            <p class="text-center display-1 font-weight-medium">{{ menu.day }}</p>
            <MenuChips :menu="menu.breakfast" name="Breakfast" :timing="menu.timings.breakfast"/>
            <MenuChips :menu="menu.lunch"  name="Lunch" :timing="menu.timings.lunch"/>
            <MenuChips :menu="menu.snacks" name="Snacks" :timing="menu.timings.snacks"/>
            <MenuChips :menu="menu.dinner" name="Dinner" :timing="menu.timings.dinner"/>
        </div>
        </v-container>
    </div>
</template>

<script>
import MenuChips from "@/components/menu/menuchips";

export default {
    name:"Menu",
    props: {
        menu:Object
    },
    components:{
        MenuChips
    },
    methods:{
        check(){
            return Object.keys(this.menu).length==0 || this.menu == undefined;
        }
    }

}
</script>

<style>

</style>