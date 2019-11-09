<template>
  <v-app>
    <AppBar />
    <v-content>
      <v-container fluid>
        <v-slide-y-reverse-transition>
          <router-view />
      </v-slide-y-reverse-transition>
      </v-container >
    </v-content>
    <BottomNav/>
  </v-app>
</template>

<script>
import AppBar from './components/core/appBar';
import BottomNav from './components/core/bottomNav';


export default {
  name: 'App',

  components: {
    AppBar,
    BottomNav
  },

  data: () => ({
    //
  }),
  beforeCreate(){
      this.$vuetify.theme.dark  = localStorage.getItem('darkMode');
  }
};
</script>
<style>

</style>
