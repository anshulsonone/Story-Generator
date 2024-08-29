const characters = ['John', 'Alice', 'Bob', 'Eva', 'Zara', 'Quincy'];
const actions = ['discovered', 'lost', 'found', 'destroyed', 'befriended', 'transformed'];
const locations = ['in a forest', 'on a spaceship', 'underwater', 'in a parallel universe', 'at a carnival', 'inside a dream'];

const characterModifiers = ['brave', 'eccentric', 'mysterious', 'playful'];
const actionModifiers = ['unexpectedly', 'comically', 'dramatically', 'silently'];
const locationModifiers = ['amidst a chaotic storm', 'during a cosmic event', 'inside a time loop', 'on a flying carpet'];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateStory() {
    const numSentences = Math.floor(Math.random() * 4) + 1;

    let story = '';
    for (let i = 0; i < numSentences; i++) {
        const userCharacter = document.getElementById('characterInput').value || getRandomElement(characters);
        const characterModifier = getRandomElement(characterModifiers);
        const actionModifier = getRandomElement(actionModifiers);
        const locationModifier = getRandomElement(locationModifiers);

        const character = getRandomElement(characters);
        const action = getRandomElement(actions);
        const location = getRandomElement(locations);

        story += `${userCharacter} and the ${characterModifier} ${character} ${actionModifier} ${action} ${locationModifier} ${location}. `;
    }

    document.getElementById('storyDisplay').innerText = story;
}

document.getElementById('generateButton').addEventListener('click', generateStory);
