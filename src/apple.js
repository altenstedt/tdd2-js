const Money = require("./money");

class Apple {
    get cost() {
        return new Money(13.76);
    }
}

module.exports = Apple;