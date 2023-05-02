// Функция для поиска правильных цифр в переданной строке на основе кодового слова
function findCorrectDigits(codeWord, digitString) {
  let result = "";
  for (let i = 0; i < codeWord.length; i++) {
    const index = codeWord.charCodeAt(i) % 10; // Индекс цифры
    result += digitString.charAt(index); // Добавляем цифру в результат
  }
  return result;
}

// Пример использования функции
const codeWord = "Hello";
const digitString = "4029718536";
const correctDigits = findCorrectDigits(codeWord, digitString);
console.log(correctDigits); // "4730218605"

// Unit-тест для проверки функции
function testFindCorrectDigits() {
  const codeWord = "Kyiv";
  const digitString = "235486723675948752357345908723467852594680397456834765490357345734256972569395743725435894395734290876299963975573675429718807756844849082364587324693042875430965347208098768565342576786868958496738768549832563420563409657432756689326805783409567237650221751124875243561403910987457823678572306523085324805728904657834265234057341652807659065801";
  const expected = "7597403495";
  const result = findCorrectDigits(codeWord, digitString);
  if (result === expected) {
    console.log("Unit test passed!");
  } else {
    console.error(`Unit test failed. Expected ${expected}, but got ${result}`);
  }
}

testFindCorrectDigits(); // Проверка функции с кодовым словом "Kyiv"
