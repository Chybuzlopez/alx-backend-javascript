// export default  fucntion cleanSet(set, startString) {

//     const newSet = new Set([...set].filter((val) => val.startsWith(startString)))
//     return [...newSet].map((val) => val.slice(startString.length)).join("-")
// }

export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
