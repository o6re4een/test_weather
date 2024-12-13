<template>
    <div class="weather-card">
        <img :src="`https://openweathermap.org/img/wn/${icon}@2x.png`" alt="weather" :class="{ 'weather-translate-animation': icon.includes('04') }" class="weather-img">
        <h4>{{ description }}</h4>
        <p>{{time}}</p>
        <h3> {{ Number(tempetature).toFixed(0) }} C</h3>
        


    </div>
</template>

<script>

// const props = defineProps({
//     tempetature: Number,
//     description: String

// })

export default {
    name: 'WeatherCard',
    props: ['tempetature', 'description', "time", "icon"],

}


</script>

<style scoped>

.weather-card {

    border: 1px solid #132c5a;
    padding: 10px;
    margin: 10px;
    width: 200px;
    height: auto;
    z-index: 10;
    overflow: hidden;
    border-radius: 20px;
}
.weather-img {
    position: relative;
    z-index: -10;
}
.weather-translate-animation {
    animation-name: translate;
    animation-duration: 5s;
    animation-iteration-count: infinite;
}

@keyframes translate {
    from {
        transform: translateX(-150px);
    }
    25% {
        transform: translateX(-50px);
    }
    80%{
        transform: translateX(80px);
    }
   
    to {
        transform: translateX(150px);
    }
}




</style>