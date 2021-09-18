function auth(code){
    var req = new XMLHttpRequest()
        setLoading(true);
        req.open('GET', "https://ipmalumns.herokuapp.com/auth?code=" + code)
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    console.log(this.response)
                    sessionStorage.setItem('authorized', "yes");
                    window.location = "search.html"
                }
                else {
                    console.log("Error loading page\n");
                }
            }
            setLoading(false);
        };

        req.send();
}