const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inventory: 100,
      detail: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
        { id: 2236, color: "red" },
      ],
      cart: 0,
      // solution
      onSale: true,
      // solution
    };
  },
});
