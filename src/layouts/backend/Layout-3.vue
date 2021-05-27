<template>
  <div>
     <Loader/>
    <div class="wrapper">
      <div class="container-fluid container-md hotel-container">
      <HeaderStyle3/>
      <div class="content-page">
        <transition name="router-anim">
          <router-view/>
        </transition>
      </div>
      </div>
    </div>
    <FooterStyle />
  </div>
</template>
<script>
import {core} from "@/config/pluginInit"
import Loader from '@/components/loader/Loader'
import HeaderStyle3 from "@/components/partials/backend/HeaderStyle/HeaderStyle3";
import FooterStyle from "@/components/partials/backend/FooterStyle/FooterStyle";
export default {
  name: 'Layout-3',
  components: {
    HeaderStyle3,
    FooterStyle,
    Loader
  },
  mounted(){
    document.body.classList='box-bg mm-hotel'
     core.iconanimate()
  },
  destroyed () {
    document.body.classList='box-bg mm-hotel'
  }
}
</script>
<style>
</style>
