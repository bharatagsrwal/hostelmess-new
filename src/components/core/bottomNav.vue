<template>
<v-card class="white hidden-md-and-up" flat>
  <v-bottom-navigation
    :value="activeBtn"
    app
    grow
  > 
    
    <v-btn
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        class="ml-0"
        style="text-transform: capitalize;" 
        text
        color="#ce1013"
        @click="goTO($event, link)"
    >
        <span>{{ link.text }}</span>
        <v-icon>{{ link.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</v-card>
</template>

<script>
 import {
    mapGetters,
  } from 'vuex'
  export default {
    name:"BottomNav",
    data () {
      return {
        activeBtn: '/home',
      }
    },
    computed: {
      ...mapGetters(['links'])
    },
    methods: {
      goTO (e, item) {
            e.stopPropagation()
            if (item.to || !item.href) return
            this.$vuetify.goTo(item.href)
        },
    }
  }
</script>

