<template>
  <v-card
    color="grey lighten-4"
    flat
    height="50px"
    tile
  >
    <v-toolbar  dense>
      <v-btn>   <v-row justify="justify-space-between">
    
    <v-menu offset-y
      transition="slide-x-transition"
      bottom
      right
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          
          class="white"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Menü
        </v-btn>
      </template>

      <v-list id="liss">
        <v-list-item
        
          v-for="(item, i) in items"
          :key="i"
        > 
        <v-btn to="/dashboard"><v-list-item-title>{{ item.title }}</v-list-item-title></v-btn>
          
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
  </v-btn>
     
<v-btn text
color="white" 
to="/">  <v-img
    class="mx-2"
    src="https://www.freelogovectors.net/wp-content/uploads/2022/06/cimri-logo-freelogovectors.net_.png"
    max-height="50"
    max-width="50"
    contain
  ></v-img></v-btn>
    

      <v-spacer></v-spacer>
      <div class="arama">
        <label for="search">
    Search
    <input
      id="search"
      v-model="term"
      @keypress.enter="search(term)"
    />
  </label>
    
   
<v-btn class="arama-butonu"
text color="black">
  Ara
</v-btn>
</div>
    <v-btn to="/laptop"
      class="mx-2"
      fab
      dark
      small
      color="orange"
    >
      <v-icon dark >
        mdi-map
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="green"
    >  
     <v-icon dark>
        mdi-brightness-percent
      </v-icon>
    </v-btn>
    <v-btn 
      class="mx-2"
      fab
      dark
      small
      color="blue"
    >  
     <v-icon dark>
        mdi-cash
      </v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="red"
    >  
     <v-icon dark>
       mdi-tag
      </v-icon>
    </v-btn>
      <v-btn icon color="warning"
              fab
              dark> 
    
        <v-icon>mdi-dots-vertical</v-icon>
  </v-btn >
  <v-btn to="/login2">
    <v-icon>mdi-account-circle</v-icon>
  </v-btn>
    </v-toolbar>
  
  </v-card>
  
</template>


<style>
.arama{
 
  position:relative; 
  right:20%; 
top:-7%;
width:30%;

}
.arama-butonu{
  position: absolute;
top: -1px;

left: 440px;

}
#liss{
  
  z-index: 999;
}

</style>
<script >


  export default {
  
    data: () => ({
      items: [
        { title: 'Elektronik' },
        { title: 'Ev,Yaşam' },
        { title: 'Anne,Bebek' },
        { title: 'Saat,Moda' },
        { title: 'Saat,Moda' },
        { title: 'Kitap,Müzik' },
        { title: 'Spor,Outdoor' },
        { title: 'Sağlık,Bakım' },
      ],
    }),
  }
</script>