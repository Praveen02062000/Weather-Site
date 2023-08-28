const audio_link = {
    rain: {
        heavy: "./condition-img/heavyrain.mp3",
        soft: "./condition-img/softrain.mp3"
    },
    night: "./condition-img/nightsound.mp3",
    mor: "./condition-img/morning.mp3",
    afternoon: "./condition-img/afternoon.mp3"


}

//console.log(audio_link.night)

const img_src = {
    mor: "./condition-img/sun.png",
    night: "",
    cloud: "",
    rain: ""
}

// ai img for btn  .................//

const aiimg_btn = document.querySelector('.ai-img');


//======================================//

const aivocie_btn = document.querySelector('.AI')
const search_btn = document.querySelector('.search');
const text = document.querySelector('.text');
const city = document.querySelector('.city');
const main_icon = document.querySelector('.weather-icon');
const tempature = document.querySelector('.temp');
const hum = document.querySelector('.hum');
const pre = document.querySelector('.pressure');
const weather_con = document.querySelector('.details-con');
const body = document.querySelector('body');
const feels = document.querySelector('.feels');

const ground = document.querySelector('.grnd');
const sea_level = document.querySelector('.sealevel');
const temp_max = document.querySelector('.temp-max');
const temp_min = document.querySelector('.temp-min');
const menu_btn = document.querySelector('.menu');
const slide_con = document.querySelector('.slide');
const back_btn = document.querySelector('.back');

const wind_con = document.querySelector('.wind');
const wind_deg = document.querySelector('.wind-deg');
const wind_gust = document.querySelector('.wind-gust');
const wind_speed = document.querySelector('.wind-speed');

const coord_con = document.querySelector('.coord');
const coord_lon = document.querySelector('.coord-lon');
const coord_lat = document.querySelector('.coord-lat');

const des_icon = document.querySelector('.des-icon')
const des = document.querySelector('.des')
const sun_con = document.querySelector('.sun')
const sunset = document.querySelector('.sun-set')
const sunrise = document.querySelector('.sun-rise')

const mini_city = document.querySelector('.main-city');
const detail_text = document.querySelector('.detail-con');

//
const star = document.querySelector('.star')
const cloud = document.querySelector('.cloud')
const cloud1 = document.querySelector('.cloud2')
const cloud3 = document.querySelector('.cloud3')
const stars = document.querySelector('.stars')

const city_name = document.querySelector('.name_city');
const city_code = document.querySelector('.city-code');
const city_id = document.querySelector('.city-id');
const population = document.querySelector('.pol');
const timezone = document.querySelector('.timezone');


//create audio dom element ======//
const audio = document.createElement('audio');


// THIS FOR MINI DETAILS FOR THAT LOCIATION AND FOR FIVE DAYS AND CON - DETAILS //

const mini_det = document.createElement('div');




// {  <div class="main-city">
// <h1 class="name_city">pallipattu</h1>
// <h2 class="city-code">country-code = IN</h2>
// <H2 class="city-id">123456</H2>
// <h2 class="pol">population : 8456789</h2>
// <h2 class="timezone">timezone : 123456789</h2>

// </div>





/* <div class="sub-main">
<h2 class="hum">humidity:45</h2>
<h2 class="pressure">pressure: 456</h2>
<h2 class="wind">wind:  3km/hr</h2>
<h2 class="sealevel">sea_level : 2039</h2>
<h2 class="temp-max">temp-max: 23</h2>
<h2 class="temp-min">temp-min : 20</h2>
</div> */



// sub weather place for ========//

const div_1 = document.querySelector('.A01')
const div_1_img = div_1.querySelector('img')
const div_1_des = div_1.querySelector('h2')
const div_1_temp = div_1.querySelector('h3')


const div_2 = document.querySelector('.A02')
const div_2_img = div_2.querySelector('img')
const div_2_des = div_2.querySelector('h2')
const div_2_temp = div_2.querySelector('h3')


const div_3 = document.querySelector('.A03')
const div_3_img = div_3.querySelector('img')
const div_3_des = div_3.querySelector('h2')
const div_3_temp = div_3.querySelector('h3')


const div_4 = document.querySelector('.A04')
const div_4_img = div_4.querySelector('img')
const div_4_des = div_4.querySelector('h2')
const div_4_temp = div_4.querySelector('h3')

