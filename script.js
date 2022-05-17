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
    if (request.readyState === 4) {
      let response = JSON.parse(request.responseText);
      console.log(response);
      const error = document.querySelector("#error");
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
          let date = weatherR[0].applicable_date;
          console.log(date);

          const request3 = new XMLHttpRequest();
          request3.open(
            "GET",
            "https://www.metaweather.com/api/location/" +
              response[0].woeid + "/" +
              date
          );

          request3.send()
        } else {
          console.log("still in progress");
        }
      };
      request2.addEventListener("readystatechange", Show2);
    }
  };
  request.addEventListener("readystatechange", Show);
};

btn.addEventListener("click", Run);
