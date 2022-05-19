const btn = document.getElementById("btn");

let Run = (e) => {
  e.preventDefault();

  const input = document.getElementById("input").value;

  const request = new XMLHttpRequest();

  request.open(
    "GET",
    "https://www.metaweather.com/api/location/search/?query=" + input
  );

  request.send();

  const Show = () => {
    const error = document.querySelector("#error");
    if (request.readyState === 4) {
      let response = JSON.parse(request.responseText);
      console.log(response);
      console.log(error);

      if (response.length === 0 || response.length > 1) {
        error.style.display = "grid";
        error.innerHTML = `  <br> Sorry, Location is not in my database.<br> Hint : Search for Capital city of popular countries alone. <br> E.g Lagos `;
        response = null;
        console.log(response);
      } else {
        error.style.display = "none";
        response = JSON.parse(request.responseText);
      }

      const request2 = new XMLHttpRequest();

      request2.open(
        "GET",
        "https://www.metaweather.com/api/location/" + response[0].woeid
      );

      request2.send();

      const Show2 = () => {
        if (request2.readyState === 4) {
          const response2 = request2.responseText;
          console.log(JSON.parse(response2));
          const result = JSON.parse(response2);
          console.log(result.consolidated_weather);
          let weatherR = result.consolidated_weather;
          let prediction = weatherR[0].predictability + "%";
          let humidity = weatherR[0].humidity + "%";
          let wind = Math.round(weatherR[0].wind_speed) + "km/hr";
          let airPressure = weatherR[0].air_pressure + "mb";
          let maxTemp = weatherR[0].max_temp + "℃";
          let maxTemp1 = weatherR[1].max_temp + "℃";
          let maxTemp2 = weatherR[2].max_temp + "℃";
          let maxTemp3 = weatherR[3].max_temp + "℃";
          let maxTemp4 = weatherR[4].max_temp + "℃";
          let maxTemp5 = weatherR[5].max_temp + "℃";
          let minTemp = weatherR[0].min_temp + "℃";
          let wState = weatherR[0].weather_state_name;
          console.log(wState);

          const daate = new Date(2022, 04, 20);

          const daaate = document.querySelector("#daaate");
          daaate.innerHTML = daate.toDateString() + "<br>" + input;

          let day = daate.getDay();

          // console.log(day);
          let day2 = day + 1;
          if (day2 >= 7) {
            day2 = 0;
          }
          let day3 = day2 + 1;
          if (day3 >= 7) {
            day3 = 0;
          }
          let day4 = day3 + 1;
          if (day4 >= 7) {
            day4 = 0;
          }
          let day5 = day4 + 1;
          if (day5 >= 7) {
            day5 = 0;
          }
          let day6 = day5 + 1;
          if (day6 >= 7) {
            day6 = 0;
          }

          if (day === 0) {
            day = "Sun";
          } else if (day === 1) {
            day = "Mon";
          } else if (day === 2) {
            day = "Tue";
          } else if (day === 3) {
            day = "Wed";
          } else if (day === 4) {
            day = "Thur";
          } else if (day === 5) {
            day = "Fri";
          } else if (day === 6) {
            day = "Sat";
          }

          if (day2 === 0) {
            day2 = "Sun";
          } else if (day2 === 1) {
            day2 = "Mon";
          } else if (day2 === 2) {
            day2 = "Tue";
          } else if (day2 === 3) {
            day2 = "Wed";
          } else if (day2 === 4) {
            day2 = "Thur";
          } else if (day2 === 5) {
            day2 = "Fri";
          } else if (day2 === 6) {
            day2 = "Sat";
          }

          if (day3 === 0) {
            day3 = "Sun";
          } else if (day3 === 1) {
            day3 = "Mon";
          } else if (day3 === 2) {
            day3 = "Tue";
          } else if (day3 === 3) {
            day3 = "Wed";
          } else if (day3 === 4) {
            day3 = "Thur";
          } else if (day3 === 5) {
            day3 = "Fri";
          } else if (day3 === 6) {
            day3 = "Sat";
          }

          if (day4 === 0) {
            day4 = "Sun";
          } else if (day4 === 1) {
            day4 = "Mon";
          } else if (day4 === 2) {
            day4 = "Tue";
          } else if (day4 === 3) {
            day4 = "Wed";
          } else if (day4 === 4) {
            day4 = "Thur";
          } else if (day4 === 5) {
            day4 = "Fri";
          } else if (day4 === 6) {
            day4 = "Sat";
          }

          if (day5 === 0) {
            day5 = "Sun";
          } else if (day5 === 1) {
            day5 = "Mon";
          } else if (day5 === 2) {
            day5 = "Tue";
          } else if (day5 === 3) {
            day5 = "Wed";
          } else if (day5 === 4) {
            day5 = "Thur";
          } else if (day5 === 5) {
            day5 = "Fri";
          } else if (day5 === 6) {
            day5 = "Sat";
          }

          if (day6 === 0) {
            day6 = "Sun";
          } else if (day6 === 1) {
            day6 = "Mon";
          } else if (day6 === 2) {
            day6 = "Tue";
          } else if (day6 === 3) {
            day6 = "Wed";
          } else if (day6 === 4) {
            day6 = "Thur";
          } else if (day6 === 5) {
            day6 = "Fri";
          } else if (day6 === 6) {
            day6 = "Sat";
          }
          console.log(day, day2, day3, day4, day5);
        } else {
          console.log("still in progress");
        }
      };
      request2.addEventListener("readystatechange", Show2);
    } else {
      error.innerHTML =
        "Connection lost or Server is not available at the moment, try again later.";
    }
  };
  request.addEventListener("readystatechange", Show);
};

btn.addEventListener("click", Run);
