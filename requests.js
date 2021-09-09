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
    let surname = document.getElementById('surname-1').value.trim();
    let name = document.getElementById('name');
    let secname = document.getElementById('secname');

    req.open('GET', "https://ipmalumns.herokuapp.com/returnid?name=" + name.value + '&secname=' + secname.value.trim() + '&surname=' + surname)
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