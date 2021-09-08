function getTrim1(id){
    function onGotTrim1(){
        console.log(this.responseText)
    }
    var req = new XMLHttpRequest();
    req.open('GET', "https://ipmalumns.herokuapp.com/getfbtrim1?id=" + id)
    req.onreadystatechange = function (aEvt) {
        if (req.readyState === 4) {
            if(req.status === 200)
                console.log(this.responseText)
            else
                console.log("Error loading page\n");
        }
    };
    req.send()
}
function getId(){
    function onGotId(){
        console.log(this.responseText)
    }
    var req = new XMLHttpRequest()
    let surname1 = document.getElementById('surname-1');
    let surname2 = document.getElementById('surname-2');
    let surname3 = document.getElementById('surname-3');
    let name = document.getElementById('name');
    let secname = document.getElementById('secname');
    let surnameMaster;
    if(surname1 && !surname2 && !surname3){
        surnameMaster = surname1.value.replace(/\s/g, '').trim().toUpperCase();
        console.log('existe el 1. Valor: ' + surnameMaster)
    }else if(surname1 && surname2 && !surname3){
        surnameMaster = surname1.value.replace(/\s/g, '').trim().toUpperCase() + ' ' + surname2.value.replace(/\s/g, '').trim().toUpperCase();
        console.log('existe el 1 y 2. Valores: ' + surnameMaster)
    }else if(surname1 && surname2 && surname3){
        surnameMaster = surname1.value.replace(/\s/g, '').trim().toUpperCase() + ' ' + surname2.value.replace(/\s/g, '').trim().toUpperCase() + ' ' + surname3.value.replace(/\s/g, '').trim().toUpperCase();
        console.log('existe el 1, 2 y 3')
    }

    req.open('GET', "https://ipmalumns.herokuapp.com/returnid?name=" + name.value + '&secname=' + secname.value.trim() + '&surname=' + surnameMaster)
    req.onreadystatechange = function(){
        if (req.readyState === 4) {
            if(req.status === 200)
                console.log(this.responseText)
            else
                console.log("Error loading page\n");
        }
    };

    req.send();
}