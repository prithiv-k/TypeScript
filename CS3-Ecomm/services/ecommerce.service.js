"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECommerceService = void 0;
var category_enum_1 = require("../models/category.enum");
var ECommerceService = /** @class */ (function () {
    function ECommerceService() {
        this.products = [
            { id: 1, name: 'Laptop', category: category_enum_1.Category.Electronics, price: 45000, stock: 3 },
            { id: 2, name: 'Jeans', category: category_enum_1.Category.Clothing, price: 1500, stock: 10 },
            { id: 3, name: 'Rice Bag', category: category_enum_1.Category.Grocery, price: 700, stock: 5 }
        ];
        this.cart = [];
    }
    ECommerceService.prototype.viewProducts = function () {
        console.log('\nAvailable Products:\n');
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var p = _a[_i];
            console.log("".concat(p.name, " | \u20B9").concat(p.price, " | In Stock: ").concat(p.stock, " | Category: ").concat(p.category));
        }
        console.log();
    };
    ECommerceService.prototype.addToCart = function (productId, quantity) {
        var product = this.products.find(function (p) { return p.id === productId; });
        if (!product || product.stock < quantity) {
            console.log("Cannot add product. Either not found or insufficient stock.");
            return;
        }
        product.stock -= quantity;
        var cartItem = this.cart.find(function (item) { return item.product.id === productId; });
        if (cartItem) {
            cartItem.quantity += quantity;
        }
        else {
            this.cart.push({ product: product, quantity: quantity });
        }
        console.log("".concat(quantity, " x ").concat(product.name, " added to cart."));
    };
    ECommerceService.prototype.removeFromCart = function (productId) {
        var index = this.cart.findIndex(function (item) { return item.product.id === productId; });
        if (index === -1) {
            console.log("Product not found in cart.");
            return;
        }
        var item = this.cart[index];
        item.product.stock += item.quantity;
        this.cart.splice(index, 1);
        console.log("".concat(item.product.name, " removed from cart."));
    };
    ECommerceService.prototype.showCartSummary = function () {
        console.log('\nCart Summary:\n');
        var total = 0;
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log("".concat(item.product.name, " - \u20B9").concat(item.product.price, " x ").concat(item.quantity));
            total += item.product.price * item.quantity;
        }
        console.log("\nTotal: \u20B9".concat(total));
        var discount = 0;
        if (total >= 10000)
            discount = 0.15;
        else if (total >= 5000)
            discount = 0.10;
        var discountedTotal = total - total * discount;
        if (discount > 0) {
            console.log("Discounted Total: \u20B9".concat(discountedTotal));
        }
    };
    return ECommerceService;
}());
exports.ECommerceService = ECommerceService;
