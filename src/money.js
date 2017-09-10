class Money {
    constructor(value) {
        this.decimalPlaces = 2;
        this.regionInfo = "SE"; // ISO 3166-1 alpha-2 code
        this.currencySymbol = "SEK"; // ISO 4217 currency symbol

        this.units = Math.round(value * Math.pow(10, this.decimalPlaces));
    }

    static get Zero() {
        return new Money(0);
    }

    plus(money) {
        Money.assertRegions(this, money);

        return new Money((this.units + money.units) / Math.pow(10, this.decimalPlaces));
    }

    minus(money) {
        Money.assertRegions(this, money);

        return new Money((this.units - money.units) / Math.pow(10, this.decimalPlaces));
    }

    multiply(value) {
        const product = this.units * value;
        
        const factor = Math.pow(10, this.decimalPlaces);
        
        return new Money(product / factor);    
    }

    equals(money) {
        return this.units === money.units 
            && this.decimalPlaces === money.decimalPlaces
            && this.regionInfo === money.regionInfo;
    }

    toString() {
        const scaled = this.units / Math.pow(10, this.decimalPlaces);
        
        return `${this.currencySymbol} ${scaled.toFixed(this.decimalPlaces)}`;
    }

    static assertRegions(left, right) {
        if (left.regionInfo !== right.regionInfo) {
            throw new Error("Operands have different regions.");
        }

        if (left.decimalPlaces !== right.decimalPlaces) {
            throw new Error("Operands have different decimal places.");
        }    
    }
}

module.exports = Money;