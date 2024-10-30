<template>
  <!-- Live Style Switcher Starts -->
  <StyleSwitcher></StyleSwitcher>
  <!-- Live Style Switcher Ends -->
  <!-- Header Starts -->
  <Header></Header>
  <!-- Header Ends -->
  <!-- Main Content Starts -->
  <div class="">
    <router-view></router-view>
  </div>
  <!-- Main Content Ends -->
</template>

<script>
import StyleSwitcher from "@/components/StyleSwitcher.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Master",
  components: { Header, StyleSwitcher },
};
</script>

<style>
</style>