const div_5 = document.querySelector('.A05')
const div_5_img = div_5.querySelector('img')
const div_5_des = div_5.querySelector('h2')
const div_5_temp = div_5.querySelector('h3')
//console.log(div_1,div_1_img,div_1_des,div_1_temp)







const ai = (a, b) => {

    var msg = new SpeechSynthesisUtterance(a)
    msg.pitch = 2
    msg.rate = 0.9
    if (b === true) {
        msg.onpause
    }

    return window.speechSynthesis.speak(msg)



}









const text_con = ["welcome to lipickacattie Weather daily", "Enter the your location for weather and forecast details"]

for (let i = 0; i < text_con.length; i++) {
    ai(text_con[i])

}





const weather = (a) => {
    const apikey = "93b47731b8dfb283bc9fec080643facf"
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${a}&cnt=5&appid=${apikey}&units=metric`)
        .then((Response) => Response.json())
        .then((data) => {
            let value = data
            console.log(value)
            country_value(data)
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${apikey}&units=metric`)
                .then((Response) => Response.json())
                .then((data) => {
                    console.log(data)
                    setting_data(data)

                })
        })

}
const country_value = (value_data1) => {
    var country = value_data1.city.country
    var name = value_data1.city.name
    var cityid = value_data1.city.id
    var pol = value_data1.city.population
    var time_zone = value_data1.city.timezone

    const daily_weather = [
        {
            id: 0,
            first: value_data1.list[0],
        },
        {
            id: 1,
            second: value_data1.list[1]

        },
        {
            id: 2,
            thrid: value_data1.list[2]
        },
        {
            id: 3,
            fourth: value_data1.list[3]

        },
        {
            id: 4,
            five: value_data1.list[4]
        }

    ]
    console.log(daily_weather)
    const sub = [
        {
            id: 0,
            icon: daily_weather[0].first.weather[0].icon,
            des: daily_weather[0].first.weather[0].description,
            temps_max: daily_weather[0].first.temp.max,
            temp_min: daily_weather[0].first.temp.min,
            temp_mor: daily_weather[0].first.temp.morn,
            temp_day: daily_weather[0].first.temp.day,
            temp_eve: daily_weather[0].first.temp.eve,
            temp_ngt: daily_weather[0].first.temp.night,
            weather_humidity: daily_weather[0].first.humidity,
            weather_spd: daily_weather[0].first.speed,
            weather_pressure: daily_weather[0].first.pressure,
            weather_sun_rise: daily_weather[0].first.sunrise,
            weather_sun_set: daily_weather[0].first.sunset

        },
        {
            id: 1,
            icon: daily_weather[1].second.weather[0].icon,
            des: daily_weather[1].second.weather[0].description,
            temps_max: daily_weather[1].second.temp.max,
            temp_min: daily_weather[1].second.temp.min,
            temp_mor: daily_weather[1].second.temp.morn,
            temp_day: daily_weather[1].second.temp.day,
            temp_eve: daily_weather[1].second.temp.eve,
            temp_ngt: daily_weather[1].second.temp.night,
            weather_humidity: daily_weather[1].second.humidity,
            weather_spd: daily_weather[1].second.speed,
            weather_pressure: daily_weather[1].second.pressure,
            weather_sun_rise: daily_weather[1].second.sunrise,
            weather_sun_set: daily_weather[1].second.sunset
        },
        {
            id: 2,
            icon: daily_weather[2].thrid.weather[0].icon,
            des: daily_weather[2].thrid.weather[0].description,
            temps_max: daily_weather[2].thrid.temp.max,
            temp_min: daily_weather[2].thrid.temp.min,
            temp_mor: daily_weather[2].thrid.temp.morn,
            temp_day: daily_weather[2].thrid.temp.day,
            temp_eve: daily_weather[2].thrid.temp.eve,
            temp_ngt: daily_weather[2].thrid.temp.night,
            weather_humidity: daily_weather[2].thrid.humidity,
            weather_spd: daily_weather[2].thrid.speed,
            weather_pressure: daily_weather[2].thrid.pressure,
            weather_sun_rise: daily_weather[2].thrid.sunrise,
            weather_sun_set: daily_weather[2].thrid.sunset

        },
        {
            id: 3,
            icon: daily_weather[3].fourth.weather[0].icon,
            des: daily_weather[3].fourth.weather[0].description,
            temps_max: daily_weather[3].fourth.temp.max,
            temp_min: daily_weather[3].fourth.temp.min,
            temp_mor: daily_weather[3].fourth.temp.morn,
            temp_day: daily_weather[3].fourth.temp.day,
            temp_eve: daily_weather[3].fourth.temp.eve,
            temp_ngt: daily_weather[3].fourth.temp.night,
            weather_humidity: daily_weather[3].fourth.humidity,
            weather_spd: daily_weather[3].fourth.speed,
            weather_pressure: daily_weather[3].fourth.pressure,
            weather_sun_rise: daily_weather[3].fourth.sunrise,
            weather_sun_set: daily_weather[3].fourth.sunset
        },
        {
            id: 4,
            icon: daily_weather[4].five.weather[0].icon,
            des: daily_weather[4].five.weather[0].description,
            temps_max: daily_weather[4].five.temp.max,
            temp_min: daily_weather[4].five.temp.min,
            temp_mor: daily_weather[4].five.temp.morn,
            temp_day: daily_weather[4].five.temp.day,
            temp_eve: daily_weather[4].five.temp.eve,
            temp_ngt: daily_weather[4].five.temp.night,
            weather_humidity: daily_weather[4].five.humidity,
            weather_spd: daily_weather[4].five.speed,
            weather_pressure: daily_weather[4].five.pressure,
            weather_sun_rise: daily_weather[4].five.sunrise,
            weather_sun_set: daily_weather[4].five.sunset
        }
    ]

    // console.log(daily_weather)
    console.log(sub)
    if (text.value !== "") {
        city_name.innerHTML = name
        city_code.innerHTML = "Country-code : " + country;
        city_id.innerHTML = "City-ID : " + cityid
        population.innerHTML = "Population : " + pol
        timezone.innerHTML = "TimeZone : " + time_zone


        menu_btn.style.display = "block";
        slide_con.style.display = "block";

        div_1_img.src = `http://openweathermap.org/img/wn/${sub[0].icon}@2x.png`
        div_1_des.innerHTML = sub[0].des
        div_1_temp.innerHTML = "Temp-max : " + sub[0].temps_max

        div_2_img.src = `http://openweathermap.org/img/wn/${sub[1].icon}@2x.png`
        div_2_des.innerHTML = sub[1].des
        div_2_temp.innerHTML = "Temp-max : " + sub[1].temps_max

        div_3_img.src = `http://openweathermap.org/img/wn/${sub[2].icon}@2x.png`
        div_3_des.innerHTML = sub[2].des
        div_3_temp.innerHTML = "Temp-max : " + sub[2].temps_max

        div_4_img.src = `http://openweathermap.org/img/wn/${sub[3].icon}@2x.png`
        div_4_des.innerHTML = sub[3].des
        div_4_temp.innerHTML = "Temp-max : " + sub[3].temps_max

        div_5_img.src = `http://openweathermap.org/img/wn/${sub[4].icon}@2x.png`
        div_5_des.innerHTML = sub[4].des
        div_5_temp.innerHTML = "Temp-max : " + sub[4].temps_max

        var flag = 0
        menu_btn.addEventListener('click', () => {
            if (flag === 0) {
                slide_con.style.left = "0rem"
                menu_btn.style.display = "none"
                back_btn.style.display = "block"
                flag = 1

            }
            if (flag === 1) {
                back_btn.addEventListener('click', () => {
                    slide_con.style.left = "-50rem"
                    menu_btn.style.display = "block"
                    back_btn.style.display = "none"
                    flag = 0
                })
            }

        })

        

        div_1.addEventListener('click', () => {

            const screen = document.querySelector('.screen')
            screen.style.display = "block"
            mini_con(sub[0].icon, sub[0].des, 
                    sub[0].temp_mor, sub[0].temp_day, 
                    sub[0].temp_eve, sub[0].temp_ngt, 
                    sub[0].weather_sun_set, 
                    sub[0].weather_sun_rise, 
                    sub[0].temps_max, sub[0].temp_min, 
                    sub[0].weather_humidity, sub[0].weather_pressure, 
                    sub[0].weather_spd)
        })
        div_2.addEventListener('click', () => {

            const screen = document.querySelector('.screen')
            screen.style.display = "block"
            mini_con(sub[1].icon, sub[1].des, 
                    sub[1].temp_mor, sub[1].temp_day, 
                    sub[1].temp_eve, sub[1].temp_ngt, 
                    sub[1].weather_sun_set, 
                    sub[1].weather_sun_rise, 
                    sub[1].temps_max, sub[1].temp_min, 
                    sub[1].weather_humidity, sub[1].weather_pressure, 
                    sub[1].weather_spd)
        })
        div_3.addEventListener('click', () => {

            const screen = document.querySelector('.screen')
            screen.style.display = "block"
            mini_con(sub[2].icon, sub[2].des, 
                    sub[2].temp_mor, sub[2].temp_day, 
                    sub[2].temp_eve, sub[2].temp_ngt, 
                    sub[2].weather_sun_set, 
                    sub[2].weather_sun_rise, 
                    sub[2].temps_max, sub[2].temp_min, 
                    sub[2].weather_humidity, sub[2].weather_pressure, 
                    sub[2].weather_spd)
        })
        div_4.addEventListener('click', () => {

            const screen = document.querySelector('.screen')
            screen.style.display = "block"
            mini_con(sub[3].icon, sub[3].des, 
                    sub[3].temp_mor, sub[3].temp_day, 
                    sub[3].temp_eve, sub[3].temp_ngt, 
                    sub[3].weather_sun_set, 
                    sub[3].weather_sun_rise, 
                    sub[3].temps_max, sub[3].temp_min, 
                    sub[3].weather_humidity, sub[3].weather_pressure, 
                    sub[3].weather_spd)
        })
        div_5.addEventListener('click', () => {

            const screen = document.querySelector('.screen')
            screen.style.display = "block"
            mini_con(sub[4].icon, sub[4].des, 
                    sub[4].temp_mor, sub[4].temp_day, 
                    sub[4].temp_eve, sub[4].temp_ngt, 
                    sub[4].weather_sun_set, 
                    sub[4].weather_sun_rise, 
                    sub[4].temps_max, sub[4].temp_min, 
                    sub[4].weather_humidity, sub[4].weather_pressure, 
                    sub[4].weather_spd)
        })

         

        // more weather details for five days//

        // <div class="div_weather_more">
        //     <div class="remove">
        //         <img src="./assets/res/back.png" alt="" title="back">
        //     </div>


        // </div>










    }






}




