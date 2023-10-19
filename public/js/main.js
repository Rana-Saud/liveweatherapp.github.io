const searchCityName = document.getElementById('searchCityName');
let submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const middle_layer = document.getElementById('middle_layer');
const pressure = document.getElementById('pressure');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const feel = document.getElementById('feel');
const weather__info = document.getElementById('weather__info');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = searchCityName.value;
    if (cityVal === '') {
        city_name.innerHTML = 'Plz write the name before search';
        middle_layer.classList.add('data_hide');
        weather__info.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c3290a02dcee5c751182701b7435f1dd&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);
            city_name.innerHTML = `${arrData[0].name} ${arrData[0].sys.country}`;
            temp.innerHTML = arrData[0].main.temp;
            pressure.innerHTML = arrData[0].main.pressure;
            humidity.innerHTML = arrData[0].main.humidity + '%';
            wind.innerHTML = arrData[0].wind.speed + ' m/s';
            feel.innerHTML = arrData[0].main.feels_like + '℃';

            let tempMode = arrData[0].weather[0].main;

            if (tempMode == "Clear") {
                temp_status.innerHTML =
                    "<i class='fa fa-sun' style='color:#eccc68'></i>";
            } else if (tempMode == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fa fa-cloud' style='color:#f1f2f6'></i>";
            } else if (tempMode == "Rain") {
                temp_status.innerHTML =
                    "<i class='fa fa-cloud-rain' style='color:#a4b0be'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fa fa-cloud' style='color:#f1f2f6'></i>";
            }

            middle_layer.classList.remove('data_hide');
            weather__info.classList.remove('data_hide');

        } catch (error) {
            city_name.innerHTML = 'Plz enter city name properly';
            middle_layer.classList.add('data_hide');
        }
    }
}

submitBtn?.addEventListener('click', getInfo);