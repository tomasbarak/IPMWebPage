function constructTable(JSONResponse){
    let col = ["Materia", "Calificación", "Observación"]
    let table = document.createElement("table");

    let tr = table.insertRow(-1);

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (let i in JSONResponse) {

        tr = table.insertRow(-1);
            console.log(JSONResponse[i])
            let tabCell = tr.insertCell(-1);
            let tabCell1 = tr.insertCell(-1);
            let tabCell2 = tr.insertCell(-1);
            tabCell.innerHTML = i;
            tabCell1.innerHTML = JSONResponse[i][1];
            tabCell2.innerHTML = JSONResponse[i][0];
    }

    let divContainer = document.getElementById("dataShow");
    divContainer.appendChild(table);
}