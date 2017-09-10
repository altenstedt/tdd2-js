const Basket = require('../../src/basket');
const Apple = require('../../src/apple');
const Banana = require('../../src/banana');

describe("The Basket class", () => {
    it ("should contain an item when adding one", () => {
        const basket = new Basket();
        const apple = new Apple();
        
        basket.add(apple);
   
        expect(basket.count).toEqual(1);
    });

    it ("should total to zero when empty", () => {
        const basket = new Basket();
        
        expect(basket.count).toEqual(0);
    });

    it ("should total to item for one", () => {
        const basket = new Basket();
        const apple = new Apple();
        
        basket.add(apple);
   
        expect(basket.total).toEqual(apple.cost);
    });

    it ("should total for many items", () => {
        const basket = new Basket();

        const count = 100;

        for (var i = 0; i < count; i++) {
            basket.add(new Apple());
        }
   
        const apple = new Apple();
        expect(basket.total).toBeCloseTo(apple.cost * count);
    });

    it ("should total with VAT", () => {
        const basket = new Basket();
        const apple = new Apple();
        const banana = new Banana();
        
        basket.add(apple);
        basket.add(banana);
        
        expect(basket.totalWithVat).toBeCloseTo(72.88);
    });
});
