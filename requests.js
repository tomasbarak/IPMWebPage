function getTrim1(id) {
    var req = new XMLHttpRequest();
    req.open('GET', "https://ipmalumns.herokuapp.com/getfbtrim1?id=" + id)
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status === 200) {
                let stringResponse = this.responseText;
                if (stringResponse) {
                    let stringResponse = this.responseText;
                    let JSONResponse = JSON.parse(stringResponse);
                    constructTable(JSONResponse);
                    console.log(this.responseText)
                    setLoading(false)
                } else {
                    alert("haciendo backup")
                    getTrim1Bckp(sessionStorage.getItem("id"))
                }

            }
            else {
                console.log("Error loading page\n");
            }
        }
    };
    req.send()
}
function getTrim1Bckp(id) {
    var req = new XMLHttpRequest();
    console.log("requesting from my database");
    req.open('GET', "https://ipmalumns.herokuapp.com/trim1bckp?id=" + id)
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status === 200) {
                let stringResponse = this.responseText;
                let JSONResponse = JSON.parse(stringResponse);
                constructTable(JSONResponse);
                console.log(this.responseText)
                setLoading(false)
            }
            else {
                console.log("Error loading page\n");
            }
        }
    };
    req.send()
}
    function getId() {
        var req = new XMLHttpRequest()
        let surname = document.getElementById('surname').value.trim();
        let name = document.getElementById('name');
        let secname = document.getElementById('secname');
        setLoading(true);
        req.open('GET', "https://ipmalumns.herokuapp.com/returnid?name=" + name.value + '&secname=' + secname.value.trim() + '&surname=' + surname)
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    console.log(this.responseText)
                    sessionStorage.setItem('id', this.responseText);
                    window.location = "trim1.html"
                }
                else {
                    console.log("Error loading page\n");
                }
            }
            setLoading(false);
        };

        req.send();
    }
    function setLoading(isLoading) {
        let loadingElement = document.getElementById('loading-page');
        if (isLoading) {
            loadingElement.className = 'elementShow';
        } else {
            loadingElement.className = 'elementHide';
        }
    }