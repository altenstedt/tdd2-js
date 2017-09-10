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
            ? 0
            : this.items
                .map(item => item.cost)
                .reduce((sum, x) => sum + x);
    }

    get totalWithVat() {
        return this.total * 1.25;
    }
}

module.exports = Basket;