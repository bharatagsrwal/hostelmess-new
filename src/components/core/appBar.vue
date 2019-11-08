<template>
  <v-app-bar
      app
      fixed
      :color="this.$vuetify.theme.dark?'':'#ce1013'"
      dark
    >
      <v-toolbar-title style="font-size:130%">Hostel <span class="font-weight-bold" :style="this.$vuetify.theme.dark?'color:red':''">Mess</span> </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            class="ml-2 hidden-sm-and-down"
            style="text-transform: capitalize;" 
            text
            @click="goTO($event, link)"
        >
            {{ link.text }}
      </v-btn>
      <PushNotifications />
      <v-btn icon v-on:click="darkMode" class="ml-2">
        <v-icon v-if="this.$vuetify.theme.dark">mdi-brightness-5</v-icon>
        <v-icon v-else>mdi-brightness-4</v-icon>
      </v-btn> 
    </v-app-bar>
</template>

<script>
import PushNotifications from "@/components/otherRequired/pushNotificationButton"
 import {
    mapGetters
  } from 'vuex';
export default {
  name:"AppBar",
  components:{
    PushNotifications
  },
    data:()=>({

    }),
    computed: {
      ...mapGetters(['links'])
    },
    methods: {
        darkMode(){
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
        goTO (e, item) {
            e.stopPropagation()
            if (item.to || !item.href) return
            this.$vuetify.goTo(item.href)
        },
    }
}
</script>

<style>

</style>