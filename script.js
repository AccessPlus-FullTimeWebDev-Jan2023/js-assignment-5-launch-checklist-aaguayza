
// Write your JavaScript code here!
window.addEventListener("load", function() {
    let inputform = document.getElementById("launchForm")
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let itemList = document.getElementById("faultyItems")
    let planetTarget = document.getElementById("missionTarget")
    let statusCheck = document.getElementById("launchStatusCheck")

    itemList.style.visibility = "hidden";
    // statusCheck.style.visibility = "hidden";
    // document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch"
    // document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch"

    inputform.addEventListener("submit",function(event){
        event.preventDefault()
       

        if(validateInput(pilotName.value) === "Empty" || validateInput(copilotName.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoMass.value) === "Empty"){
            alert("All fields must be filled")
        }else if(validateInput(pilotName.value) === "Is a Number" || validateInput(copilotName.value) === "Is a Number"  ){
            alert("Pilot and copilot names must not include numbers")
        }else if(validateInput(fuelLevel.value) === "Not a Number" ||validateInput(cargoMass.value) === "Not a Number"){
            alert("Fuel level and cargo mass must be numbers")
        }else{
            formSubmission(window.document, itemList, pilotName.value, copilotName.value, Number(fuelLevel.value), Number(cargoMass.value) )
        }
        });


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets)
       addDestinationInfo(document,planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
   })
   
});