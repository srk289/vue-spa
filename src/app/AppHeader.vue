<template>
  <nav class="navbar has-shadow is-fixed-top">
    <div class="navbar-brand">
      <router-link class="navbar-item logo" to="/home" exact>
        SK
      </router-link>
      <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <router-link class="navbar-item is-tab"
          to="/home">Home</router-link>

          <router-link class="navbar-item is-tab"
          to="/about">About</router-link>

          <router-link class="navbar-item is-tab"
          to="/contact">Contact</router-link>
        </div>
      </div>
  </nav>

</template>
<script>
export default {
  data () {
    return {
      showNav: false
    }
  },

  created () {
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target
          var $target = document.getElementById(target)

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }
}
</script>
<style lang="scss">
  a.navbar-item.logo,
  a.navbar-item.logo.is-active:not(:hover),
  a.navbar-link.logo.is-active:not(:hover) {
    color: white;
    background: #333;
  }
</style>

