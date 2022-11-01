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
                    <h1 class="white--text mt-1">işlemci tipi</h1>
                    <p v-for="filter in filters6" :key="filter" @click="() => filterDatas6(filter)">
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
                      <div class="deneme" v-for="data in n11" :key="data._id.$oid">
                        <v-img id="foto" :src="data.UrunGorseli"></v-img>
<p id="baslik1"> marka:
{{data.Marka}} <br/>işlemci tipi: {{data.islemcitipi}}  <br/>işlemci modeli: {{data.islemciModeli}}  <br/>ram:{{data.ram}} <br/>ssd kapasitesi:{{data.ssdkapasitesi}} <br/>isletim sistemi:{{data.isletimsistemi}}</p>
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
  
  
  
  import jsonpc2 from "../../n11.json"
  
  export default {
    props: [
      'filterDatas6',
      'search',
      'filteredDatas',
  
    ],
  
  
    data: () => ({
      n11: jsonpc2,
      term: '',
      str: '',
      type: '',
      filters6: [
        "Apple M1",
        "Intel Core i5",
  
      ]
  
    }),
    // computed: {
    //   filteredDatas: {
    //     get() {
    //       return this.n11
    //     },
    //     set() {
    //       this.n11 = jsonpc2
    //       const results = this.n11.filter((data) => {
    //         if (this.type === "filter") {
    //           return data.islemcitipi === this.str
    //         } else {
    //           return data.islemcitipi.toLowerCase().includes(this.str.toLowerCase())
    //         }
    //       })
    //       this.n11= results
    //     }
    //   }
    // },
    methods: {
      filterDatas6(catName) {
        this.resetDatas()
        if (catName !== 'All') {
          this.n11 = this.n11.filter((data) => {
            return data.islemcitipi == catName
  
          })
  
        }
      },
      search(term) {
        this.resetDatas()
        this.n11 = this.n11.filter((data) => {
          return data.islemcitipi.toLowerCase().includes(term.toLowerCase())
        })
      },
      resetDatas() {
        this.n11 = jsonpc2
      }
    }
  };
  
  
  </script>
  <style>

#baslik1{
  margin-left: 320px;
  margin-top:-300px;
}
#fiyat {
  margin-left: 100px;
  margin-top:100px;
}


</style>