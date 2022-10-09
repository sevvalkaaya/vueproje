<template>
    <v-card>
      <v-toolbar
        color="cyan"
        dark
        flat
      >
        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            align-with-title
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
  
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
  
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card flat>
            <v-app>
<div class= "backgruond "></div>
<v-main class="d-flex justify-center align-center">
<v-col cols-="10" lg="4" class="mx-auto">
<v-card class="pa-4">
<div class=" text-center ">
<v-avatar size="100" color="indigo lighten-4">
<v-icon size="40" color="indigo">mdi-account</v-icon>
</v-avatar>
    <h2 class="indigo-text">Üye Girişi</h2>
</div>
<v-form>
    <v-card-text>
        <v-text-field
        type="email"
        label="Email"
        placeholder="Email"
        prepend-inner-icon="mdi-account"
        />
        <v-text-field
        type="password"
        label="Password"
        placeholder="Password"
        prepend-inner-icon="mdi-key"
        append-icon="mdi-eye"
        />
        
    </v-card-text>
</v-form>
</v-card>
</v-col>
</v-main>
            </v-app>
            
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </template>

<script>
export default {
  data () {
    return {
      tab: null,
      items: [
        'Üye Ol', 'Giriş Yap'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>