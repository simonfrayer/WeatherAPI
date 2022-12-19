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
    where you can get up to 1000 free API requests per day.
  
  </WelcomeItem> 

  <WelcomeItem v-if="weatherData.data">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template  #heading>Weather for {{weatherData.data.name}}</template>
    <div class="weatherSection">
      <div class="weatherMain flex flex-row justify-between items-center">
        <div class="flex flex-row items-center">
          <div class="weatherIcon">
        <img :src="'https://openweathermap.org/img/wn/' + weatherData.data.weather[0].icon + '.png'" alt="weather icon" class="w-24">
      </div>
      <div class="weatherTemp text-4xl">
        {{getTemperatureWithOneDecimal()}} °C
      </div>
        </div>
        <div class="flex flex-row items-center">
          <div class="windIcon w-24 flex justify-center">
        <font-awesome-icon icon="fa-solid fa-wind" class="text-3xl"/>
      </div>
      <div class="windSpeed text-3xl">
        {{weatherData.data.wind.speed}} m/s
      </div>
        </div>
      </div>

      <div class="flex flex-row justify-center items-center">
        <div class="sunrise pr-4">
          <font-awesome-icon icon="fa-solid fa-sun" />
           {{getFormattedTimeFromSeconds(weatherData.data.sys.sunrise)}}
        </div>
        <div class="sunset pl-4">
          <font-awesome-icon icon="fa-solid fa-moon" />
           {{getFormattedTimeFromSeconds(weatherData.data.sys.sunrise)}}
        </div>
      </div>
    </div>
    
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
  props: ['weatherData'],  
  data() {
    return {
      data: this.weatherData.data
    }
  },
  methods: {
    getTemperatureWithOneDecimal() {
      return this.weatherData.data.main.temp.toFixed(1)
    },

    getFormattedTimeFromSeconds(seconds) {
      let date = new Date(seconds * 1000)
      return date.toLocaleTimeString()
    }
  }
}
</script>
