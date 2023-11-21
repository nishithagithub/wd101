let userForm = document.getElementById("user-form");

const retrieveEntries = () => {
    let entries = localStorage.getItem("user-entries");
    if (entries){
        entries = JSON.parse(entries);
    } else{
        entries = [];
    }
    return entries;
}
let userEntries = retrieveEntries();

const displayEntries = () => {
    const entries = retrieveEntries();

    const tableEntries= entries.map((entry) => {
        const namecell = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailcell = `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordcell = `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobcell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermscell = `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;

        const row = `<tr>${namecell} ${emailcell} ${passwordcell} ${dobcell} ${acceptTermscell}</tr>`;
        return row;


    }).join("\n");

    const table = `<table class="table-auto w-full"><tr>
    
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">email</th>
    <th class="px-4 py-2">password</th>
    <th class="px-4 py-2">dob</th>
    <th class="px-4 py-2">accepted Terms?</th>

</tr>${tableEntries} </table>`;

let details = document.getElementById("user-entries");
details.innerHTML= table;
}

const saveUserForm = (event) => {
    event.preventDefault();
    const name= document.getElementById("name").value;
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    const dobInput= document.getElementById("dob");

    const dob = dobInput.value;

    // Validate date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dob)) {
        alert("Invalid date format. Please use YYYY-MM-DD.");
        return;
    }

    // Validate age between 18 and 55
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    if (age < 18 || age > 55) {
        alert("Age must be between 18 and 55.");
        return;
    }


    const acceptedTermsAndConditions = document.getElementById("acceptTerms").checked;

    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions,

    };
    userEntries.push(entry);

    localStorage.setItem("user-entries", JSON.stringify(userEntries));
    displayEntries();


}
userForm.addEventListener("submit", saveUserForm);
displayEntries();