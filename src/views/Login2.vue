<template>
    <v-card>
      <v-toolbar
        color="blue"
        dark
        flat
        prominent
      >
    
        <template v-slot:extension>
          <v-tabs
            v-model="tabs"
            centered
          >
          <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
  
      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card flat>
            <v-app>
<div class= "backgruond "></div>
<v-main class="d-flex justify-center align-center">
<v-col cols-="10" lg="4" class="mx-auto">
<v-card class="pa-4">
<div class="text-overline mb-4">
<template>
    <v-container
    class="fill-height"
    fluid
    style="min-height: 100px"
  >
    <v-fade-transition mode="out-in">
      <v-row rows="100">
        <v-col cols="20">
          <v-card>
            <v-card-text>
        <v-card-text class="text--primary">
            <p class="text-h5 text--primary">
        Neden Üye Olmalıyım?
      </p>
      <p  class="text-h15 text--primary">
    Fiyat alarmı kur ve değişimlerden haberdar ol
     Favori listelerini oluştur
      Oluşturduğun listeleri paylaş</p>
  
    </v-card-text>
    </v-card-text>
            <v-img id="ahtopot"

              src="@/assets/indir.png"
              height="100"
              contain
              class="white"
            ></v-img>
          
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>

</template>
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
         
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>

            <v-card-title class="text-h5">
              An awesome title
            </v-card-title>
            <v-card-text>
              <p>
                Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
              </p>
  
              <p>
                Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
              </p>
  
              <p class="mb-0">
                Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>

            <v-card-title class="text-h5">
              An even better title
            </v-card-title>
            <v-card-text>
              <p>
                Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.
              </p>
  
              <p class="mb-0">
                Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </template>
 <style> 
 #ahtopot{
    margin-top: -125px;
  margin-left: 250px;
 }

</style>
 <script>
  export default {
    data () {
        
      return {
    
        tabs: null,  
         items: [
        'Üye Ol', 'Giriş Yap'
      ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>