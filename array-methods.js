/*---STEP-1---------------------------------------------------------------------------------------------------*/

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const planetEl = document.getElementById("planets") /* creates new DOM reference by referenceing section id from DOM*/
const planetSection = function (planet) {       /* declares function to change values in array, assign section element to them, and add to DOM */
    const addToSection = document.createElement("section")      /* creates section element */
    addToSection.textContent = `${planet}`      /* creates string content with values from array */
    planetEl.appendChild(addToSection);     /* adds created section element to DOM */
    console.log(planet);
}

planets.forEach(planetSection); /* Using a for Each funciton to iterate through the array planets and call/invoke planetSection on each value of array */

/*---STEP-2-------------------------------------------------------------------------------------------------*/

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const UCplanets = planets.map(function (planet) {
    return planet.charAt(0).toUpperCase().concat(planet.slice(1).toLocaleLowerCase());
})
console.log(UCplanets);

/*---STEP-3-------------------------------------------------------------------------------------------*/

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const withLetterE = planets.filter(planet => {
    const eInName = planet.includes('e')
    return eInName
})

console.log(withLetterE);

/*---STEP-4-------------------------------------------------------------*/

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]