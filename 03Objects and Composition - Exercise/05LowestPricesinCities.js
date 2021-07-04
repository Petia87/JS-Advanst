function solve(input) {

    let data = {};

    for (let index = 0; index < input.length; index++) {

        let [townName, productName, priceItem] = input[index].split(' | ');
        priceItem = Number(priceItem);

        if (data[productName]) {

            if (data[productName].price > priceItem) {
                data[productName];
            }

        } else {
            data[productName] =
            {
                town: townName,
                price: priceItem
            }
        }
    }

    for (const product in data) {
        console.log(`${product} -> ${data[product].price} (${data[product].town})`)
    };


}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']

);
