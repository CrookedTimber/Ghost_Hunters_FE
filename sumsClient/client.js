// create a random username

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
            text.value = `user: ${username}`;

        }

    }

    randomUserBtn.addEventListener("click", createRandomUserName)



// add new story section


const submitBtn = document.getElementById("submit-post-button");
let storyInput = document.getElementById("new-post-text");
let titleInput = document.getElementById("new-post-title")
let closeBtn = document.getElementById("close-new-post")
//alias imput added
let aliasInput = document.getElementById("new-post-alias")



function createNewPost(e) {
    e.preventDefault();
    const div = document.createElement("div");
    div.setAttribute('class', 'card post');
    div.innerHTML =
                    `
                    <h3>${Date()}</h3>

                    <h1>${titleInput.value}</h1>

                    <h2>${aliasInput.value}</h2>

                    <p>${storyInput.value}</p>


                    <div class="d-flex justify-content-end">

                    
                    <button type="button" class="btn btn-secondary emoji-btn position-relative">
                        👻
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        0
                    </span>
                    <button type="button" class="btn btn-secondary emoji-btn  position-relative">
                        🛸
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        0
                        </span>
                    </button>

                    <button type="button" class="btn btn-secondary emoji-btn  position-relative">
                       🦕
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        0
                        </span>
                    </button>
                    
                    
                    </div>
                    
                    
                    <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasComments"
                    aria-controls="offcanvasComments">
                    SHOW COMMENTS
                    </button>

                    `
            const container = document.getElementById('posts-section')

            container.prepend(div)

            closeBtn.click();

        titleInput.value="";
        aliasInput.value="";
        storyInput.value="";
}


submitBtn.addEventListener("click", createNewPost)





let comment = document.getElementById("new-comment-text");
let submitCommentBtn = document.getElementById("postComment");
function submitComment(e) {
    e.preventDefault();
    const div = document.createElement("div");
    div.setAttribute('class', 'comment');
    div.innerHTML =
                    `
                    <h4>Username</h4>
                    <p>${comment.value}</p>
                    `
            const containerComment = document.getElementById('comments-list')
            containerComment.appendChild(div)
        comment.value="";
}
submitCommentBtn.addEventListener("click", submitComment)
