<template>
  <div class="wrapper">
    <div class="deneme" v-for="data in pc" :key="data._id.$oid">
      <v-btn class="button" v-bind:href='data.link' target="_blank">
        Trendyol ->
      </v-btn>
    </div>



  </div>

</template>
<script>
import axios from "axios";
import jsonpc from "../../../vueproje/pc.json"

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
      pc: jsonpc
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
.wrapper{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.deneme{
  background-color: aqua;
  width: 300px;
  position: relative ;
  height: 300px;
  margin: 20px;
}
.button{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
