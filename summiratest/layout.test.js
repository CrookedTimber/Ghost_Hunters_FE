/** @jest-environment jsdom */
const fs = require('fs');
const path = require('path');
const { isTypedArray } = require('util/types');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML =html.toString();

    })

    test('it has a author for the image in the header', () => {
        let author = document.querySelector('.image-credit');
        expect(author.textContent).toContain('Photo by Erik McLean')
    })

    test('it has to mention that it generates a random nickna,e', () => {
        let input = document.querySelector('#createUserName');
        expect(input.textContent).toContain('Generate Random Nickname')
    })

     test('it has a comment section', ()=> {
         let comment = document.querySelector('#forPost');
         expect(comment).toBeTruthy();
     })

     
})
