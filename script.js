// TODO: add code here

window.addEventListener("load", function(){

  let siteURL = "https://handlers.education.launchcode.org/static/astronauts.json";
  
  fetch(siteURL).then(function(response) {
    response.json().then(function(json) {
      const destination = document.getElementById("container");
      for (i = 0; i < json.length; i++)
        destination.innerHTML += `
         <div class="astronaut">
           <div class="bio">
             <h3>${json[i].firstName} ${json[i].lastName}</h3>
             <ul>
               <li>Hours in space: ${json[i].hoursInSpace}</li>
               <li>Active: ${json[i].active}</li>
               <li>Skills: ${json[i].skills}</li>
             </ul>
           </div>
           <img class="avatar" src=${json[i].picture}>
         </div>
        `;
    });
  });
});