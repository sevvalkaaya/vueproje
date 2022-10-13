<template>
  <v-card>
    <v-toolbar color="blue" dark flat prominent>

      <template v-slot:extension>
        <v-tabs v-model="tabs" centered>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      
      
      
      <v-tab-item>
        <v-card flat>
          <v-app>
            <div class="backgruond "></div>
            <v-main class="d-flex justify-center align-center">
              <v-col cols-="10" lg="4" class="mx-auto">
                <v-card class="pa-4">
                  <div class="text-overline mb-4">
                    <template>
                      <v-container class="fill-height" fluid style="min-height: 400px">
                        <v-fade-transition mode="out-in">
                          <v-row rows="100">
                            <v-col cols="20">
                              <v-card style="min-height: 200px">
                                <v-card-text id="cardtext">
                                  <v-card-text class="text--primary">
                                    <p class="text-h5 mt-1 pl-1 pt-0 text--primary">
                                      Neden Üye Olmalıyım?
                                    </p>
                                    <h6 class="black--text mt-3">Fiyat alarmı kur ve değişimlerden haberdar ol</h6>
                                    <h6 class="black--text mt-3">Favori listelerini oluştur</h6>
                                    <h6 class="black--text mt-3">Oluşturduğun listeleri paylaş</h6>
                                  </v-card-text>
                                </v-card-text>
                                <v-img id="ahtopot" src="@/assets/indir.png" height="100" contain class="white"></v-img>

                              </v-card>
                            </v-col>
                          </v-row>
                        </v-fade-transition>
                      </v-container>

                    </template>
                   
                    <h2 id="uye" class="indigo-text">Üye Ol</h2>
                  </div>
                  <v-form @submit.prevent="submitHandler" ref="form">
                    <v-card-text>
                      <v-text-field v-model="email" :rules="emailRules" type="email" label="Email" placeholder="Email"
                        prepend-inner-icon="mdi-account" />
                      <v-text-field v-model="password" :rules="passwordRules" :type="passwordShow?'text':'password'"
                        label="Password" placeholder="Password" prepend-inner-icon="mdi-key"
                        :append-icon="passwordShow ? 'mdi-eye' :'mdi-eye-off'"
                        @click:append="passwordShow = !passwordShow" />
                      <v-checkbox class="text-h4"
                        label="Kampanyalardan haberdar olmak için ileti almak istiyorum ve ticari iletişim amaçlı kişisel verilerimin işlenmesini kabul ediyorum.">

                      </v-checkbox>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                      <v-btn :loading="loading" type="submit" color="indigo">
                        <v-span class="white--text-px-8"></v-span>Kayıt Ol
                      </v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-col>
            </v-main>
            <v-snackbar top color="green" v-model="snackbar">
              Kayıt Başarılı
            </v-snackbar>
          </v-app>
        </v-card>
      </v-tab-item>





      <v-tab-item>
        <v-card flat>
          <v-app>
            <div class="backgruond "></div>
            <v-main class="d-flex justify-center align-center">
              <v-col cols-="10" lg="4" class="mx-auto">
                <v-card class="pa-4">
                  <div class="text-overline mb-4">
                    <template>
                      <v-container class="fill-height" fluid style="min-height: 50px">
                        <v-fade-transition mode="out-in">
                          <v-row rows="100">
                            <v-col cols="20">
                    
                            </v-col>
                          </v-row>
                        </v-fade-transition>
                      </v-container>

                    </template>
                   
                    <h2   id="giris" class="indigo-text">Giriş Yap</h2>
                  </div>
                  <v-form @submit.prevent="submitHandler" ref="form">
                    <v-card-text >
                      <v-text-field v-model="email" :rules="emailRules" type="email" label="Email" placeholder="Email"
                        prepend-inner-icon="mdi-account" />
                      <v-text-field v-model="password" :rules="passwordRules" :type="passwordShow?'text':'password'"
                        label="Password" placeholder="Password" prepend-inner-icon="mdi-key"
                        :append-icon="passwordShow ? 'mdi-eye' :'mdi-eye-off'"
                        @click:append="passwordShow = !passwordShow" />
                      <v-checkbox class="text-h4"
                        label="Beni Hatırla">

                      </v-checkbox>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                      <v-btn :loading="loading" type="submit" color="indigo">
                        <v-span class="white--text-px-8"></v-span>Giriş Yap
                      </v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-col>
            </v-main>
            <v-snackbar top color="green" v-model="snackbar">
              Giriş Başarılı
            </v-snackbar>
          </v-app>
        </v-card>
      </v-tab-item>
   
   
    </v-tabs-items>
  </v-card>
</template>
<style>
#ahtopot {
  margin-top: -125px;
  margin-left: 300px;

}

#cardtext {
  margin-top: -200px;

}

#uye {
  margin-top: -150px;

}
#giris {
  margin-top: -330px;
  margin-bottom:-250px;

}
</style>
<script>
export default {
  name: 'App',

  data() {

    return {
      loading: false,
      snackbar: false,
      tabs: null,
      passwordShow: [
        false,],
      password: '',
      passwordRules: [
        v => !!v || 'Şifre gereklidir',
        v => (v && v.length <= 6) || 'Şifre en fazla 6 karakterden oluşmalıdır',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      items: [
        'Üye Ol', 'Giriş Yap'
      ],
    }
  },
  methods: {
    submitHandler() {
      if (this.$refs.form.validate()) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.snackbar = true
        }, 3000)
      }

    }
  }
};
</script>

<style>
.backgruond {

  height: 300px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}
</style>




