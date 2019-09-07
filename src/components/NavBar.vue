<template>
    <v-layout>
        <v-navigation-drawer
        v-model="drawer"
        app
        >
        <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" :to="item.link">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-content>
                    <v-list-tile-title>
                        {{ item.title }}
                    </v-list-tile-title>
                </v-list-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>
        <v-app-bar
        app
        color="teal darken-4"
        dark
        >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Dart Scorekeeper</v-toolbar-title>
        </v-app-bar>
    </v-layout>
</template>
<script>
export default {
    data: () => ({
      drawer: null,
      items: [
          { title: 'Home', link: '/', icon: 'mdi-home' },
          { title: 'About', link: '/about', icon: 'mdi-account-circle' },
          { title: 'Login', link: '/login', icon: 'mdi-login' }
      ],  
    }),
}
</script>