// Написати цикли, які зможуть:


// - Вивести на сторінку в один рядок через кому числа від 10 до 20
// - Вивести квадрати чисел від 10 до 20
let numbers = '';
let pow = '';

for (let i = 10; i < 20; i += 1) {
    if (i === 19) {
        numbers += `${i}`;
        pow += `${i * i}`;
        continue;
    }
    numbers += `${i} `;
    pow += `${i * i} `;
}

document.getElementById('hw_01').innerHTML = numbers;
document.getElementById('hw_02').innerHTML = pow;
alert(numbers);
alert(pow);


// - Вивести таблицю множення на 7
const seven = 7;
let result = '';
for (let i = 1; i < 10; i += 1) {
    if (i === 9) {
        result += `${seven} x ${i} = ${seven * i}`;
        continue;
    }
    result += `${seven} x ${i} = ${seven * i}\n`;    // КАК пробросить перенос строки в HTML?
}

document.getElementById('hw_03').innerHTML = result;
alert(result);


// -Знайти суму всіх цілих чисел від 1 до 15
let sumOfInteger = 0;
for (let i = 1; i < 15; i += 1) {
    if (Number.isInteger(i)) {
        (sumOfInteger += i).toFixed(1);
    }
}

document.getElementById('hw_04').innerHTML = sumOfInteger;
alert(sumOfInteger);


// -Знайти добуток усіх цілих чисел від 15 до 35
let multOfInteger = 1;
for (let i = 15; i < 35; i += 1) {
    if (Number.isInteger(i)) {
        (multOfInteger *= i).toFixed(1);
    }
}

document.getElementById('hw_05').innerHTML = multOfInteger;
alert(multOfInteger);


// -Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let firstNumber = 1;
let lastNumber = 500;
let sum = 0;
let arithmeticalMean;

for (firstNumber; firstNumber < lastNumber; firstNumber += 1) {
    (sum += firstNumber).toFixed(1);
}
arithmeticalMean = sum / firstNumber;

document.getElementById('hw_06').innerHTML = arithmeticalMean;
alert(arithmeticalMean);


// -Вивести суму лише парних чисел в діапазоні від 30 до 80
let sumDoubleNumbers = 0;

for (let i = 30; i < 80; i += 1) {
    if (i % 2 === 0) {
        sumDoubleNumbers += i;
    }
}

document.getElementById('hw_07').innerHTML = sumDoubleNumbers;
alert(sumDoubleNumbers);


// - Вивести всі числа в діапазоні від 100 до 200 кратні 3
let multiplesNumbers = '';
const multiplicity = 3;

for (let i = 100; i < 200; i += 1) {
    if (i % multiplicity === 0) {
        if (i === 199) {
            multiplesNumbers = `${multiplesNumbers + i}`;
        }
        multiplesNumbers = `${multiplesNumbers + i} `;
    }
}

alert(multiplesNumbers);
document.getElementById('hw_08').innerHTML = multiplesNumbers;


// -Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// -Визначити кількість його парних дільників
// -Знайти суму його парних дільників
const number = 558;
let divers = '';
let countDoubleDivers = 0;
let sumDoubleDivers = 0;
let answerDrivers;

if (number > 0) {
    for (let i = number; i > 0; i -= 1) {
        if (number % i === 0) {
            divers = `${divers + i} `;
            if (i % 2 === 0) {
                countDoubleDivers += 1;
                sumDoubleDivers += i;
            }
        }
    }
}

// divers = divers.trimEnd();
answerDrivers = `
Дільники: ${divers}
Кількість парних дільників: ${countDoubleDivers}
Сума парних дільників: ${sumDoubleDivers}`;

alert(answerDrivers);
document.getElementById('hw_09').innerHTML = answerDrivers;


// -Надрукувати повну таблицю множення від 1 до 10
let resultTable = '';

for (let i = 1; i < 10; i += 1) {
    for (let b = 1; b < 10; b += 1) {
        resultTable = `${resultTable} ${i} x ${b} = ${i * b}\n`;
    }
    resultTable = `${resultTable}\n`;
}

document.getElementById('hw_10').innerHTML = resultTable;
alert(resultTable);
