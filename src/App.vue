<template>
  <h1>Прогноз погоды</h1>
  <h3></h3>
  <!-- <p>{{ weatherData.dt }}</p> -->
  <div v-if="!weatherData">
    <h3>Загрузка...</h3>
    <div v-if="fetchError">
      <h3>{{ fetchError }}</h3>
    </div>
  </div>
  <div v-else>
    <h3>Температура {{ weatherData?.main.temp }}</h3>
    <h4>Название города {{ weatherData?.name }}</h4>
    <h4>{{ weatherData?.weather[0].description }}</h4>
  </div>


  <div class="container">
    <select v-model="selectCity" @change="getWeatherData">

      <option>Нижний Тагил</option>
      <option>Лондон</option>
      <option>Москва</option>
    </select>
    <div>
      <button @click="getTwoWeekForeCast">Получить погоду</button>
    </div>
    <!-- <div class="forecast">
      <div v-for="item in weatherForecastData?.list" :key="item.dt">
        <div class="forecast-date" v-if="item.dt_txt.split(' ')[1].split(':')[0] == 0">
          <h3>{{ item.dt_txt.split(' ')[0] }}</h3>
          <WeatherCard :tempetature="item.main.temp" :description="item.weather[0].description" :time="item.dt_txt" />

        </div>
        
        <WeatherCard :tempetature="item.main.temp" :description="item.weather[0].description" :time="item.dt_txt" v-else/>

      </div>
    </div> -->
    <div class="forecast-container">
      <div v-for="(cardsArray, keyDate) in transaformedObjectArray" :key="keyDate">
        <h1>{{ keyDate }}</h1>
        <div class="forecast">
          <WeatherCard v-for="(item, idx) in cardsArray" :tempetature="item.tempetature" :description="item.description" :time="item.time" :icon="item.icon" :key="idx"></WeatherCard>
        </div>
      </div>

    </div>
    

  </div>

</template>




<script>

import WeatherCard from './components/WeatherCard.vue';


export default {
  name: 'App',
  data() {
    return {
      weatherData: null,
      cityCoord: {
        "Нижний Тагил": [57.9194, 59.965],
        "Лондон": [51.5085, -0.1257],
        "Москва": [55.7558, 37.6173]
      },
      weatherForecastData: null,
      fetchError: null,
      selectCity: "Нижний Тагил",
      transaformedObjectArray: {},
    }

  },
  mounted() {
   
    fetch("test_data.json").then(data => data.json()).then(data => { this.weatherForecastData = data}).catch(error => this.fetchError = error);


  },
  watch: {
    weatherForecastData: {
      // eslint-disable-next-line
      handler(newValue, _) {
      this.transaformedObjectArray = this.transaformResponse(newValue)
    },
    deep: true,
    immediate: true
  }},
  
  methods: {
    getCityCoord() {
      return this.cityCoord[this.selectCity]
    },
    transaformResponse (weatherData){
      const data = {}
      weatherData?.list?.map((item)=>{
        // console.log(item)
        const date = item.dt_txt.split(' ')[0]

        if (!data[date]){
          data[date] = [{
            dt: item.dt,
            time: item.dt_txt.split(' ')[1],
            description: item.weather[0].description,
            tempetature: item.main.temp,
            icon: item.weather[0].icon,
          }]
        }else{
          data[date].push( {
            dt: item.dt,
            time: item.dt_txt.split(' ')[1],
            description: item.weather[0].description,
            tempetature: item.main.temp,
            icon: item.weather[0].icon,
          })
        }
      })
      return data
    },
    
    getWeatherData() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.getCityCoord()[0]}&lon=${this.getCityCoord()[1]}&appid=${process.env.VUE_APP_OPEN_WEATHER_API}&units=metric`)
        .then(data => data.json())
        .then(data => { this.weatherData = data }).catch(error => this.fetchError = error);
    },
    getTwoWeekForeCast() {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.getCityCoord()[0]}&lon=${this.getCityCoord()[1]}&appid=${process.env.VUE_APP_OPEN_WEATHER_API}&units=metric`).then(data => data.json()).then(data => { this.weatherForecastData = data, this.transaformResponse() }).catch(error => this.fetchError = error);
    }

  },


  components: {

    WeatherCard,

  },
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.forecast-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
}
.forecast {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  align-items: center;
  justify-content: center;
  max-width: 80vw;
}

.forecast-date {
  display: flex;
  flex-direction: column;  
  width: 100%;
  text-align: center;
}
</style>
