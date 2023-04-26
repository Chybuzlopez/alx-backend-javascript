const teacher3 = new Teacher({
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false
});

console.log(teacher3);

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
class Teacher implements TeacherAttributes {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;

  constructor(attributes: TeacherAttributes) {
    this.firstName = attributes.firstName;
    this.lastName = attributes.lastName;
    this.fullTimeEmployee = attributes.fullTimeEmployee;
    this.yearsOfExperience = attributes.yearsOfExperience;
    this.location = attributes.location;

    // Set any additional attributes passed in
    for (const key in attributes) {
      if (key !== "firstName" && key !== "lastName" && key !== "fullTimeEmployee" && key !== "yearsOfExperience" && key !== "location") {
        this[key] = attributes[key];
      }
    }
  }
}
