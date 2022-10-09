<template>
  <v-card
    color="grey lighten-4"
    flat
    height="50px"
    tile
  >
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-img
    class="mx-2"
    src="https://www.freelogovectors.net/wp-content/uploads/2022/06/cimri-logo-freelogovectors.net_.png"
    max-height="50"
    max-width="50"
    contain
  ></v-img>

      <v-spacer></v-spacer>
      <v-btn
      class="mx-2"
      fab
      dark
      small
      color="orange"
    >
      <v-icon dark>
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
  <v-btn to="/login">
    <v-icon>mdi-account-circle</v-icon>
  </v-btn>
    </v-toolbar>
  
  </v-card>
  
</template>