<template>
  <div class="container-global" :class="Math.round(temp.temp) > 10 ? 'warm' : '' ">
    <div class="content-bg" >
      <input type="text" v-model="search" @keypress="TownMeteo">
      <div class="wrapper-city-day">
        <h1 class="city">{{name.name}}, {{country.country}}</h1>
        <p class="day">{{DateParse()}}</p>
      </div>
      
      <div class="wrapper-deg">
        <h2 class="deg">{{Math.round(temp.temp)}}°C</h2>
      </div>
      <p class="temps">{{weather.description}}</p>
      
      <div class="wrapper-content">
        <div class="wrapper-deg">
          <h2 class="deg">Min {{Math.round(temp.temp_min)}}°C</h2>
          <h2 class="deg">Max {{Math.round(temp.temp_max)}}°C</h2>
        </div>
        <div class="wrapper-deg">
          <h2 class="deg">X {{coord.lon}}</h2>
          <h2 class="deg">Y {{coord.lat}}</h2>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
  
import axios from "axios"
export default {
    name: "HomeView",

   data(){
    return{

      search: "",
      temp: [],
      coord: [],
      name: [],
      country: [],
      weather: [],
    }
   },
   mounted(){
      this.TownMeteo(),
      this.DateParse(),
      this.ConvertDeg()
   },
   methods:{
     async TownMeteo(){
       const API_key = "146ca46d3bab70af2ba86384a61e0970" // your API_KEY
       const KEY = "ce095c00247073c34a5e42b012e1f048"
       
       axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.search}&units=metric&APPID=${KEY}&lang=fr`)
         .then(response => {
          console.log(response)
          this.temp = response.data.main
          this.coord = response.data.coord
          this.name = response.data
          this.country = response.data.sys
          this.weather = response.data.weather[0]
        })
         .catch(err => err)
       
      
      
    },
    DateParse(){
      let date = new Date();
      let options = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };

      return date.toLocaleDateString("fr-FR", options)
    },

    ConvertDeg(deg){
      let calcul = (deg - 32) / 18
      
      return calcul
    }
   }

    
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,700&display=swap');
.container-global{
    max-width: 600px;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 100vh;
    background-image: url("@/assets/cold-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: 1s ease-out;
    
  .content-bg{
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
    width: 100%;
    height: 100vh;
    padding: 35px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
    input{
      width: 100%;
      height: 45px;
      border: none;
      border-radius: 20px 0 20px 0;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 0px 16px 0px 16px;
      transition: 0.4s;
      font-size: 18px;
      font-weight: 500;
      padding-left: 15px;
      outline: none;
    }

    .wrapper-city-day{
      margin: 30px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: #fff;
      .city{
        font-size: 40px;
        font-weight: 500;
        text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
      }
      .day{
        font-weight: 300;
        font-style: italic;
        font-size: 20px;
      }
    }

    .wrapper-deg{
        padding: 10px 30px;
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 16px;
        margin: 30px 0px;
      .deg{
          color: #FFF;
          font-size: 83px;
          font-weight: 900;
          text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
      }
      
    }

        .temps {
          color: #fff;
          font-size: 48px;
          font-weight: 700;
          font-style: italic;
          text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
        }

        .wrapper-content{
          display: flex;
          width: 100%;
          justify-content: center;
          padding: 10px 0px;
          .wrapper-deg {
              width:100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              background-color: rgba(255, 255, 255, 0.25);
              border-radius: 16px;
              margin: 30px 10px;
              padding-left: 30px;
          
              .deg {
                padding: 0px;
                color: #FFF;
                font-size: 30px;
                font-weight: 900;
                text-shadow: 1.5px 3px rgba(0, 0, 0, 0.25);
                padding: 10px 0px
              }
          
            }
        }
  }

    .container-global.warm {
      background-image: url("@/assets/warm-bg.jpg");
    }
</style>