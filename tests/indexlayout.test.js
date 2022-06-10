/** @jest-environment jsdom */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('header', () => {
        describe('header image', () => {
            let headImage;

            beforeEach(() => {
                headImage = document.querySelector('.card-img')
            })

            test('if there is a header image', () => {
                expect(headImage).toBeTruthy();
            })

            beforeEach(() => {
                indicator = document.querySelector('.section-indicator')
            })

            test('if there is an indicator for the Ghost section', () => {

                expect(indicator.id).toBe('Ghost');

            })


        })
    })


})
