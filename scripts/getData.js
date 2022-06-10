// Fetch all data from the Posts database

async function getPostsData() {
    const response = await fetch('https://paranormal-testimonies.herokuapp.com/posts');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data
}

// ********************************************
// POSTS FLOW

// Get a Single Post with its post index in the database
function getSinglePost(postIndex) {

    const cardPost = document.createElement("div");
    cardPost.setAttribute('class', 'card post');

    let postImage;

    if (postIndex.Giph === '') {
        postImage = ''
    } else {
        postImage = `<img src="${postIndex.Giph[0]}" alt="Giphy Image: ${postIndex.Giph[1]}"></img>`
    }

    cardPost.innerHTML =

        `
                <h3>${postIndex.Date}</h3>
                <h1>${postIndex.Title}</h1>
                <h2>${postIndex.Author}</h2>
                <p>${postIndex.Text}</p>

                ${postImage}
    
                <div class="d-flex justify-content-end">
                
                <button type="button" class="btn btn-secondary emoji-btn position-relative" id="eBtnA${postIndex.Id}">
                    👻
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="eCountA${postIndex.Id}">
                ${postIndex.Emoji[0]}
                </span>


                <button type="button" class="btn btn-secondary emoji-btn  position-relative" id="eBtnB${postIndex.Id}">
                    🛸
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="eCountB${postIndex.Id}">
                    ${postIndex.Emoji[1]}
                    </span>


                </button>

                <button type="button" class="btn btn-secondary emoji-btn  position-relative" id="eBtnC${postIndex.Id}">
                🦕
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="eCountC${postIndex.Id}">
                    ${postIndex.Emoji[2]}
                    </span>


                </button>
                                    
                </div>                  
                
                <button class="comms-btn btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasComments"
                aria-controls="offcanvasComments" id="commentsBtn${postIndex.Id}">
                SHOW COMMENTS
                </button>
                `

    let emojiBtns = cardPost.querySelectorAll('.emoji-btn')

    emojiBtns.forEach(emojiBtn => {

        addEmojiBtnFunctionality(emojiBtn)

    })

    let commentBtns = cardPost.querySelectorAll('.comms-btn');


    commentBtns.forEach(commentsBtn => {

        addCommentBtnFunctionality(commentsBtn)
    })

    document.querySelector('#posts-section').prepend(cardPost);

}

// Add functionality to Show Comments Button in Post
function addCommentBtnFunctionality(commentButton) {

    commentButton.addEventListener('click', event => {
        event.preventDefault()

        let commentGuide = document.querySelector('.commentGuide')
        commentGuide.id = `forPost${event.target.id.slice(11)}`
        getAllComments(commentGuide)

    })

}
// Add functionality to Emoji Buttons in Post
function addEmojiBtnFunctionality(emojiButton) {

    emojiButton.addEventListener('click', event => {
        event.preventDefault()

        const postId = event.target.id.slice(5)

        const emojiType = event.target.id.slice(4, 5)

        reactToPost(postId, emojiType)

    })
}

// Get all posts
async function getAllPosts() {

    document.getElementById('posts-section').innerHTML = '';

    postsData = await getPostsData();

    postsData.forEach(postNumber => {

        let sectionIndicator = document.querySelector('.section-indicator').id

        if (postNumber.Type === sectionIndicator) {

            getSinglePost(postNumber)
        }
    });
}

// ********************************************
// COMMENTS FLOW

// Get a Single Comment with the post and comment index from the database
function getSingleComment(commentIndex) {


    const Commentdiv = document.createElement("div");
    Commentdiv.setAttribute('class', 'comment');
    Commentdiv.innerHTML =
        `
                   <h3>${commentIndex.Date}</h3>
                    <h2>Author: ${commentIndex.Author}</h2>
                    <p>${commentIndex.Text}</p>
                    `
    document.querySelector('#comments-list').appendChild(Commentdiv)


}

// Get a get all comments for a single post from the database
async function getAllComments() {

    let postId = document.querySelector('.commentGuide').id.slice(7) - 1

    document.querySelector('#comments-list').innerHTML = ''

    postsData = await getPostsData();

    let commentArray = postsData[postId].Comments

    commentArray.forEach(comment => {

        getSingleComment(comment)
    });

}

// ********************************************
// Random Story Generator

function getRandomStory(e) {
    e.preventDefault();
    fetch('https://paranormal-testimonies.herokuapp.com/stories/random')
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

// ********************************************
// Retrieve GIF image from GIPHY

async function getGif(word) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=EuG6ds89Ls0W1mXGMR4fxgxbkHLEW3HI&limit=1&q=${word}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return [data.data[0].images.downsized_large.url, data.data[0].title];
}

module.exports = {
    getPostsData,
    getSinglePost,
    addCommentBtnFunctionality,
    addEmojiBtnFunctionality,
    getAllPosts,
    getSingleComment,
    getAllComments,
    getRandomStory,
    getGif
}
