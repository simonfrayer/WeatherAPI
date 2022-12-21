<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem v-if="weatherData.data">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template id="weather" #heading>Current Weather in {{weatherData.data.name}}</template>
    <div class="weatherSection">
      <div class="weatherMain flex flex-col lg:flex-row justify-around lg:justify-between items-center">
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

      <div class="flex flex-col lg:flex-row justify-center items-center pt-6 lg:pt-2">
        <div class="sunrise p-2 lg:pr-4 text-sm lg:text-lg">
          <font-awesome-icon icon="fa-solid fa-sun" />
           {{getFormattedTimeFromSeconds(weatherData.data.sys.sunrise)}}
        </div>
        <div class="sunset p-2 lg:pl-4 text-sm lg:text-lg">
          <font-awesome-icon icon="fa-solid fa-moon" />
           {{getFormattedTimeFromSeconds(weatherData.data.sys.sunrise)}}
        </div>
      </div>
    </div>
    
    </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
     <template #heading>Documentation</template>

    Write any city into the input field and see the current weather forecast for that location.
    The data are gathered from 
    <a href="https://openweathermap.org/" target="_blank" rel="noopener" class="text-[#E4866A]">openweathermap.org</a>
    where you can get up to 1000 free API requests per day.
  
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
    <a href="https://github.com/simonfrayer" target="_blank" rel="noopener" class="text-[#E4866A]">GitHub</a>
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
    },
  },
}
</script>
