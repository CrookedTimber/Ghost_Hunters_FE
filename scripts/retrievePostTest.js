getAllPosts()

async function getAllPosts() {
    const response = await fetch('http://localhost:5000/posts');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    data.forEach(element => {

        const cardPost = document.createElement("div");
        cardPost.setAttribute('class', 'card post');
        cardPost.innerHTML =

            `
                    <h3>${element.Date}</h3>
                    <h1>${element.Title}</h1>
                    <h2>${element.Author}</h2>
                    <p>${element.Text}</p>


                    <div class="d-flex justify-content-end">

                    
                    <button type="button" class="btn btn-secondary emoji-btn position-relative" id="eBtnA${element.Id}">
                        👻
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="eCountA${element.Id}">
                    ${element.Emoji[0]}
                    </span>
                    <button type="button" class="btn btn-secondary emoji-btn  position-relative" id="eBtnB${element.Id}">
                        🛸
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="eCountB${element.Id}">
                        ${element.Emoji[1]}
                        </span>
                    </button>

                    <button type="button" class="btn btn-secondary emoji-btn  position-relative" id="eBtnC${element.Id}">
                       🦕
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
                        ${element.Emoji[2]}
                        </span>
                    </button>
                                        
                    </div>
                    
                    
                    <button class="comms-btn btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasComments"
                    aria-controls="offcanvasComments" id="commentsBtn${element.Id}">
                    SHOW COMMENTS
                    </button>

                    `
        const container = document.getElementById('posts-section');

        container.prepend(cardPost);



    });


    let emojiBtns = document.querySelectorAll('.emoji-btn');


    emojiBtns.forEach(btn => {

        btn.addEventListener('click', event => {

            console.log(event.target.id.slice(5))


        })

    })


    let commentBtns = document.querySelectorAll('.comms-btn');


    commentBtns.forEach(btn => {

        btn.addEventListener('click', event => {

            let commentGuide = document.querySelector('.commentGuide')
            commentGuide.id = `forPost${event.target.id.slice(11)}`
            getComments(commentGuide.id.slice(7))

        })

    })



}


async function getComments(commentGuide) {

    let commentList = document.querySelector('#comments-list')

    commentList.innerHTML = ''



    const response = await fetch('http://localhost:5000/posts');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    console.log(commentGuide)

    let commentArray = data[commentGuide - 1].Comments


    commentArray.forEach(element => {

        const Commentdiv = document.createElement("div");
        Commentdiv.setAttribute('class', 'comment');
        Commentdiv.innerHTML =
            `
                     <h3>${element.Date}</h3>
                    <h2>${element.Author}</h2>
                    <p>${element.Text}</p>
                    `


        commentList.appendChild(Commentdiv)







    });

















}
