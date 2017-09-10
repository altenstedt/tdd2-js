const Money = require("./money");

class Banana {
    get cost() {
        return new Money(44.55);
    }
}

module.exports = Banana;