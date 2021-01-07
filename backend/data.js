import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Grace Lam",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: 1,
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/carousel-1.png",
      price: 120,
      countInStock: 10,
      artist: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      _id: 2,
      name: "Nike Slim Tee",
      category: "Shirts",
      image: "/images/carousel-2.png",
      price: 120,
      countInStock: 10,
      artist: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },

    {
      _id: 3,
      name: "Nike Slim Pant",
      category: "Shirts",
      image: "/images/carousel-3.png",
      price: 120,
      countInStock: 10,
      artist: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
export default data;
