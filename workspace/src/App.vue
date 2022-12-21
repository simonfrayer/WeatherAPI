<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/logo.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Gut Wetr" />
      <div class="text-3xl bg-slate-100 rounded-lg p-4 flex flex-row justify-between w-[100%] mt-4">
        <input v-model="city" placeholder="London" class="w-[60%] mr-5 rounded-md p-2 text-md border-[#E4866A]" />
        <button v-on:click="getList" class=" bg-[#E4866A] border-4 rounded-2xl p-2 text-sm"><b>Get</b> Weather</button>
      </div>
      

      <nav>
        <RouterLink to="/" >Home</RouterLink>
        <RouterLink to="/about">Daily Forecast</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView :weatherData="weatherData"/>
 
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      city: '',
      weatherData: JSON,
      apiKey: import.meta.env.VITE_API_KEY
    }
  },
  methods: {
    getList() {
      let api = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
      axios.get(api).then((response) => {
        console.log(response.data)
        this.weatherData = response
      })
    }
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    //this.getList()
  }
}
</script>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 10%;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #E4866A;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
