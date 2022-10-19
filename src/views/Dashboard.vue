<template>
  <v-container  fluid>
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
            <v-toolbar-title><strong>Filtre</strong></v-toolbar-title>
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
              </v-card-text>
              <v-text-field v-model="search" label="Marka Ara"
               dark
                flat
                 solo-inverted 
                 hide-details
                  clearable
                clear-icon="mdi-close-circle-outline"></v-text-field>
              <v-checkbox v-model="caseSensitive" 
              dark 
              hide-details 
              label="Case sensitive search">
            </v-checkbox>
            
          </v-sheet>
           <v-card-text>
              <v-treeview 
             
              :items="items" 
              :search="search" 
              :filter="filter" 
              :open.sync="open">
                <template 
                v-slot:prepend="{ item }">
                  <v-icon v-if="item.children" 
                  v-text="`mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`">
                  </v-icon>
                </template>
              </v-treeview>
            </v-card-text>
          </v-card>
          <v-card>
            <v-treeview selectable selected-color="red" :items="items1"></v-treeview>
          </v-card>

        </v-col>


        <v-item-group>
    <v-container >
      <v-row>
        <v-col 
        v-for="n in 3"
          :key="n"
          cols="12"
          md="4">
          
          <div class="wrapper">
            <div class="deneme" v-for="data in pc2" :key="data._id.$oid">
              <v-btn class="button" v-bind:href='data.link' target="_blank">
                Trendyol ->
              </v-btn >
              
              <v-tr>{{data.ram}}</v-tr>
              <br>
              <v-tr>{{data.islemcitipi}}</v-tr>
              <br>
              <v-tr>{{data.ssdkapasitesi}}</v-tr>
              <br>
              <v-tr>{{data.isletimsistemi}}</v-tr>
             
  
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
import jsonpc2 from "../../pc2.json"
export default {

 
  data: () => ({
    pc2: jsonpc2,
   
  
    page: 1,
    üst: [
      {
        text: "Home",
        disabled: false,
        href: "/",
      },
      {
        text: "Elektronik",
        disabled: false,
        href: "/dashboard",
      },
      {
        text: "Bilgisayarlar",
        disabled: false,
        href: "/dashboard",
      },


    ],
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 102, name: 'Calendar : app' },
          { id: 103, name: 'Chrome : app' },
          { id: 104, name: 'Webstorm : app' },
        ],
      },],
    items1: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
        open: [1],
      search: null,
      caseSensitive: false,
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ],
  }),
   computed: {
      filter () {
        return this.caseSensitive
          ? (item, search, textKey) => item[textKey].indexOf(search) > -1
          : undefined
      },
    },
};
</script>
  
<style>
.container {
  padding: 0px !important;
}
.container-3{
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
.text{

  height: 40px !important;
  width: 40px !important;
}
.emre{

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
.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.deneme{
  background-color: whitesmoke !important ;
  width: 100px;
  position: relative ;
  height: 100px;
  margin: 20px;
}
.button{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.text2{
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%,-50%);


}
</style>
