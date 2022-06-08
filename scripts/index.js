// create a random username


// add new story section


const submitBtn = document.getElementById("submit-post-button");
let storyInput = document.getElementById("new-post-text");
let titleInput = document.getElementById("new-post-title")
let closeBtn = document.getElementById("close-new-post")


function createNewPost(e) {
    e.preventDefault();
    const div = document.createElement("div");
    div.setAttribute('class', 'card post');
    div.innerHTML =
                    `
                    <h3>${Date()}</h3>

                    <h1>${titleInput.value}</h1>

                    <h2>Anonymous</h2>

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
        dateInput.value="";
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
