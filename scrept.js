
let outputDiv = document.getElementById("output")
let searchBtn = document.getElementById("btn");
let countryInp = document.getElementById("inp");

// const datas = {lat:"1234", lon:"7777"}

async function call (datas){
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datas)
    };
    const response = await fetch('/post_server', options);
    const dat = await response.json();
    console.log(dat)
    const whatToShow = Object.values(dat)
    console.log(whatToShow)
    outputDiv.innerHTML = whatToShow

};


searchBtn.addEventListener("click", () => {
    let Name = countryInp.value;
    const profile = {
        name: Name,
      }
    console.log(profile);
    call(profile);
    // Code to send data to the API

});