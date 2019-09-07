<template>
  <parallaxBanner :banner="banner"/>
</template>
<script>
import parallaxBanner from '../components/ParallaxBanner';

export default {
  data: () => ({
      banner: {
        img: "http://api.zberridge.com/wp-content/uploads/2018/11/Red-Bikini-Top.jpg",
        alt: "Tessa Fowler Bikini",
        height: "500",
        title: "The Goddess, Tessa Fowler",
        subtitle: "Seriously, look at those beauties"
      },
    }),
    components: {
    parallaxBanner,
  },
};

</script>