function setting_data(value_data) {
    // setting variable for the data in json ==================//
    var icon = value_data.weather[0].icon
    var temp = value_data.main.temp
    var humidity = value_data.main.humidity
    var pressure = value_data.main.pressure
    var weather_main = value_data.weather[0]
    var feel = value_data.main.feels_like
    var sealevel = value_data.main.sea_level
    var tempmax = value_data.main.temp_max
    var tempmin = value_data.main.temp_min
    var ground_level = value_data.main.grnd_level
    var time = value_data.coord.dt

    var deg = value_data.wind.deg
    var speed = value_data.wind.speed
    var gust = value_data.wind.gust


    var latitude = value_data.coord.lat
    var longtitude = value_data.coord.lon


    var sun_set = unixtime(value_data.sys.sunset)
    var sun_rise = unixtime(value_data.sys.sunrise)
    var description = weather_main.description



    //=========================================
    if (text.value !== "") {
        detail_text.style.display = "none"
        // setting  value for variable for html and database value //
        //console.log(unixtime(time))
        city.innerHTML = value_data.name
        main_icon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
        tempature.innerHTML = temp + "<sup>°</sup>"
        // sub -main details in main -con ........................................//
        sea_level.innerHTML = "Sea level : " + sealevel
        temp_max.innerHTML = "Temp max : " + tempmax + "<sup>°</sup>"
        temp_min.innerHTML = "Temp min : " + tempmin + "<sup>°</sup>"
        ground.innerHTML = "Ground level : " + ground_level
        hum.innerHTML = "Humidity : " + humidity
        pre.innerHTML = "Pressure : " + pressure
        weather_con.style.display = "block"
        wind_con.style.display = "block"
        coord_con.style.display = "block"
        feels.innerHTML = "Feels like : " + feel + "<sup>°</sup>"


        // for set value for wind con winds =======//
        wind_deg.innerHTML = `deg :  ${deg}`
        wind_gust.innerHTML = `gust :  ${gust}`
        wind_speed.innerHTML = `Speed :  ${speed} km/h`

        // for coords ===============================//
        coord_lat.innerHTML = `Latitude : ${latitude}`
        coord_lon.innerHTML = `Longitude : ${longtitude}`
        sun_con.style.display = "block"
        sunset.innerHTML = `Sunset : ${sun_set}`
        sunrise.innerHTML = `Sunrise : ${sun_rise}`
        des_icon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
        des.innerHTML = description



        // audios conditions ==============//

        const time_value = new Date();
        var hour_con = time_value.getHours();
        var pm_am = hour_con >= 12 ? 'pm' : 'am';
        var H12_format = hour_con % 12

        // if( hour_con >= 12){
        //      pm_am = "pm"

        // }if( hour_con < 12){
        //     pm_am = "am"
        // }
        console.log(H12_format)
        console.log(pm_am)

        if (H12_format >= 6 && pm_am === "pm" || H12_format > 12 && pm_am == "am" && H12_format < 6) {
            // audio.src = audio_link.night
            // audio.play()
            if (description === "clear sky") {
                audio.src = audio_link.night
                audio.play()
                audio.loop = true;
                body.style.backgroundColor = "#06121c"
                star.style.display = "block"
                cloud.style.display = "block"
                cloud1.style.display = "block"
                cloud3.style.display = "block"
                stars.style.display = "block"


            }
            else if (description === "overcast clouds") {
                if (temp < 0) {
                    audio.src = audio_link.rain.soft
                    audio.play()
                    audio.loop = true;
                    body.style.backgroundColor = "#242424"
                    star.style.display = "none"
                    cloud.style.display = "block"
                    cloud1.style.display = "block"
                    cloud3.style.display = "block"
                    stars.style.display = "none"

                } else {
                    audio.src = audio_link.rain.heavy
                    audio.play()
                    audio.loop = true;
                    body.style.backgroundColor = "#242424"
                    star.style.display = "none"
                    cloud.style.display = "block"
                    cloud1.style.display = "block"
                    cloud3.style.display = "block"
                    stars.style.display = "none"
                }


            } else {
                audio.src = audio_link.night
                audio.play()
                audio.loop = true;
                body.style.backgroundColor = "#06121c"
                star.style.display = "block"
                cloud.style.display = "block"
                cloud1.style.display = "block"
                cloud3.style.display = "block"
                stars.style.display = "block"

            }



        }
        // mor and afternoon //


        if (H12_format >= 6 && pm_am === "am" || H12_format >= 0 && pm_am === "pm" && H12_format < 6) {

            if (description === "clear sky") {
                if (temp > 30) {
                    audio.src = audio_link.afternoon
                    audio.play()
                    audio.loop = true;
                    star.style.left = "20rem"
                    star.style.animation = "none"
                    star.src = img_src.mor
                    body.style.backgroundColor = "#ffad3b"
                    star.style.display = "block"
                    cloud.style.display = "block"
                    cloud1.style.display = "block"
                    cloud3.style.display = "block"

                } else {
                    audio.src = audio_link.mor
                    audio.play()
                    audio.loop = true;
                    star.style.left = "20rem"
                    star.style.animation = "none"
                    star.src = img_src.mor
                    body.style.backgroundColor = "#148ff5"
                    star.style.display = "block"
                    cloud.style.display = "block"
                    cloud1.style.display = "block"
                    cloud3.style.display = "block"

                }


            }
            else if (description === "overcast clouds") {
                if (temp < 0) {
                    audio.src = audio_link.rain.soft
                    audio.play()
                    audio.loop = true;
                    star.style.left = "20rem"
                    star.style.animation = "none"
                    star.src = img_src.mor
                    body.style.backgroundColor = "#355d63"
                    star.style.display = "none"
                    cloud.style.display = "block"
                    cloud1.style.display = "block"
                    cloud3.style.display = "block"

                } else {
                    audio.src = audio_link.rain.heavy
                    audio.play()
                    audio.loop = true;
                    star.style.left = "20rem"
                    star.style.animation = "none"
                    star.src = img_src.mor
                    body.style.backgroundColor = "#242424"
                    star.style.display = "none"
                    cloud.style.display = "block"
                    cloud1.style.display = "block"
                    cloud3.style.display = "block"

                }



            } else {
                audio.src = audio_link.mor
                audio.play()
                audio.loop = true;
                star.style.left = "20rem"
                star.style.animation = "none"
                star.src = img_src.mor
                body.style.backgroundColor = "#148ff5"
                star.style.display = "block"
                cloud.style.display = "block"
                cloud1.style.display = "block"
                cloud3.style.display = "block"

            }



        }





        mini_city.style.display = "block"


        // voices ass for weather report //

        //console.log(sun_set[0], sun_set[2, 5], sun_set[7])
        //var flag_ai = false;
        var toggel_flag = 0
        console.log(toggel_flag)
        //const toggel = document.querySelector('.toggel')
        aivocie_btn.style.display = "block"
        aiimg_btn.style.display = "block"


        aiimg_btn.addEventListener('click', () => {
            aivocie_btn.style.animation = "spinner 1s linear infinite"
            if (toggel_flag === 0) {
                console.log(toggel_flag)
                if (text.value === "") {
                    var array = ["please enter the location first "]
                    for (let i = 0; i <= array.length; i++) {
                        ai(array[i])

                    }
                    toggel_flag === 1
                    console.log(toggel_flag)

                }
                else {

                    console.log("hii")
                    toggel_flag = 1
                    const weather_text = [`weather is ${description} in ${text.value}`,
                    `maximum tempature is ${tempmax} degree and minimum tempature ${tempmin} degree`, `
                        The tempature is ${temp} degree`, `Humidity is ${humidity}`,
                    `and pressure is ${pressure}`,
                    `Wind speed ${speed} killometer for hour  and direction of wind is ${deg} degree`,
                    `${text.value} poisition is latitude ${latitude} and longitude ${longtitude}`,
                    `sealevel is ${sealevel} and ground level ${ground_level}`,
                    `sunrise timing is ${sun_rise} and sunseta time ${sun_set}`]
                    console.log(toggel_flag)
                    console.log(weather_text.length)




                    for (const i in weather_text) {

                        if (toggel_flag != 0) {
                            ai(weather_text[i])
                        } else {
                            break;
                        }
                    }

                }
            }
            toggel_flag = 0
        })

    }

    // values for the place what we text there ==========================//

}

