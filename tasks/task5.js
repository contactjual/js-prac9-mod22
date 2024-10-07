
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.


const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function salary(employees) {
    const shahin = employees[0];
    const shihab = employees[1];
    const shikot = employees[2];
    const shohel = employees[3];

    // console.log(shahin);

    let shahinSalary = (employees[0].experience * employees[0].increment) + employees[0].starting
    let shihabSalary = (employees[1].experience * employees[1].increment) + employees[1].starting
    let shikotSalary = (employees[2].experience * employees[2].increment) + employees[2].starting
    let shohelSalary = (employees[3].experience * employees[3].increment) + employees[3].starting

    let totalSalary = shahinSalary + shihabSalary + shikotSalary + shohelSalary;

    return "The total salary of your employees is " + totalSalary + ' taka';
}
console.log(salary(employees));