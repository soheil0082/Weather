const apikey = "53574d2403c018ff382b30bae246ac03";

let form = document.querySelector("form");
let input = document.querySelector("input");
let errorSection = document.querySelector("section");

form.addEventListener("submit", searchCity);

function searchCity(e) {
  e.preventDefault();
  let name = input.value;
  input.value = "";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}`
  )
    .then((response) => {
      if (response.ok) {
        errorSection.innerHTML = "";
      } else {
        errorSection.innerHTML = `
        <div class="alert">
         <span class="alert-info">
          <span class="alert-message">
           <div class="icon-container">
             <i
                class="fa-solid fa-triangle-exclamation"
                style="
                  color: #272829;
                  background-color: #ef974b;
                  font-size: 30px;
                  padding: 5px;
                "
             ></i>
            </div>
            <span class="error-text"> This city doesn't exist </span>
            <div class="icon-container">
              <i
                class="fa-solid fa-xmark"
                style="color: #ef974b; padding: 12px 11px"
              ></i>
            </div>
          </span>
        </span>
      </div>
`;
      }
    })
    .catch(function () {
      errorSection.innerHTML = `
        <div class="alert error">
        <span class="alert-info">
          <span class="alert-message">
            <div class="icon-container">
              <i
                class="fa-solid fa-triangle-exclamation"
                style="
                  color: #272829;
                  background-color: #b05150;
                  font-size: 30px;
                  padding: 5px;
                "
              ></i>
            </div>
            <span class="error-text" style="padding-right: 68px">
              No connection</span
            >
            <div class="icon-container">
              <i
                class="fa-solid fa-xmark"
                style="color: #b05150; padding: 12px 11px"
              ></i>
            </div>
          </span>
        </span>
      </div>
`;
    });
}
