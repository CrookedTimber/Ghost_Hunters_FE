const horrorBtn = document.getElementById("storyGen")



function getRandomStory(e) {
    e.preventDefault();
    fetch('http://localhost:5502/stories/random')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.text();
    })
    .then(story => {
        document.getElementById("scary").textContent = story;
    })
    .catch(error => {
        console.log(error)
    });
}

horrorBtn.addEventListener('click', getRandomStory)
