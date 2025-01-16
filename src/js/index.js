document.addEventListener('DOMContentLoaded', onDOMContentLoaded);


function onDOMContentLoaded(e){
    //Set the buttons
    const btnStandings = document.getElementById("standings");
    const btnResults = document.getElementById("results");
    const btnTeams = document.getElementById("teams");
    //Set the data blocks
    const standingsBlock = document.querySelector("#standings__block");
    const resultsBlock = document.querySelector("#results__block");
    const teamsBlock = document.querySelector("#teams__block");
    //Set the collections of data
    const blocks = [standingsBlock, resultsBlock, teamsBlock];
    const buttons = [btnStandings, btnResults, btnTeams];
    //Set the listeners on the buttons and the actions
    btnStandings.addEventListener("click", () => switchActiveSection(standingsBlock, btnStandings, blocks, buttons));
    btnResults.addEventListener("click", () => switchActiveSection(resultsBlock, btnResults, blocks, buttons));
    btnTeams.addEventListener("click", () => switchActiveSection(teamsBlock, btnTeams, blocks, buttons));

}
/**
 * 
 * Add hidden class to data blocks
 * Remove the active class from buttons
 * Show active data block by removing hidden class
 * Set active button by adding active class
 * 
 * @param {Var} activeBlock 
 * @param {Var} activeButton 
 * @param {Array} blocks 
 * @param {Array} buttons 
 */
function switchActiveSection(activeBlock, activeButton, blocks, buttons) {

    blocks.forEach(block => block.classList.add("hidden"));
    buttons.forEach(button => button.classList.remove("active"));

    activeBlock.classList.remove("hidden");
    activeButton.classList.add("active");
}