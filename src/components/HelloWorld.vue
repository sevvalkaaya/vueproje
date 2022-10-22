<template>
  <v-container>
    <v-row>
      <v-col sm="12">
        <v-row>
          <v-col cols="8" sm="8">
            <v-card class="pa-2" outlined tile>
              <v-carousel id="karosel">
                <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
                  transition="fade-transition"></v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>


          <v-col cols="4" sm="4">
            <v-card class="pa-2" tile>
              <v-img src="https://cdn.cimri.io/static-component/component_W6VG92022-10-20.jpg"></v-img>
            </v-card>
            <v-card class="pa-2" tile>
              <v-img src="https://cdn.cimri.io/static-component/component_c5wKl2022-10-17.jpg"></v-img>
            </v-card>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col sm="2">
            <v-card class="pa-2" outlined tile>
              <v-img src="https://cdn.cimri.io/static-component/component_szksJ2022-07-29..png"></v-img>
            </v-card>
          </v-col>
          <v-col sm="2">
            <v-card class="pa-2" outlined tile>
              <v-img src="https://cdn.cimri.io/static-component/component_D0EhT2022-03-10..png"></v-img>
            </v-card>
          </v-col>
          <v-col sm="2" >
            <v-card class="pa-2" outlined tile>
              <v-img src="https://cdn.cimri.io/static-component/component_0Q30j2022-06-21..png"></v-img>
            </v-card>
          </v-col>
          <v-col sm="2" >
            <v-card class="pa-2" outlined tile>
              <v-img src="https://cdn.cimri.io/static-component/component_8xojS2022-03-10..png"></v-img>
            </v-card>
          </v-col>
          <v-col sm="2" >
            <v-card class="pa-2" outlined tile>
              <v-img src="https://cdn.cimri.io/static-component/component_jArpo2022-07-29..png"></v-img>
            </v-card>
          </v-col>
          <v-col sm="2" >
            <v-card class="pa-2" outlined tile>
              <v-img src="https://cdn.cimri.io/static-component/component_9QM2e2022-07-29..png"></v-img>
            </v-card>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<style>
#karosel {
  width: 800px;
}

#kont {
  background-color: black;
}
</style>

<script>
export default {
  data() {
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
