let a ='2';
let b ='3';

// Превращение в число

alert(a + b);

// Так сложатся строки. Чтобы этого не произошло, нужно:

alert(Number(a) + Number(b));

// Вариант написать это короче:

alert(+a + +b);

// Строковые преобразования:

alert(String(5));

// Булевый тип преобразований true/false:

alert(Boolean(0)); 
// false

alert(Boolean("0"));
// true
