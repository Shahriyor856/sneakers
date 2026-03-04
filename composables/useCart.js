// composables/useCart.js
import { ref, computed } from "vue";

const cartItems = ref([]);

// computed total price
const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + Number(item.price || 0), 0),
);

// computed tax (e.g., 5% of total)
const tax = computed(() => Math.round(totalPrice.value * 0.05));

const addToCart = (product) => {
  const existing = cartItems.value.find((p) => p.text === product.text);
  if (!existing) {
    cartItems.value.push({
      ...product,
      price: Number(product.price || 0), // ensure numeric
      quantity: 1,
    });
  }
};

const removeFromCart = (product) => {
  cartItems.value = cartItems.value.filter((p) => p.text !== product.text);
};

const clearCart = () => {
  cartItems.value = [];
};

export function useCart() {
  return { cartItems, addToCart, removeFromCart, totalPrice, tax, clearCart };
}
