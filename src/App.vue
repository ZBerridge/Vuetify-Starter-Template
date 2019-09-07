<template>
  <v-app id="inspire">
    <nav-bar></nav-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    components: {
      'nav-bar': NavBar,
      'footer-component': Footer
    },
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>