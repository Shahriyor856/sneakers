// composables/useCart.js
import { km } from "element-plus/es/locales.mjs";
import { ref, computed } from "vue";

const cartItems = ref([]);
const likedItems = ref([]);

// computed total price
const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + Number(item.price || 0), 0),
);

// const submitProducts = cartItems;

const submittedProducts = ref([]);

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

const toggleLiked = (product) => {
  const exists = likedItems.value.find((p) => p.text === product.text);
  likedItems.value = exists
    ? likedItems.value.filter((p) => p.text !== product.text)
    : [...likedItems.value, { ...product, price: Number(product.price || 0) }];
};

const removeFromCart = (product) => {
  cartItems.value = cartItems.value.filter((p) => p.text !== product.text);
};

const clearCart = () => {
  cartItems.value = [];
};

// selected products here
const submitCart = () => {
  submittedProducts.value = cartItems.value.map((item) => ({ ...item }));
  clearCart();
};

// function cockroachSpeed(s) {
//   //Good Luck!
//   Math.floor((s.value === s.item in km) => return {
//     s.value in cm
//   })
// }

export function useCart() {
  return {
    cartItems,
    likedItems,
    toggleLiked,
    addToCart,
    removeFromCart,
    totalPrice,
    tax,
    clearCart,
    submittedProducts,
    submitCart,
  };
}
