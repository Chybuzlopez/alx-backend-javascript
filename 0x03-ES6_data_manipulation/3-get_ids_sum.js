export default function getStudentIdsSum(studentData) {
  const numberOfStudents = studentData.reduce(
    (cumulative, currentValue) => currentValue.id + cumulative, 0,
  );
  return numberOfStudents;
}
