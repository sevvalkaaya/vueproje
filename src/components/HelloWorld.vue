<template>
  <v-container>
    <v-carousel id="karosel">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  </v-container>
</template>


<style>
#karosel{
  width: 800px;
}
</style>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.cimri.io/promo/1665043877010.png',
          },
          {
            src: 'https://cdn.cimri.io/promo/1664866486099.png',
          },
          {
            src: 'https://cdn.cimri.io/promo/1664866544652.png',
          },
          {
            src: 'https://cdn.cimri.io/promo/1664866593790.png',
          },
        ],
      }
    },
  }
</script>
