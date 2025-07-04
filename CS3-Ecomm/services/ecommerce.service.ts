import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';
import { Category } from '../models/category.enum';

export class ECommerceService {
    private products: Product[] = [
        { id: 1, name: 'Laptop', category: Category.Electronics, price: 45000, stock: 3 },
        { id: 2, name: 'Jeans', category: Category.Clothing, price: 1500, stock: 10 },
        { id: 3, name: 'Rice Bag', category: Category.Grocery, price: 700, stock: 5 }
    ];

    private cart: CartItem[] = [];

    viewProducts(): void {
        console.log('\nAvailable Products:\n');
        for (const p of this.products) {
            console.log(`${p.name} | ₹${p.price} | In Stock: ${p.stock} | Category: ${p.category}`);
        }
        console.log();
    }

    addToCart(productId: number, quantity: number): void {
        const product = this.products.find(p => p.id === productId);
        if (!product || product.stock < quantity) {
            console.log(`Cannot add product. Either not found or insufficient stock.`);
            return;
        }

        product.stock -= quantity;

        const cartItem = this.cart.find(item => item.product.id === productId);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            this.cart.push({ product, quantity });
        }

        console.log(`${quantity} x ${product.name} added to cart.`);
    }

    removeFromCart(productId: number): void {
        const index = this.cart.findIndex(item => item.product.id === productId);
        if (index === -1) {
            console.log(`Product not found in cart.`);
            return;
        }

        const item = this.cart[index];
        item.product.stock += item.quantity;
        this.cart.splice(index, 1);

        console.log(`${item.product.name} removed from cart.`);
    }

    showCartSummary(): void {
        console.log('\nCart Summary:\n');
        let total = 0;
        for (const item of this.cart) {
            console.log(`${item.product.name} - ₹${item.product.price} x ${item.quantity}`);
            total += item.product.price * item.quantity;
        }

        console.log(`\nTotal: ₹${total}`);

        let discount = 0;
        if (total >= 10000) discount = 0.15;
        else if (total >= 5000) discount = 0.10;

        const discountedTotal = total - total * discount;
        if (discount > 0) {
            console.log(`Discounted Total: ₹${discountedTotal}`);
        }
    }
}
