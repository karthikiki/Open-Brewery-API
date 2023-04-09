let title = document.createElement("div");
title.innerHTML = `<div class="border border-light display-3 text-center container p-3 my-3  ">Open Brewery</div>`;

let div1 = document.createElement("div");
div1.innerHTML = `<div class="text-center mt-5 border-dark">


<input type="text" class="center"id="txt" placeholder="Enter Name">
<button type="button" class="btn btn-secondary btn-sm" onclick="brew()">
Search</button>
<div class="text-muted"> Some of list of company breweries are given below and you can also search</div>
<div id="brewSer" class="row justify-content-evenly mt-5 "></div>
</div>
`;
document.body.append(title);
document.body.append(div1);
document.body.classList.add("alert-success"); //background color
//search
async function brew() {
  try {
    let nameSearch = document.getElementById("txt");
    let search = document.getElementById("brewSer");
    search.innerHTML = "Related to your search:";
    let data = await (
      await fetch(`https://api.openbrewerydb.org/breweries`)
    ) //Name based api
      .json();
  
    data
      .filter((e) => e.name == nameSearch.value)
      .forEach((e) => {
        search.innerHTML += `<div class="card mt-5" style="width: 18rem;">
        <div><h5 class="card-title"> ${e.name}</h5> </div>
        <img src="./img/img (4).jpg"  class="card-img-top" alt="...">
        <div class="card-body">
          
          <p class="card-text">Name : ${e.name}</p>
          <p class="card-text">type : ${e.brewery_type}</p>
          <p class="card-text">address:${e.street},${e.state}</p>
          <a href="${e.website_url}" class="btn btn-link">${e.website_url}</a>
          <p class="card-text link">phone :${e.phone}</p>
          
        </div>
      </div>`;
      });
  } catch (e) {
    document.body.innerHTML=`${e}`;
  }
}
//listApi
async function listBreweries() {
  try {
    let search = document.getElementById("brewSer");
    let data = await (
      await fetch("https://api.openbrewerydb.org/breweries")
    ) //ListApi
      .json();
    data.forEach((e) => {
      search.innerHTML += `
        <div class="card border-light bg-transparent mb-3" style="width: 21rem;">
          <img src="brewery.jpg"  class="img-fluid rounded mx-auto d-block" alt="just click">
          <div class="card-body">
            <div><h5 class="card-title"> ${e.name}</h5> </div>
            <p class="card-text">Name : ${e.name}</p>
            <p class="card-text">type : ${e.brewery_type}</p>
            <p class="card-text">address:${e.street},${e.state}</p>
            <a href="${e.website_url}" class="btn btn-link">${e.website_url}</a>
            <p class="card-text link">phone :${e.phone}</p>
            
          </div>
        </div>`;
    });
  } catch (e) {
    document.body.innerHTML=`${e}`;
  }
}

listBreweries();
