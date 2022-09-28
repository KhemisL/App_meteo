 env : {
  API_KEY: "146ca46d3bab70af2ba86384a61e0970"
  API_URL: "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
}


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
