<template>
  <div class="wrapper">
    <div class="deneme" v-for="data in pc2" :key="data._id.$oid">
      <v-img id="foto" :src="data.UrunGorseli"></v-img>
      <v-btn class="button" v-bind:href='data.link' target="_blank">
        Trendyol ->
      </v-btn>
      <p id="baslik">{{data.Marka}} {{data.islemcitipi}} {{data.islemciModeli}} {{data.ram}}</p>
      <p id="fiyat">{{data.Fiyat}}</p>
    </div>



  </div>

</template>
<script>
import axios from "axios";
import jsonpc2 from "../../yenibilgi.json"

// const datas = async () => {
//   try {
//     const response = await axios.get("http://localhost:5000/laptops");
//     const laptops = response.data;

//     return laptops;
//   } catch (error) {
//     console.error(error);
//   }
// };

export default {
  name: "Deneme",
  el: "#elements",
  data() {
    return {
      laptoplar: null,
      pc2: jsonpc2
    };
  },
  created: function () {
    axios.get("http://localhost:5000/laptops").then((res) => {
      this.laptoplar = res.data;
    });
  },
};
</script>

<style>
#baslik{
  position: absolute;
  left: 25%;
  bottom: 80%;
}
.wrapper{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.deneme{
  background-color: aqua;
  width: 2000px;
  position: relative ;
  height: 300px;
  margin: 20px;
}
.button{
  position: absolute;
  top: 55%;
  left: 30%;
  transform: translate(-50%,-50%);
}
#fiyat{
  position: absolute;
  top: 35%;
  left: 25%;
}
#foto{
  height: 300px;
  width: 300px;
}
</style>
