export default function getStudentsByLocation(students, city) {
  const studentsData = students.filter((students) => students.location === city);
  return studentsData;
}
