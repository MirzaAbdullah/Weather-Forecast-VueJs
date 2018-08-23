<template>
  <b-container fluid>
    <b-row>
      <b-col col md="12" id="TodayTemprature" class="white-textColor">
        <div class="fontSize_24PX">
          {{ currentLocation.name }},{{ currentLocation.country }}
        </div>
        <div>
          <img v-bind:src="this.currentTemprature.condition.icon" width="80"/>
          <span class="fontSize_32PX">
            {{currentTemprature.temp_c}}<sup>o</sup>C
          </span>
          <br />
          <span>{{currentTemprature.condition.text}}</span>
          <br />
          <span>{{ currentLocation.localtime | moment("Do MMMM YYYY, dddd") }}</span>
        </div>
        <div>
          <span class="padElement">Humidity {{ currentTemprature.humidity }} %</span>
          <span class="padElement">Wind {{ currentTemprature.wind_kph }} km/h</span>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col col md="12" id="ForecastTemprature" class="white-textColor">
        <b-col>
          <div>
            <carousel :autoplay="false" :perPage="4" >
              <slide v-if="index != 0" v-for="(Weather,index) in this.forecast" :key="index">
                <div>
                  <img v-bind:src="Weather.day.condition.icon" width="80"/>
                  <span class="fontSize_32PX">
                    {{ Weather.day.maxtemp_c }} <sup>o</sup>C
                  </span>
                  <br />
                  <span>{{ Weather.day.condition.text }}</span>
                  <br />
                  <span>{{ Weather.date | moment("Do MMMM YYYY, dddd") }}</span>
                </div>
                <div>
                  <span class="padElement">Humidity {{ Weather.day.avghumidity }} %</span>
                  <span class="padElement">Wind {{ Weather.day.maxwind_kph }} km/h</span>
                </div>
              </slide>
            </carousel>
          </div>
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>
 
<script>

import { Carousel, Slide } from "vue-carousel";
import { loadProgressBar } from 'axios-progress-bar';

loadProgressBar()

export default {
  name: 'WeatherComponent',
  data() {
    return {
      
    };
  },
  props:{
    currentTemprature: [Array,Object],
    currentLocation: [Array,Object],
    forecast: [Array,Object]
  },
  components: {
    Carousel,
    Slide,
    loadProgressBar
  }
}
</script>