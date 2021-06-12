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
    constructor(name){
        this.name = name;
    }

    ACTION_ADD = (text) => {
        const tag = document.createElement(this.name);
        tag.innerHTML = `추가될 텍스트는 ${text}입니다.`;
        document.body.append(tag);
    }
}