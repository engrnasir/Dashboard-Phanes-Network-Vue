<template>
    <Navbar/>
    <router-view/>
    <FooterComp/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
    components:{
        Navbar,
        FooterComp,
    }
}
</script>

<style>

</style>