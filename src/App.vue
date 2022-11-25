<template>
  <div id="app">
    <div id="wrapper">
      <app-header></app-header>
      <right-sidebar></right-sidebar>
      <!-- <transition enter-active-class="animated fadeIn"> -->
      <router-view></router-view>
      <!-- </transition> -->
    </div>
    <app-footer></app-footer>
  </div>
</template>


<script>
import AppHeader from './components/shared/header';
import RightSidebar from './components/shared/right-sidebar';
import AppFooter from './components/shared/footer';

export default {
  // name: 'App',
  components: {
    AppHeader,
    RightSidebar,
    AppFooter
  },
  created() {
    console.log(this.currentRouteName);
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>
