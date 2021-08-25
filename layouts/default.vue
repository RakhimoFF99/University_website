<template>
<div>
  <Header :color="headerBackground" />
  <Navbar />
  <Nuxt />
  <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  data: () => ({
    headerBackground : {
     backgroundColor:'#1C2E51'
    },
    
    
  }),
  methods: {

  },
  components:{
    Header,
    Navbar,
    Footer
  
  }
}
</script>

<style >

</style>
