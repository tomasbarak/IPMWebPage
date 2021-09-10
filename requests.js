function getTrim1(id){
    var req = new XMLHttpRequest();
    req.open('GET', "https://ipmalumns.herokuapp.com/getfbtrim1?id=" + id)
    req.onreadystatechange = function (aEvt) {
        if (req.readyState === 4) {
            if(req.status === 200){
                let stringResponse = this.responseText;
                if(stringResponse){
                    let body = document.getElementsByTagName("body")[0];
                let JSONResponse = JSON.parse(stringResponse);
                for(let key in JSONResponse){
                    let createdA = document.createElement('a');
                    createdA.innerText = key + '\n\n' + JSONResponse[key][1]+ '\n\n' + JSONResponse[key][0] + '\n\n';
                    createdA.style.color = "white";
                    createdA.style.marginBottom = "25px";
                    body.appendChild(createdA);
                } 
                console.log(this.responseText)
                setLoading(false)
                }else{
                    alert("haciendo backup")
                    getTrim1Bckp(sessionStorage.getItem("id"))
                }
                
            }
            else{
                console.log("Error loading page\n");
            }      
        }
    };
    req.send()
}
function getTrim1Bckp(id){
    var req = new XMLHttpRequest();
    req.open('GET', "https://ipmalumns.herokuapp.com/trim1bckp?id=" + id)
    req.onreadystatechange = function (aEvt) {
        if (req.readyState === 4) {
            if(req.status === 200){
                let stringResponse = this.responseText;
                let body = document.getElementsByTagName("body")[0];
                let JSONResponse = JSON.parse(stringResponse);
                for(let key in JSONResponse){
                    let createdA = document.createElement('a');
                    createdA.innerText = key + '\n\n' + JSONResponse[key][1]+ '\n\n' + JSONResponse[key][0] + '\n\n';
                    createdA.style.color = "white";
                    createdA.style.marginBottom = "25px";
                    body.appendChild(createdA);
                } 
                console.log(this.responseText)
                setLoading(false)
            }
            else{
                console.log("Error loading page\n");
            }      
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
    setLoading(true);
    req.open('GET', "https://ipmalumns.herokuapp.com/returnid?name=" + name.value + '&secname=' + secname.value.trim() + '&surname=' + surname)
    req.onreadystatechange = function(){
        if (req.readyState === 4) {
            if(req.status === 200){
                console.log(this.responseText)
                sessionStorage.setItem('id', this.responseText);
                window.location = "trim1.html"
            }
            else{
                console.log("Error loading page\n");
            }
        }
        setLoading(false);
    };

    req.send();
}
function setLoading(isLoading){
    let loadingElement = document.getElementById('loading-page');
    if(isLoading){
        loadingElement.className = 'elementShow';
    }else{
        loadingElement.className = 'elementHide';
    }
}