//function 2
export default function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result = result * base;
  }
  return (result);
}