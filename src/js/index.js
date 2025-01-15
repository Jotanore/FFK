
const btnStandings = document.getElementById("standings");
const btnResults = document.getElementById("results");
const btnTeams = document.getElementById("teams");


const standingsBlock = document.querySelector("#standings__block");
const resultsBlock = document.querySelector("#results__block");
const teamsBlock = document.querySelector("#teams__block");


btnStandings.addEventListener("click", function(e){
    standingsBlock.classList.remove("hidden");
    resultsBlock.classList.add("hidden");
    teamsBlock.classList.add("hidden");

    btnStandings.classList.add("active");
    btnResults.classList.remove("active");
    btnTeams.classList.remove("active");
});
btnResults.addEventListener("click", function(e){
    standingsBlock.classList.add("hidden");
    resultsBlock.classList.remove("hidden");
    teamsBlock.classList.add("hidden");

    btnResults.classList.add("active");
    btnStandings.classList.remove("active");
    btnTeams.classList.remove("active");
});
btnTeams.addEventListener("click", function(e){
    standingsBlock.classList.add("hidden");
    resultsBlock.classList.add("hidden");
    teamsBlock.classList.remove("hidden");

    btnTeams.classList.add("active");
    btnStandings.classList.remove("active");
    btnResults.classList.remove("active");
});

