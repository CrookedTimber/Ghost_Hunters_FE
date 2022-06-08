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
        Text: e.target['new-comment-text'].value
    };

  
    


})




