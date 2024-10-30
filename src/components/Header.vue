<template>
  <header class="header" id="navbar-collapse-toggle">
    <!-- Fixed Navigation Starts -->
    <ul
      class="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1"
    >
      <li class="icon-box" :class="{ active: isActive('home') }">
        <i class="fa fa-home"></i>
        <router-link :to="{ name: 'home' }">
          <h2>Home</h2>
        </router-link>
      </li>
      <li class="icon-box" :class="{ active: isActive('about') }">
        <i class="fa fa-user"></i>
        <router-link :to="{ name: 'about' }">
          <h2>About</h2>
        </router-link>
      </li>
      <li class="icon-box" :class="{ active: isActive('portfolio') }">
        <i class="fa fa-briefcase"></i>
        <router-link :to="{ name: 'portfolio' }">
          <h2>Portfolio</h2>
        </router-link>
      </li>
      <li class="icon-box" :class="{ active: isActive('contact') }">
        <i class="fa fa-envelope-open"></i>
        <router-link :to="{ name: 'contact' }">
          <h2>Contact</h2>
        </router-link>
      </li>
      <!-- Uncomment if you want to add Blog navigation -->
      <!-- <li class="icon-box" :class="{ active : isActive('home')}">
        <i class="fa fa-comments"></i>
        <router-link :to="/blog">
          <h2>Blog</h2>
        </router-link>
      </li> -->
    </ul>
    <!-- Fixed Navigation Ends -->

    <!-- Mobile Menu Starts -->
    <nav role="navigation" class="d-block d-lg-none">
      <div id="menuToggle">
        <input type="checkbox" v-model="isMenuOpen" @change="toggleMenu" />
        <span></span>
        <span></span>
        <span></span>
        <ul class="list-unstyled" id="menu">
          <li :class="{ active: isActive('home') }">
            <router-link @click="closeMenu" :to="{ name: 'home' }">
              <i class="fa fa-home"></i><span>Home</span>
            </router-link>
          </li>
          <li :class="{ active: isActive('about') }">
            <router-link @click="closeMenu" :to="{ name: 'about' }">
              <i class="fa fa-user"></i><span>About</span>
            </router-link>
          </li>
          <li :class="{ active: isActive('portfolio') }">
            <router-link @click="closeMenu" :to="{ name: 'portfolio' }">
              <i class="fa fa-folder-open"></i><span>Portfolio</span>
            </router-link>
          </li>
          <li :class="{ active: isActive('contact') }">
            <router-link @click="closeMenu" :to="{ name: 'contact' }">
              <i class="fa fa-envelope-open"></i><span>Contact</span>
            </router-link>
          </li>
          <!-- Uncomment if you want to add Blog navigation -->
          <!-- <li :class="{ active : isActive('blog') }">
        <router-link @click="closeMenu" :to="{ name: 'blog' }"><i class="fa fa-comments"></i><span>Blog</span></router-link>
      </li> -->
        </ul>
      </div>
    </nav>

    <!-- Mobile Menu Ends -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    closeMenu() {
      this.isMenuOpen = false; // Close the menu
    },
    toggleMenu() {
      // Optional: Handle any additional logic when the menu is toggled
    },
    isActive(routeName) {
      return this.$route.name === routeName; // Check if the route is active
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
