export default function getListStudentIds(objectsArray) {
  if (!Array.isArray(objectsArray)) {
    return [];
  }
  const ids = objectsArray.map((x) => x.id);
  return ids;
}
