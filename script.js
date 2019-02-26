// 1 задание 
var i = 2;
while (i <= 100) {
    var j = 1;
    var flag = 0;
    while (j < i) {
        if (j != 1 && i % j == 0) {
            flag = 1; 
            break;
        }
        j++;
    }
    if (!flag) {
        console.log(i);
    }
    i++;
}

// 2-3 задание
var basket = [{name : 'Пила', price : 100}, {name : 'Молоток', price : 80}, {name : 'Гвозди', price : 19}];

console.log('..................');

function countBasketPrice(basket) {
    var totalPrice = 0;
    for ( i = 0; i < basket.length; i++ ) {
        totalPrice += basket[i].price;
    }
    return console.log(totalPrice);
}

countBasketPrice(basket);
console.log('..................');

// 4 задание
for ( i = 0; i < 10; console.log(i++)) {}

// 5 задание
    for( j = 1; j <= 21; j++) {
        var line = '';
        for ( i = 1; i < j; i++ ) {
            line += 'x';
        }
        console.log(line);
    }

