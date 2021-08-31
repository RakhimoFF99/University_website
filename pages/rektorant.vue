<template>
  <div> 
      <Navbar :title="title" :color="navColor" :height="navHeight" />
      <rektorant-card />
      
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import RektorantCard from '../components/rektorantCard.vue'
export default {
data:() => ({
    navColor:true,
    title: "Rektorant",
    navHeight: {
        height:"70vh"
      },
}),



components:{
    Navbar,
    RektorantCard
}
}
</script>

<style>

</style>