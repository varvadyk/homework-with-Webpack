 export const ukraine = {
     tax: 0.195,
     middleSalary: 1789,
     vacancies: 11476
 };

 export const country_ukr = ukraine;


 export function getMyTaxes(salary) {
     return this.tax * salary;
 }