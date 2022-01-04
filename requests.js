function getTrim1(id) {
    var req = new XMLHttpRequest();
    req.open('GET', "https://ipmalumns.herokuapp.com/getfbtrim1?id=" + id)
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status === 200) {
                let stringResponse = this.responseText;
                if (stringResponse) {
                    let stringResponse = this.responseText;
                    console.log(stringResponse)

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
    setMakingBckpNtfVisibility(true);
    setMakingBckpNtf(true)
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
                setMakingBckpNtfVisibility(false);
            }
            else {
                console.log("Error loading page\n");
            }
        }
    };
    req.send()
}
function makeBackgroundBackup(id){
    setMakingBckpNtfVisibility(true);
    setMakingBckpNtf(true)
    var req = new XMLHttpRequest();
    console.log("requesting from my database");
    req.open('GET', "https://ipmalumns.herokuapp.com/trim1bckp?id=" + id)
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status === 200) {
                setMakingBckpNtfVisibility(false);
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

    function setMakingBckpNtf(makingBackup) {
        if (window.location.pathname.includes('trim1.html')) {
            if (makingBackup) {
                document.getElementById('action-notifier').classList.remove('contracted')
                document.getElementById('action-notifier').classList.add('extended')
                document.getElementById('action-ntf-text').classList.remove('text-no-visible')
                document.getElementById('action-ntf-text').classList.add('text-visible')

                setTimeout(function () {
                    setMakingBckpNtf(false)
                }, 5000)
            } else {
                document.getElementById('action-notifier').classList.remove('extended')
                document.getElementById('action-notifier').classList.add('contracted')
                document.getElementById('action-ntf-text').classList.remove('text-visible')
                document.getElementById('action-ntf-text').classList.add('text-no-visible')
            }
        }
    }
    function setMakingBckpNtfVisibility(isVisible){
        if(window.location.pathname.includes('trim1.html')){
            if(isVisible){
                document.getElementById('action-notifier').classList.remove('opacity0')
                document.getElementById('action-notifier').classList.add('opacity1')
            }else{
                document.getElementById('action-notifier').classList.remove('opacity1')
                document.getElementById('action-notifier').classList.add('opacity0')
            }
        }
    }