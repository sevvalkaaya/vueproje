<template>
  <v-container fluid>
    <v-card height="150px" til color="#3853D8" flat class="d-flex align-center justify-center" dark>

      <v-row>

        <v-col cols="12" sm="12">
          <h4 class="text-center">Dizüstü Bilgisayarlar</h4>
        </v-col>
        <v-col cols="12" sm="12">
          <v-breadcrumbs :items="üst" class="justify-center mt-n7" dark>
            <template v-slot:divider>
              <v-icon color="#7C92FE">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </v-card>

    <v-card tile class="mx-16 mt-n5 card1" color="white">
      <v-row>
        <v-col cols="12" sm="5" md="3" class="pr-0">
          <v-card height="250px" tile flat color="white">
            <v-row>
              <v-col cols="12" sm="6.9" class="pl-8 pt-7.9">
                <h3 class="black--text mt-5">16 GB Ram Dizüstü Bilgisayarlar</h3>

              </v-col>
              <v-col cols="12" sm="6" md="10">
                <v-img src="@/assets/laptop2.png" max-height="400" max-width="400" contain class="mt-n6"></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="5" md="3" class="pr-0">
          <v-card height="250px" tile flat color="White">
            <v-row>
              <v-col cols="12" sm="6.9" class="pl-8 pt-7.9">
                <h3 class="Black--text mt-5">Casper Dizüstü Bilgisayarlar</h3>

              </v-col>
              <v-col cols="12" sm="10" md="10">
                <v-img src="@/assets/casper.png" max-height="175" max-width="400" contain class="mt-n6"></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="5" md="3" class="pr-0">
          <v-card height="250px" tile flat color="white">
            <v-row>
              <v-col cols="12" sm="6.9" class="pl-8 pt-7.9">
                <h3 class="black--text mt-5">Hızlı ve Hafif Bilgisayarlar</h3>

              </v-col>
              <v-col cols="12" sm="8" md="10">
                <v-img id="laptop1" src="@/assets/laptop4.png" max-height="400" max-width="400" contain class="mt-n6">
                </v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="5" md="3" class="pr-0">
          <v-card height="250px" tile flat color="white">
            <v-row>
              <v-col cols="12" sm="6.9" class="pl-8 pt-7.9">
                <h3 class="black--text mt-5">2500-4000 TL Dizüstü Bilgisayar</h3>

              </v-col>
              <v-col cols="12" sm="6" md="10">
                <v-img src="@/assets/laptop5.png" max-height="400" max-width="400" contain class="mt-n6"></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>

        <v-col cols="12" sm="3" class="mt-n6 pr-0">
          <v-toolbar flat outlined>
            <label for="search">
              Search
              <input id="search" v-model="term" @keypress.enter="search(term)" />
            </label>
            <v-spacer></v-spacer>
            <v-divider vertical></v-divider>
            <v-btn icon class="ml-1">
              <v-icon color="#3853D8"> mdi-sync </v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" md="2" class="mt-n6 px-0">
          <v-toolbar flat outlined>
            <v-toolbar-title>
              <span>En Düşük Fiyat</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" md="2" class="mt-n6 px-0">
          <v-toolbar flat outlined>
            <v-toolbar-title>
              <span>En Yüksek Fiyat</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" md="2" class="mt-n6 px-0">
          <v-toolbar flat outlined>
            <v-toolbar-title>
              <span>Fiyatı Düşenler</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" md="2" class="mt-n6 px-0">
          <v-toolbar flat outlined>
            <v-toolbar-title>
              <span>En Yeni Ürünler</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-col>


        <div class="container-3">
          <v-col cols="3" class="py-0 pr-0 mt-n3">

            <v-card flat outlined tile>
              <v-toolbar flat>
                <v-icon color="black" class="mr-2">msi-chevron-down</v-icon>
                <strong>Fiyat Aralığı</strong>
                <v-spacer></v-spacer>
                <v-icon color="grey" small>mdi-close</v-icon>
              </v-toolbar>
              <v-toolbar flat>
                <v-text-field placeholder="50" filled rounded dense class="mx-2"></v-text-field>
                <v-text-field placeholder="1900" filled rounded dense class="mx-2"></v-text-field>
              </v-toolbar>
              <v-range-slider color="blue" max="40" min="-30"></v-range-slider>
            </v-card>

            <v-card class="mx-auto" max-width="500">
              <v-sheet class="pa-4 primary lighten-2">
                <v-card-text>
                  <h1 class="white--text mt-1">Markalar</h1>
                  <p v-for="filter in filters" :key="filter" @click="() => filterDatas(filter)">
                    {{filter}}

                  </p>
                </v-card-text>
              </v-sheet>

              <v-card-text>

              </v-card-text>
            </v-card>

            <v-card>

            </v-card>
          </v-col>



          <v-item-group>
            <v-container>
              <v-row id="rowww">
                <v-col v-for="n in 1" :key="n" cols="12" md="4">

                  <div class="wrapper">
                    <div class="deneme" v-for="data in pc2" :key="data._id.$oid">
                      <v-img id="foto" :src="data.UrunGorseli"></v-img>
                      <v-btn rounded class="button" v-bind:href='data.link' target="_blank">
                        <v-img :style="{ 'width': 100 + 'px' }" src="https://cdn.cimri.io/static-component/component_szksJ2022-07-29..png"></v-img>
                      </v-btn>
                      <v-btn rounded class="buttonn11" v-bind:href='data.link' target="_blank">
                        <v-img :style="{ 'width': 100 + 'px' }" src="https://cdn.cimri.io/static-component/component_ywDdM2022-07-29..png"></v-img>
                      </v-btn>
                      <v-btn rounded class="buttonvatan" v-bind:href='data.link' target="_blank">
                        <v-img :style="{ 'width': 100 + 'px' }" src="https://www.freelogovectors.net/wp-content/uploads/2018/02/vatan-computer-logo.png"></v-img>
                      </v-btn>
                      <v-btn rounded class="buttontek" v-bind:href='data.link' target="_blank">
                        <v-img :style="{ 'width': 100 + 'px' }" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Teknosa_logo.svg/2560px-Teknosa_logo.svg.png"></v-img>
                      </v-btn>
                      <p id="baslik">{{data.Marka}} {{data.islemcitipi}} {{data.islemciModeli}} {{data.ram}} {{data.ssdkapasitesi}} {{data.isletimsistemi}}</p>
                      <p id="fiyat">{{data.Fiyat}}</p>
                      
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
        </div>


        <v-col cols="12" sm="3" class="mt-n3 pr-0 pb-0">
          <v-toolbar flat outlined> </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n3 px-0 pb-0">
          <v-toolbar flat outlined>
            <v-btn icon class="mr-1">
              <v-icon color="grey">mdi-chevron-up</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n3 px-0 pb-0">
          <v-toolbar flat outlined class="text-center">
            <v-pagination v-model="page" :length="4"></v-pagination>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n3 pl-0 pb-0">
          <v-toolbar flat outlined>
            <v-btn icon class="mr-1">
              <v-icon color="grey">mdi-chevron-down</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-card>
    <v-card color="#EFF0F2" height="250px" tile flat dark class="d-flex align-center justify-center mt-n10 card2">

    </v-card>
  </v-container>

