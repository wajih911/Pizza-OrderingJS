function Pizza(quantity, pizzaSize, toppings) {
    this.quantity = quantity;
    this.pizzaSize = pizzaSize;
    this.toppings = toppings;
}

function Topping(toppingItem, toppingCost) {
    this.toppingItem = toppingItem;
    this.toppingCost = toppingCost;
}

function PizzaSize(sizeName, sizeCost) {
    this.sizeName = sizeName;
    this.sizeCost = sizeCost;
}
