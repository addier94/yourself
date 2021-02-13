<template>
<div class="m-b-xl">
  <nav class="navbar2">
    <div class="nav-container">
      <div class="nav-center">
        <button class="btn-sidebar-toggle" @click="toggleNav = !toggleNav"><i class="fas fa-bars"></i></button>
        <ul class="nav-links">
          <li>
            <nuxt-link to="/">home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/courses">Cursos</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blogs">Blogs</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">Sobre mi</nuxt-link>
          </li>
        </ul> 
        <nuxt-link to="/" class="nav-logo big-logo">
          <img src="https://svelte-razors-store-recording.netlify.app/assets/images/logo.svg" class="logo" alt="razors logo">
        </nuxt-link>
        <!-- If Authenticated -->
        <template v-if="isAuth">
            <figure class="image avatar is-48x48 m-r-sm">
              <img @click="profileToggle = !profileToggle" class="is-rounded" :src="user.avatar ? user.avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNYjU6pmBARJ191GCVK0UncdRoj_zVSJ4ZjLkRuSoDICKTfWxA&usqp=CAU'">
              <div :class="['profile-container', !profileToggle ? 'profile-container-toggle' : '']">
                <div class="">
                  Bienvenido <p>({{ user.username }})</p>
                </div>
                <div class="m-b-sm" v-if="user.role !== 'admin'">
                  Necesitas Permisos del administrador
                </div>
                <!-- If Admin -->
                <button
                  v-if="isAdmin" class="btn btn-primary btn-details m-b-sm"
                  @click="() => $router.push('/instructor')">
                  Administrar
                </button>
                <button class="btn btn-primary btn-details" @click="logout">
                  Cerrar sesion
                </button>
              </div>
            </figure>
        </template>
        <template v-else>
          <div class="nav-aside">
            <nuxt-link to="/register">Registro</nuxt-link>
            <nuxt-link to="/login">Iniciar sesion</nuxt-link>
          </div>
        </template>
      </div>
    </div>
  </nav>
  <div :class="['sidebar-container', toggleNav ? 'toggle-sidebar' : '']">
    <div class="sidebar" style="">
      <div class="sidebar-header">
        <button class="btn-close" @click="toggleNav = !toggleNav"><i class="fas fa-window-close"></i></button>
        
      </div> 
      <nuxt-link to="/">
        <img src="https://svelte-razors-store-recording.netlify.app/assets/images/logo.svg" class="logo sidebar-logo" alt="razors logo"> 
      </nuxt-link>
      <ul class="sidebar-links">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/courses">Cursos</nuxt-link></li>
        <li><nuxt-link to="/blogs">Blogs</nuxt-link></li> 
        <li><nuxt-link to="/about">Sobre mi</nuxt-link></li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      toggleNav: true,
      profileToggle: false
    }
  },
  computed: {
    ...mapGetters({
      'user': 'auth/authUser',
      'isAuth': 'auth/isAuthenticated',
      'isAdmin': 'auth/isAdmin'
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout').then(() => this.$router.push('/login'))
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar2 {
  background: $mainWhite;
  height: 5rem;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid $primaryColor;
  box-shadow: $lightShadow;
}
.nav-container {
  width: 100%;
  position: relative;
}
.nav-center {
  width: $smallWidth;
  // max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-links {
    display: flex;
    align-items: center;
}
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
    color: $mainBlack;
}

.big-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.nav-logo {
    line-height: 0;
}
.logo {
    width: 9rem;
}
img {
    width: 100%;
    display: block;
}
.nav-aside {
    display: flex;
    align-items: center;
}
.nav-aside a {
    margin-right: 1rem;
}
.nav-links a, .nav-aside a {
    text-transform: capitalize;
    display: inline-block;
    margin-right: 0.5rem;
    font-weight: 400;
    letter-spacing: 2px;
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
    transition: $mainTransition;
}
.nav-links a:hover, .nav-aside a:hover {
  color: $primaryColor;
  border-left: 2px solid $primaryColor;
}
.nav-links a.nuxt-link-exact-active, .nav-aside a.nuxt-link-exact-active, .sidebar-links a.nuxt-link-exact-active {
  color: $primaryColor;
  border-left: 0.5px solid $primaryColor;
}
.sidebar-links a:hover {
  color: $primaryColor;
  border-left: 0.5rem;
}

// Mobile
.sidebar-container {
  background: $mainWhite;
  position: fixed;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  z-index: 4;
  padding-left: .2rem;
}
.sidebar {
    width: $smallWidth;
    margin: 0 auto;
}
.sidebar-header{
    height: 5rem;
    display: flex;
    align-items: center;
  .btn-close {
      color: $mainRed;
      font-size: 2rem;
  }
}
.btn-sidebar-toggle {
    background: transparent;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
    display: none;
}
.toggle-sidebar {
  display: none;
}
img.sidebar-logo {
  margin-top: 1.5rem;
}
.sidebar-links {
    margin-top: 2.5rem;
}
.sidebar-links a {
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: $mainSpacing;
  display: block;
  margin: 0.5rem 0;
  transition: $mainTransition;
}

// profile
.profile-container{
  background: $mainWhite;
  position: absolute;
  padding: .5rem;
  right: 0;
  top: 3rem;
}
.profile-container-toggle{
  display: none;
}


@media only screen and (max-width: 992px) {
  .nav-links{
    display: none;
  }
  button.btn-sidebar-toggle{
    display: block;
  }
  .nav-center .nav-logo{
    display: none!important;
  }
}
</style>