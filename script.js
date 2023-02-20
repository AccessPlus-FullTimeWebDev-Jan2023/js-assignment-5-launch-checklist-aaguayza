

// Write your JavaScript code here!
window.addEventListener("load", function() {
    let inputform = document.getElementById("launchForm")
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    inputform.addEventListener("submit",function(event){
        if(validateInput(pilotName.value) === "Empty" || validateInput(copilotName.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoMass.value) === "Empty"){
            alert("All fields must be filled")
            event.preventDefault()
        }else if(validateInput(pilotName.value) === "Is a Number" || validateInput(copilotName.value) === "Is a Number"  ){
            alert("Pilot and copilot names must not include numbers")
            event.preventDefault()
        }else if(validateInput(fuelLevel.value) === "Not a Number" ||validateInput(cargoMass.value) === "Not a Number"){
            alert("Fuel level and cargo mass must be numbers")
            event.preventDefault()
        }
        });
    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});