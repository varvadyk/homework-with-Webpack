import '../dist/style.css'
import sum_products from './homework-with-variables-and-data-types-master/variables.js'
import renderNumber from './homework-with--cycles-and-branches-master/style.js'
import power from './homework-with-functions-js-master/function_realization.js'
import {
    students,
    couplStudents
} from './homework-with-array-master/array_realization.js'
import getRandomArray from './homework-with-array_two-master/array_tworealization.js'
import {
    students1,
    getSubjects
} from './homework-with-Objects-master/objects_realizations.js'
import {
    country_ukr,
    getMyTaxes
} from './homework-with---this-call-setInterval-master/this,call_realization.js'
import {
    object
} from './homework-with-classes-master/scripts.js'
import {

    generateBlocks
} from './homework---with--DOM-realization-master/scripts.js'
import {

    init_sound_button_click
} from './homework-with-events-master/scripts.js'
import {
    getRandomChinese
} from './homework-with-Promises-master/scripts.js'

import {
    idGenerator
} from './homework-with-generators-master/scripts.js'
import Photo from '../src/image/my_photo.jpg'
const hmw1_button = document.querySelector('.hmw1_button');
hmw1_button.addEventListener("click", function () {
    alert(`
 
    Сума всіх товарів: ${sum_products}`);

})
const hmw2_button = document.querySelector('.hmw2_button');
hmw2_button.addEventListener("click", function () {
    renderNumber();

})
const hmw3_button = document.querySelector('.hmw3_button');
hmw3_button.addEventListener("click", function () {
    alert(`Function #2 - Сalculates the degree of number::${power(2,10)}`);
})
const hmw4_button = document.querySelector('.hmw4_button');
hmw4_button.addEventListener("click", function () {
    alert(`${ couplStudents(students)}`)
})
const hmw5_button = document.querySelector('.hmw5_button');
hmw5_button.addEventListener("click", function () {

    alert(`Function #1 - Gets random numbers:${getRandomArray(15, 1, 100)}`);
})
const hmw6_button = document.querySelector('.hmw6_button');
hmw6_button.addEventListener("click", function () {

    alert(`${getSubjects(students1[0])}`)
})
const hmw7_button = document.querySelector('.hmw7_button');
hmw7_button.addEventListener("click", function () {

    alert(` Tax in the country is${getMyTaxes.call(country_ukr, 10000)}`)
})
const hmw8_button = document.querySelector('.hmw8_button');
hmw8_button.addEventListener("click", function () {

    alert(` ${object.getInfo()};
    Оцінки студента: ${object.allMarks};
    Студент отримав нову оцінку: ${object.marks = 5};
    Середня оцінка студента: ${object.getAverageMark()}`)
})
const hmw9_button = document.querySelector('.hmw9_button');
hmw9_button.addEventListener("click", function () {
    const generateBlocksInterval = () => {
        setInterval(() => {
            generateBlocks()
        }, 1000);
    }
    return generateBlocksInterval()
})
const hmw10_button = document.querySelector('.hmw10_button');
hmw10_button.addEventListener("click", function () {
    init_sound_button_click()
})
const hmw11_button = document.querySelector('.hmw11_button');
hmw11_button.addEventListener("click", function () {
    getRandomChinese(4).then(str => {
        alert(`  getRandomChinese is: ${str}`);
    });
})

const hmw13_button = document.querySelector('.hmw13_button');
hmw13_button.addEventListener("click", function () {
    alert(`Generator identificators ${idGenerator.next().value,idGenerator.next().value}`)
})
const imgTest = document.querySelector('.test')
const btn = document.querySelector('.btn_photo');

btn.addEventListener('click', function (event) {
    event.target.insertAdjacentHTML = addImg();
});

function addImg() {
    const imgSrc = `
    <img src=${Photo}  class="image_photo" alt="some text">
    `;
    imgTest.insertAdjacentHTML("afterbegin", imgSrc)
}