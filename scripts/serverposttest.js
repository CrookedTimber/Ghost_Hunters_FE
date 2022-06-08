let newPostForm = document.querySelector('#new-post-form');
let closeNewPostBtn = document.querySelector('#close-new-post');
let newCommentForm = document.querySelector('#new-comment-form')


// Submit New Post via the Offcanvas Form "Tell your Story"

newPostForm.addEventListener('submit', e => {
    e.preventDefault();

    const postData = {

        Date: Date().slice(4,33),
        Title: e.target['new-post-title'].value,
        Author: e.target['new-post-alias'].value,
        Text: e.target['new-post-text'].value,
        Emoji: [0, 0, 0],
        // Giph: e.target.giph.value,
        Comments: [],
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json"
        }

    };

    fetch('http://localhost:5000/posts/Add', options)
        .then(r => r.json())
        .catch(console.warn)

    closeNewPostBtn.click()

})


newCommentForm.addEventListener('submit', e => {
    e.preventDefault();

    let commentGuide = document.querySelector('.commentGuide').id

    console.log(`CommentGuide: ${commentGuide.slice(7)}`)

    const commentData = {
        Date: Date().slice(4,33),
        Author: e.target['new-comment-alias'].value,
        Text: e.target['new-comment-text'].value,
        Id: commentGuide.slice(7)
    };

    console.log(commentData)


    const options = { 
        method: 'POST',
        body: JSON.stringify(commentData), 
        headers: {
            "Content-Type": "application/json"
        }

    };

    fetch('http://localhost:5000/posts/newComment', options)
        .then(r => r.json())
        .catch(console.warn)


})

// Random Nickname Generator

let randomUserBtn = document.getElementById("createUserName")

function createRandomUserName(e) {
    let userCharacter = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "u",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "!",
        "&",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
    ];
    let userLength = 7
    let username = [];

        for (let r = 0; r < userLength; r++){
            let randomNumber = Math.floor(Math.random()*userCharacter.length);
            username += userCharacter[randomNumber];
            e.preventDefault();
            let text = document.getElementById("new-post-alias")
            text.value = username;

        }

    }

    randomUserBtn.addEventListener("click", createRandomUserName)

