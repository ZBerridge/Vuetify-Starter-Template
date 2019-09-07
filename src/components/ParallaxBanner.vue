<template>
  <v-parallax
    dark
    :src="banner.img"
    :alt="banner.alt"
    :height="banner.height"
  >
    <v-row
      align="center"
      justify="center"
    >
      <h1 class="display-2 font-weight-thin mb-4">{{banner.title}}</h1>
      <h4 class="subheading">{{banner.subtitle}}</h4>
    </v-row>
  </v-parallax>
</template>
<script>
export default {
    props: [
      'banner'
      ]
}
</script>