interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Chibuzo",
  lastName: "Nwakacha",
  age: 31,
  location: "Nigeria"
};

const student2: Student = {
  firstName: "Chinwendu",
  lastName: "Lucy",
  age: 21,
  location: "Enugu"
};

const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");

// Loop through the students array and create a row for each student
studentsList.forEach((student) => {
 // Create a new row element
 const row = document.createElement("tr");

 // Create a cell for the first name
 const firstNameCell = document.createElement("td");
 firstNameCell.textContent = student.firstName;
 row.appendChild(firstNameCell);

  // Create a cell for the location
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  // Append the row to the table
  table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);
