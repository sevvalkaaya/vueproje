<template>
  <ul id="elements">
    <li v-for="item in laptoplar" :key="item.lId">
      {{ item.name }}
    </li>
  </ul>
</template>
<script>
import axios from "axios";

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
    };
  },
  created: function () {
    axios.get("http://localhost:5000/laptops").then((res) => {
      this.laptoplar = res.data;
    });
  },
};
</script>

<style></style>
