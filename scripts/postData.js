    // Submit New Post via the Offcanvas Form "Tell your Story"

    function addNewPost(e) {
        e.preventDefault();

        let keyword;

        if (e.target['new-comment-gif'].value === '') {

            keyword = '?No Keyword@!#'

        } else {
            keyword = e.target['new-comment-gif'].value;
        }

        let gifUrl = getGif(keyword)

        gifUrl.then(function (result) {

            let gifValue;

            if (keyword === '?No Keyword@!#') {

                gifValue = ''
            } else {

                gifValue = result
            }

            const postData = {

                Date: Date().slice(4, 33),
                Type: e.target['storyType'].value,
                Title: e.target['new-post-title'].value,
                Author: e.target['new-post-alias'].value,
                Text: e.target['new-post-text'].value,
                Emoji: [0, 0, 0],
                Giph: gifValue,
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
                .then(closeNewPostBtn.click());


            e.target['new-post-title'].value = '';
            e.target['new-post-alias'].value = '';
            e.target['new-post-text'].value = '';
            e.target['new-comment-gif'].value = '';


            let sectionIndicator = document.querySelector('.section-indicator').id

            if (e.target['storyType'].value === sectionIndicator) {

                setTimeout(function () {

                    async function getLastPost() {

                        postsData = await getPostsData();
                        return postsData
                    }

                    let lastPost = getLastPost()

                    lastPost.then(function (result) {
                        getSinglePost(result[result.length - 1])
                    })

                }, 200);

            }

        })

    }

    // Submit New Comment via the Offcanvas Comment Section

    function addNewComment(e) {

        e.preventDefault();


        let commentGuide = document.querySelector('.commentGuide').id

        console.log(`CommentGuide: ${commentGuide.slice(7)}`)

        const commentData = {
            Date: Date().slice(4, 33),
            Author: e.target['new-comment-alias'].value,
            Text: e.target['new-comment-text'].value,
            Id: commentGuide.slice(7)
        };

        e.target['new-comment-alias'].value = ''
        e.target['new-comment-text'].value = ''

        const options = {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                "Content-Type": "application/json"
            }

        };

        fetch('http://localhost:5000/posts/Comment', options)
            .then(r => r.json())
            .catch(console.warn)


        setTimeout(function () {

            async function getLastComment() {

                postsData = await getPostsData();
                return postsData
            }

            let lastComment = getLastComment()

            lastComment.then(function (result) {

                let postId = document.querySelector('.commentGuide').id.slice(7) - 1
                let commentArray = result[postId].Comments;

                console.log(commentArray)
                getSingleComment(commentArray[commentArray.length - 1]);

            })

        }, 200);
    }

    // Random Nickname Generator

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

        for (let r = 0; r < userLength; r++) {
            let randomNumber = Math.floor(Math.random() * userCharacter.length);
            username += userCharacter[randomNumber];
            e.preventDefault();
            let text = document.getElementById("new-post-alias")
            text.value = username;

        }

    }

    // Get +1 reaction for Emoji

    async function reactToPost(post, emojiType) {

        let emojiNumeral;

        switch (emojiType) {
            case 'A':
                emojiNumeral = 0
                break;
            case 'B':
                emojiNumeral = 1
                break;
            default:
                emojiNumeral = 2
        }

        const reactionData = {
            post: post,
            emoji: emojiNumeral,
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(reactionData),
            headers: {
                "Content-Type": "application/json"
            }

        };

        fetch('http://localhost:5000/posts/emojiReaction', options)
            .then(r => r.json())
            .catch(console.warn)


        setTimeout(function () {

            async function getEmojiCounter() {

                postsData = await getPostsData();
                return postsData
            }

            let emojiCounter = getEmojiCounter()

            emojiCounter.then(function (result) {

                let selectedCounter = document.querySelector(`#eCount${emojiType}${post}`)
                let newCount = result[post - 1].Emoji[emojiNumeral];

                selectedCounter.innerHTML = newCount;

            })

        }, 100);

    }


    module.exports = {
        addNewPost,
        addNewComment,
        createRandomUserName,
        reactToPost
    }
