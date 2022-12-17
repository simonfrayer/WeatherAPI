<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome :weatherData="weatherData"/>
  </main>
</template>

<script>
export default {
  props: ['weatherData'],  
}
</script>
