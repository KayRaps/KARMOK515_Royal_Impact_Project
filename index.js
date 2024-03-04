document.getElementById("scheduleButton").addEventListener("click", function() {
    // Get form values
    var patientName = document.getElementById("patientName").value;
    var dateTime = new Date(document.getElementById("dateTime").value);
    var contactDetails = document.getElementById("contactDetails").value;

    // Check for conflicting appointments
    var conflicting = false;
    var appointments = document.querySelectorAll("#appointmentsBody tr");
    appointments.forEach(function(appointment) {
        var existingDateTime = new Date(appointment.cells[1].textContent);
        if (dateTime.getTime() === existingDateTime.getTime()) {
            conflicting = true;
        }
    });

    // If conflicting appointment, offer alternative time
    if (conflicting) {
        alert("There is a conflicting appointment. Please choose another time slot.");
    } else {
        // Create a new row in the table
        var table = document.getElementById("appointmentsBody");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = patientName;
        cell2.innerHTML = dateTime.toLocaleString();
        cell3.innerHTML = contactDetails;

        // Clear form fields
        document.getElementById("patientName").value = "";
        document.getElementById("dateTime").value = "";
        document.getElementById("contactDetails").value = "";
    }
});