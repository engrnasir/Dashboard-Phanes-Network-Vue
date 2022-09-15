<template>
  <Navbar/>
    <router-view/>
  <FooterComp/>
</template>
<script>
  import Navbar from "@/components/Navbar.vue";
import FooterComp from "./components/FooterComp.vue";
  export default {
    components:{
    Navbar,
    FooterComp
}
  }
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
*,*::after,*::before{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  font-family: 'Poppins', sans-serif;
  background: #f3f3f3;
}
a{
  text-decoration: none;
}
.row{
  width: 100%;
  max-width: 1600px;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 0 24px;
  @media only screen and (max-width:580px){
    padding: 0 10px;
  }
}
</style>
