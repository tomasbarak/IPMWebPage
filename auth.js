function auth(code){
    var req = new XMLHttpRequest()
        setLoading(true);
        req.open('POST', "https://ipmalumnstrimbackups.herokuapp.com/auth?code=" + code)
        //req.open('POST', "http://127.0.0.1:3030/auth?code=" + code)
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    console.log(this)
                }
                else {
                    console.log("Error loading page\n");
                }
            }
            setLoading(false);
        };
        req.send();
}