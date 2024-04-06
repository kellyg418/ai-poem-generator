function displayPoem(response) {
    console.log("poem generated");
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    }); 
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "tf3af8fe40boeff366fbea30e0d4a794";
    let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line. Do not display each line together at any point. Make sure to follow the user instructions. Do not include a title for the poems."
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
    let apiURL= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);