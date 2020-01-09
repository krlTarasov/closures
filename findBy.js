export default function findBy(prop, value) {
  return (elem) => elem[prop] == value;
}