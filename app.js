const TAGNAME_H1 = document.createElement('h1');
const TAGNAME_H2 = document.createElement('h2');
const TAGNAME_H3 = document.createElement('H3');
const TAGNAME_H4 = document.createElement('H4');
const TAGNAME_SPAN = document.createElement('SPAN');

window.addEventListener('load', function () {

    const form = this.document.querySelector('#user-form');
    let a = 1;
    form.addEventListener('submit', onNameSubmit, { capture: false, once: true, passive: false })

});

const onNameSubmit = (e, a) => {
    e.preventDefault();

    const API = new XMLHttpRequest();
    
    API.open('GET', './amIJSON.json', true);

    API.send();

    API.onreadystatechange = e => {
        if (API.readyState === XMLHttpRequest.DONE) {
            if (API.status == 200) {
                let data = JSON.parse(API.response);
                console.log(typeof data, data);
                // node로 받아오기 시도해보기
                for (let key in data) {
                    try {
                        const TAGNAME_P = document.createElement('P');
                        TAGNAME_P.innerHTML = data[key];
                        document.body.append(TAGNAME_P);
                    } catch (error) {
                        console.log('tag add error');
                    } finally {

                    }
                }

            } else {
                console.log('error');
            }
        }
    }
}

const INT_MULTIPLY = x => x * x;

class ADD_TAG {
    constructor(name) {
        this.name = name;
    }

    ADD = (text) => {
        const tag = document.createElement(this.name);

        tag.innerHTML = `추가될 텍스트는 ${text}입니다.`;

        tag.addEventListener('click', e => console.log(e));

        document.body.append(tag);
    }

}

class SEARCH extends ADD_TAG {
    SEARCH() {
        console.log('GOOD');
        console.log(this.ADD);
    }
}

// listConsole('태복', '고양시', '가', '나', '다', 1);
listConsole = (name, address, ...arr) => {
    const isOBJ = {
        name : name,
        address : address,
        etc : new Array()
    };

    console.log(isOBJ.etc.push(...arr));

    try {
        console.log(isOBJ);
    } catch (error) {

    }
}

const list = ['list1', 'list2', 'list3'];
const listSecond = [...list, 'list4'];
const fruit = ['apple', 'banana', 'melon'];
const a = [1, 2, 3, 4, 5];

whatIsReduce = (arg) => {
    arg.reduce(
        (accumulator, currentValue, currentIndex, array) => {
            console.log(currentIndex, currentValue);
            console.log(accumulator);
            return accumulator + currentValue + ', ';
            // HELP..
            // 마지막 요소 추가 안됨
        },
    'basic ');
}