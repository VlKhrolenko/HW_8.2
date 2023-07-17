// Функция должна находить минимальный делитель переданного числа.
//
//     Для этого достаточно последовательно проверять делимость, начиная с двойки.
//     Если делитель не найден, значит число простое, и делителем является само число.
//
//     Если переданное число меньше единицы, то функция должна вернуть NaN.
//
//     Примеры
// smallestDivisor(15); // 3
// smallestDivisor(17); // 17
//
// smallestDivisor(0); // NaN
// smallestDivisor(-3); // NaN

let nam = +prompt('Введите число')
function smallestDivisor (num) {
    let result

    if (num <= 1) {
        return NaN
    } else {
        for (let i = 2; i <= num; i++) {
            let answer = num / i;

            if (Number.isInteger(answer) === true) {
                result = i;
                break
            }
        }
        return result
    }
}
console.log(smallestDivisor(nam))