text.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {


        if (text.value === "") {
            ai("INPUT BOX IS EMPTY, PLEASE ENTER THE LOCATION NAME")
            wind_con.style.display = "none"
            coord_con.style.display = "none"
            sun_con.style.display = "none"
            weather_con.style.display = "none"
            body.style.backgroundColor = "#0a1a1a"
            mini_city.style.display = "none"
            detail_text.style.display = "block"

            star.style.display = "none"
            cloud.style.display = "none"
            cloud1.style.display = "none"
            cloud3.style.display = "none"
            stars.style.display = "none"


            menu_btn.style.display = "none";
            slide_con.style.display = "none";
            back_btn.style.display = "none";
            slide_con.style.left = "-50rem"
            audio.pause()

        } else {

            weather(text.value)

        }

    }
})

search_btn.addEventListener('click', () => {
    if (text.value === "") {
        body.style.backgroundColor = "#0a1a1a"
        detail_text.style.display = "block"
        wind_con.style.display = "none"
        coord_con.style.display = "none"
        sun_con.style.display = "none"
        weather_con.style.display = "none"

        mini_city.style.display = "none"


        star.style.display = "none"
        cloud.style.display = "none"
        cloud1.style.display = "none"
        cloud3.style.display = "none"
        stars.style.display = "none"


        menu_btn.style.display = "none";
        slide_con.style.display = "none";
        back_btn.style.display = "none";
        slide_con.style.left = "-50rem"
        audio.pause()

    } else {

        weather(text.value);

    }

})