</template>
  
<script>



import jsonpc2 from "../../yenibilgi.json"

export default {
  props: [
    'filterDatas',
    'search',
    'filteredDatas',

  ],


  data: () => ({
    pc2: jsonpc2,
    term: '',
    str: '',
    type: '',
    filters: [
      "Apple M1",
      "Intel Core i5",

    ]

  }),
  computed: {
    filteredDatas: {
      get() {
        return this.pc2
      },
      set() {
        this.pc2 = jsonpc2
        const results = this.pc2.filter((data) => {
          if (this.type === "filter") {
            return data.islemcitipi === this.str
          } else {
            return data.islemcitipi.toLowerCase().includes(this.str.toLowerCase())
          }
        })
        this.pc2 = results
      }
    }
  },
  methods: {
    filterDatas(catName) {
      this.resetDatas()
      if (catName !== 'All') {
        this.pc2 = this.pc2.filter((data) => {
          return data.islemcitipi == catName

        })

      }
    },
    search(term) {
      this.resetDatas()
      this.pc2 = this.pc2.filter((data) => {
        return data.islemcitipi.toLowerCase().includes(term.toLowerCase())
      })
    },
    resetDatas() {
      this.pc2 = jsonpc2
    }
  }
};


</script>
  
<style>
#rowww {
  width: 3000px;
}

.container {
  padding: 0px !important;
}

.container-3 {
  display: flex;
}

.v-btn.withoutupercase {
  text-decoration: none;
}

.v-chip.v-size--default {
  border-radius: 50px !important;
  font-size: 14px !important;
  height: 40px !important;
  width: 40px !important;
}
.text {

  height: 40px !important;
  width: 40px !important;
}

.emre {

  z-index: -1;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.card1 {
  z-index: 0;
}

.card2 {
  z-index: 1;
}

.wrapper {

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;

}

.data-inner {
  position: relative;
  padding: 5px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);

}

.data-image-wrap .image {
  width: 100%;

}

.deneme {
  background-color: whitesmoke !important;
  width: 200px;
  position: relative;
  height: 200px;
  margin: 20px;
}

.button {
  margin-left: 115px;
  transform: translate(-50%, -50%);
}
.buttonn11{
  position: absolute;
  left: 60%;
  bottom: 33%;
  transform: translate(-50%, -50%);
}
.buttontek{
  position: absolute;
  left: 92%;
  bottom: 33%;
  transform: translate(-50%, -50%);
}
.buttonvatan{
  position: absolute;
  left: 76%;
  bottom: 33%;
  transform: translate(-50%, -50%);
}
.text2 {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);


}

#baslik {
  margin-left: 100px;
}

#fiyat {
  margin-left: 100px
}

#foto {
  height: 300px;
  width: 300px;
}
</style>
