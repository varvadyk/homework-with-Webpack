export default function renderNumber() {
  let n = Number(prompt("Vvedit number N", 10));
  while (isNaN(Number(n))) {
    alert("Було введено не число, попробуйте ще раз");
    n = prompt('Введіть ціле число');
  }

  console.log(n);
  console.log(!Number.isInteger(n));
  let m = Number(prompt("Vvedit number М ", 100));

  while (isNaN(Number(m))) {
    alert("Було введено не число, попробуйте ще раз");
    m = prompt('Введіть ціле число');
  }
  console.log(m);
  console.log(!Number.isInteger(m));

  const check = confirm("Пропускати парне число?");
  if (check) {
    alert("Потрібно пропустити");
  } else {
    alert("Не потрібно пропускати ");


  }
  let result_numbers = 0;

  for (let i = n; i <= m; i++) {
    if (check) {
      if (i % 2 === 0) {
        continue;

        console.log("Парне число");
      }

    }


    result_numbers += i;
  }


  alert(`Користувач ввів такі значення для N =${n} і M=${m}`);
  alert(`Сума чисел буде: ${result_numbers}`);
}