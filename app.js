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
        if(API.readyState === XMLHttpRequest.DONE){
            if(API.status == 200){
                console.log(API.responseText);
            }else{
                console.log('error');
            }
        }
    }
}
