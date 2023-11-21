

function validate() {
    
    var nameInput = document.getElementById('name');
    var nameValue = nameInput.value.trim();
    if (nameValue === '') {
      alert('Please enter a valid name.');
      return false;
    }
  
    
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    
    var dobInput = document.getElementById('dob');
    var dobValue = dobInput.value;
    var today = new Date();
    var selectedDate = new Date(dobValue);
    if (selectedDate >= today) {
      alert('Please enter a valid date of birth.');
      return false;
    }
    var age = today.getFullYear() - selectedDate.getFullYear();

 
  if (age < 18 || age > 55) {
    alert('Age must be between 18 and 55.');
    return false;
  }
    
    var userDetails = {
      name: nameValue,
      email: emailValue,
      dob: dobValue,
    };
  
    var userDetailsList = JSON.parse(localStorage.getItem('userDetailsList')) || [];
    userDetailsList.push(userDetails);
    localStorage.setItem('userDetailsList', JSON.stringify(userDetailsList));
  
    updateTable();
  
    return false; 
  }
  
  function updateTable() {
    var userDetailsList = JSON.parse(localStorage.getItem('userDetailsList')) || [];
    var tableContainer = document.getElementById('f');
  

    tableContainer.innerHTML = '';
  
    if (userDetailsList.length > 0) {
      // Create a table
      var table = document.createElement('table');
      table.setAttribute('border', '1');
      table.setAttribute('cellpadding', '10');
  
    
      var headerRow = table.insertRow(0);
      var headers = ['Name', 'Email', 'Date of Birth'];
      headers.forEach(function (headerText) {
        var headerCell = document.createElement('th');
        headerCell.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(headerCell);
      });
  
   
      userDetailsList.forEach(function (userDetails) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
  
        cell1.innerHTML = userDetails.name;
        cell2.innerHTML = userDetails.email;
        cell3.innerHTML = userDetails.dob;
      });
  
   
      tableContainer.appendChild(table);
    }
  }

  document.addEventListener('DOMContentLoaded', updateTable);
  