// ********************************************
// SETUP

const closeNewPostBtn = document.querySelector('#close-new-post');
const horrorBtn = document.getElementById("storyGen")
const newCommentForm = document.querySelector('#new-comment-form')
const newPostForm = document.querySelector('#new-post-form');
const randomUserBtn = document.getElementById("createUserName")

// Bind event listeners

horrorBtn.addEventListener('click', getRandomStory)
horrorBtn.addEventListener('click', getRandomStory)
newCommentForm.addEventListener('submit', addNewComment)
newPostForm.addEventListener('submit', addNewPost)
randomUserBtn.addEventListener("click", createRandomUserName)

// Fetch all posts as soon as app is loaded
getAllPosts()
// ********************************************