const unixtime = (a) => {
    let unix = a
    var time = 0
    var date = new Date(unix * 1000);

    var hours = date.getHours() % 12
    var min = date.getMinutes()
    var sec = date.getSeconds()

    return time = `${hours} / ${min} / ${sec}`


}



//console.log(unixtime(1676874600))

const mini_con = (icon, des, mor, day, eve, ngt, sun_sets, sun_rises, maxi, mini, humi, spd, pres) => {

    // weather_icon = icon des = des weather_tempu = morn,day

    const img = {
        back: "./assets/res/back.png",
        weather_icons: `http://openweathermap.org/img/wn/${icon}@2x.png`,
        sunsets: "./assets/res/sunset.png",
        sunrises: "./assets/res/sunrise.png"
    }


    const div_weather_more = document.createElement('div')
    div_weather_more.style.display = "block"


    const div_weather = document.querySelector('.div_weather')
   
    const weather_back = document.createElement('img')
    const main_con = document.createElement('div');
    const main_con_temp = document.createElement('div')
    const weather_hum = document.createElement('div')

    // value for weather details for the elements //
    const des_weather = document.createElement('h2')
    const weather_icon = document.createElement('img')
    const weather_mor = document.createElement('h2');
    const weather_day = document.createElement('h2');
    const weather_eve = document.createElement('h2');
    const weather_ngt = document.createElement('h2');
    const weather_max = document.createElement('h1');
    const weather_min = document.createElement('h1');

    const weather_humd = document.createElement('h2')
    const weather_pres = document.createElement('h2')
    const weather_speed = document.createElement('h2')

    const sun_conn = document.createElement('div')
    const sun_setting = document.createElement('h1')
    const sun_rising = document.createElement('h1')

    const sun_set_img = document.createElement('img')
    const sun_rise_img = document.createElement('img')
    // set real value for that elements //
    des_weather.innerText = des
    weather_mor.innerText = `Mor  ${mor}°`
    weather_day.innerText = `Day  ${day}°`
    weather_eve.innerText = `Eve  ${eve}°`
    weather_ngt.innerText = `Ngt  ${ngt}°`

    weather_max.innerText = `MAX ${maxi}°`
    weather_min.innerText = `MIN ${mini}°`


    weather_humd.innerText = `Humidity :  ${humi} `
    weather_pres.innerText = `Pressure :  ${pres} `
    weather_speed.innerText = `Speed :  ${spd} km/hr`

    sun_setting.innerText = `Sunset : ${unixtime(sun_sets)} `
    sun_rising.innerText = `SunRise : ${unixtime(sun_rises)}`

    // °
    weather_icon.src = img.weather_icons
    weather_back.src = img.back

    sun_rise_img.src = img.sunrises
    sun_set_img.src = img.sunsets
    //set attribute for the elements //

    //class name for elements ///
    weather_back.setAttribute("class", "weather_back_con")
    div_weather_more.setAttribute("class", "div_weather_more")
    main_con.setAttribute("class", "main_con_weather")
    weather_icon.setAttribute("class", "weather_icon")
    des_weather.setAttribute("class", "des_weather")
    main_con_temp.setAttribute("class", "tempu_time")
    weather_hum.setAttribute("class", "feels_weather");
    sun_conn.setAttribute("class", "sun-conn")





    //appending the child //
    div_weather_more.appendChild(weather_back)
    div_weather_more.appendChild(main_con)
    main_con.appendChild(weather_icon)
    main_con.appendChild(des_weather)
    main_con.appendChild(main_con_temp)
    main_con_temp.appendChild(weather_mor)
    main_con_temp.appendChild(weather_day)
    main_con_temp.appendChild(weather_eve)
    main_con_temp.appendChild(weather_ngt)

    main_con_temp.appendChild(weather_max);
    main_con_temp.appendChild(weather_min);


    div_weather.appendChild(div_weather_more);
    main_con.appendChild(weather_hum);
    weather_hum.appendChild(weather_humd)
    weather_hum.appendChild(weather_pres)
    weather_hum.appendChild(weather_speed)
    div_weather_more.appendChild(sun_conn)
    sun_conn.appendChild(sun_rise_img)
    sun_conn.appendChild(sun_rising)
    sun_conn.appendChild(sun_set_img)
    sun_conn.appendChild(sun_setting)



    // function for the back btn //
    const screen = document.querySelector('.screen')
    weather_back.addEventListener('click', () => {
        div_weather_more.style.display = "none"
        screen.style.display = "none"
    })
    screen.addEventListener('click',()=>{
        div_weather_more.style.display = "none"
        screen.style.display = "none"

    })
}