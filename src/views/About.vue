<template>
  <div class="about">
    <h1>About</h1>
    <div class="text-center pt-12">
      <v-img
              :src="require('@/assets/about.svg')"
              :lazy-src="require('@/assets/about.svg')"
              max-height="150"
              contain
              class="transparent mb-5"
            >
            <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
            </v-img>
            <p>A Project Made with <v-icon>mdi-heart</v-icon> by <a href="https://iambharat.tk" target="_blank">Bharat Agarwal</a></p>
    </div>
  </div>
</template>
