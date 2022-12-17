<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome :city="city"/>
  </main>
</template>

<script>
export default {
  props: ['city'],  
}
</script>
