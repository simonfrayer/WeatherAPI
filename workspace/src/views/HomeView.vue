<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome :city="city" :weatherData="weatherData"/>
  </main>
</template>

<script>
export default {
  props: ['city', 'weatherData'],  
}
</script>
