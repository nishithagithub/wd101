let table = document.getElementById("tableElement");



let det = localStorage.getItem('details');
if(det==null){

    let det = []
    let detailsString = JSON.stringify(det);
    
    localStorage.setItem("details",detailsString);
}



const display = () => {

    const f= document.getElementById("f");

    f.textContent = "";

    const table = document.createElement("table");
    const tr = document.createElement("tr");

    th1 = document.createElement("th");
    th1.textContent = "name";
    tr.appendChild(th1);

    th2 = document.createElement("th");
    th2.textContent = "Email";
    tr.appendChild(th2);

    th3 = document.createElement("th");
    th3.textContent = "Password";
    tr.appendChild(th3);

    th4 = document.createElement("th");
    th4.textContent = "DOB";
    tr.appendChild(th4);

    th5 = document.createElement("th");
    th5.textContent = "Accepted terms?";
    tr.appendChild(th5);


    table.appendChild(tr);

    f.appendChild(table);

    let myDetails = localStorage.getItem("details");
    let detailsArray = JSON.parse(myDetails);

    for(let item of detailsArray)
    {

        const {name,email,password,dob,accepted} = item;

        

        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = name;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.textContent = email;
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = password;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.textContent = dob;
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.textContent = accepted;
        tr.appendChild(td5);

        table.appendChild(tr);
    }
}

display();

const validate = () => {
    
    let table = document.getElementById("tableElement");

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("Password").value;
    let dob = document.getElementById("dob").value;
    let accept = document.getElementById("checkbox");
    let accepted = false;

    if(accept.checked)
        accepted = true;
    else
        accepted = false;


    let details = {
        name,
        email,
        password,
        dob ,
        accepted
    };

    let myDetails = localStorage.getItem("details");
    let detailsArray = JSON.parse(myDetails);

    detailsArray.push(details);



    let detailsString = JSON.stringify(detailsArray);

    localStorage.setItem("details",detailsString);


    display();


}