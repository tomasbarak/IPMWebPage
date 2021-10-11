function auth(code){
    // Opciones de la petición (valores por defecto)
    const options = {
        method: "POST",
        credentials: "include",
        mode: "cors",
        
    };
  
  // Petición HTTP
  //let url = "https://ipmalumnstrimbackups.herokuapp.com/auth?code=" + code;
  let url = "http://127.0.0.1:3030/auth?code=" + code;
  fetch(url, options)
    .then(response => response.text())
    .then(data => {
      console.log(data)
    });
}