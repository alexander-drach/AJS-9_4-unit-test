export default function sortPerson(arr) {
  return arr.sort((prev, next) => next.health - prev.health);
}
