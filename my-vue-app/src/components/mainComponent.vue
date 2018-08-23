<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Accurate Weather</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="checkWeather(cityName)" id="form">
            <b-form-group>
              <b-form-input v-bind:class="{'is-invalid': cityName == '' || cityName == null}" size="sm" name="cityName" data-rules="required" v-model.trim="cityName" class="mr-sm-2" type="text" placeholder="Enter City Name"/>
            </b-form-group>
            <b-button size="sm" class="my-2 my-sm-0" variant="success" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <weatherComponent :currentTemprature="this.currentTemprature" :currentLocation="this.currentLocation" :forecast="this.forecast" />
  </div>
</template>

<script>
import weatherComponent from './weatherComponent';
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      cityName: "",
      CurrentCityName: "",
      currentTemprature: [],
      currentLocation: [],
      forecast: []
    };
  },
  components: {
    weatherComponent
  },  
  mounted() {
    this.callWeatherApi("");
  },
  methods: {
    checkWeather: function(cityName) {
      if (cityName != "") {
        this.callWeatherApi(cityName);
      }
    },
    callWeatherApi: function(CN) {
      this.CurrentCityName = CN == "" ? "Leipzig" : CN;

      axios({
        method: "GET",
        url:
          "http://localhost:55926/api/Weather/GetWeatherByCityNameAsync?cityName=" +
          this.CurrentCityName
      }).then(
        response => {
          this.currentTemprature = response.data.current;
          this.currentLocation = response.data.location;
          this.forecast = response.data.forecast.forecastday;
        },
        error => {
          console.error(error);
        }
      );
     }
  }
};
</script>


