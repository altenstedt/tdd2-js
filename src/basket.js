const Money = require("./money");

class Basket {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    get count() {
        return this.items.length;
    }

    get total() {
        return this.items.length === 0
            ? Money.Zero
            : this.items
                .map(item => item.cost)
                .reduce((sum, x) => sum.plus(x));
}

    get totalWithVat() {
        return this.total.multiply(1.25);
    }
}

module.exports = Basket;