<template>
  <div class="Weather col-md-6 col-md-offset-3">
    <div class="Weather__box">
      <h1 class="text-center">Free Code Camp</h1>
      <h1 class="text-center">Weather App</h1>
      <div class="Weather__city text-center">
        <h3>{{ currentWeather.city }}, {{ currentWeather.country }}</h3>
      </div>
      <div class="Weather__temp text-center">
        <h3>{{ currentWeather.temp }} C</h3>
      </div>
      <div class="Weather__desc text-center">
        <h3>{{ currentWeather.desc }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        units: 'metric',
        userLocation: {
          lat: '',
          lon: ''
        },
        currentWeather: {
          city: '',
          country: '',
          temp: '',
          desc: ''
        }
      }
    },

    ready () {
      this.getCurrentLocation()
    },

    methods: {
      getCurrentLocation () {
        this.$http.get('http://ip-api.com/json').then(res => {
          this.userLocation.lat = res.body.lat
          this.userLocation.lon = res.body.lon
          this.getCurrentWeather()
        }).catch(err => {
          console.log(err)
        })
      },

      getCurrentWeather () {
        let apiWeather = 'http://api.openweathermap.org/data/2.5/weather?'
        let lat = 'lat=' + this.userLocation.lat
        let lon = '&lon=' + this.userLocation.lon
        let u = '&units=' + this.units
        let apikey = '&APPID=061f24cf3cde2f60644a8240302983f2'
        console.log(apiWeather + lat + lon + apikey + u)
        this.$http.get(apiWeather + lat + lon + apikey + u).then(res => {
          this.currentWeather.city = res.body.name
          this.currentWeather.country = res.body.sys.country
          this.currentWeather.temp = res.body.main.temp
          this.currentWeather.desc = res.body.weather[0].main
          console.log(res.body)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="scss">
  .Weather {
    margin-top: 5em;
    .Weather__box {
     h1 {
       font-size: 4.6em;
     }
    }
    .Weather__city {
      h3 {
        font-size: 4.2em;
      }
    }
    .Weather__temp, .Weather__desc {
      h3 {
        font-size: 3.5em;
      }
    }
  }
</style>