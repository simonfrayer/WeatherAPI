<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
     <template #heading>Documentation</template>

    Write any city into the input field and see the current weather forecast for that location.
    The data are gathered from 
    <a href="https://openweathermap.org/" target="_blank" rel="noopener">openweathermap.org</a>
    where you can get up to 1000 free requests per day.
  
  </WelcomeItem> 

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Weather for {{city}}</template>

    <div class="weatherIcon"></div>
    </WelcomeItem>

  <!-- <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    </WelcomeItem> -->

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Do you like this?</template>

    For more projects checkout my
    <a href="https://github.com/simonfrayer" target="_blank" rel="noopener">GitHub</a>
    .
  
    </WelcomeItem>
</template>



<script>
export default {
  props: ['city'],  
}
</script>
