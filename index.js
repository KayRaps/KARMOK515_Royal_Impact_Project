document.getElementById("scheduleButton").addEventListener("click", function() {
    // Get form values
   let patientName = document.getElementById("patientName").value;
   let dateTime = new Date(document.getElementById("dateTime").value);
   let contactDetails = document.getElementById("contactDetails").value;

    // Check for conflicting appointments
   let conflicting = false;
   let appointments = document.querySelectorAll("#appointmentsBody tr");
    appointments.forEach(function(appointment) {
       let existingDateTime = new Date(appointment.cells[1].textContent);
        if (dateTime.getTime() === existingDateTime.getTime()) {
            conflicting = true;
        }
    });

    // If conflicting appointment, offer alternative time
    if (conflicting) {
        alert("There is a conflicting appointment. Please choose another time slot.");
    } else {
        // Create a new row in the table
       let table = document.getElementById("appointmentsBody");
       let row = table.insertRow();
       let cell1 = row.insertCell(0);
       let cell2 = row.insertCell(1);
       let cell3 = row.insertCell(2);
        cell1.innerHTML = patientName;
        cell2.innerHTML = dateTime.toLocaleString();
        cell3.innerHTML = contactDetails;

        // Clear form fields
        document.getElementById("patientName").value = "";
        document.getElementById("dateTime").value = "";
        document.getElementById("contactDetails").value = "";
    }
});


function validateSyntax() {
    let petInput = document.getElementById('petInput').value.trim();
    let regex = /^pet_\d+[a-zA-Z]+$/;
    let isValid = regex.test(petInput);
    // Validation logic goes here
    let resultElement = document.getElementById("result"); // Placeholder for validation result

    if (isValid) {
        resultElement.innerHTML = "Valid Syntax." + '<span style="color: green; font-size: 60px;">&#x25cf;</span>';
    } else {
        resultElement.innerHTML = "Invalid Syntax." + '<span style="color: red; font-size: 60px;">&#x25cf;</span>';
    }
}