"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "BOILED EGG",
            price: 10,
            text: "A simple yet nutritious boiled egg, perfect for a quick breakfast or snack. Packed with protein and essential nutrients, it's a great way to start your day.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 25,
            text: "A delicious bowl of ramen, perfect for a quick and satisfying meal. Packed with flavor and topped with fresh ingredients, it's a must-try for noodle lovers.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 45,
            text: "Juicy and tender grilled chicken, seasoned to perfection. A healthy and flavorful option for lunch or dinner, served with a side of vegetables or rice.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 18,
            text: "Indulge in a slice of our delectable cake, perfect for any occasion. Moist, fluffy, and topped with rich frosting, it's a sweet treat that will satisfy your cravings.",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 23,
            text: "Savor the taste of our juicy burger, made with a perfectly grilled patty and fresh toppings. Served on a toasted bun, it's a classic favorite for lunch or dinner.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 25,
            text: "Fluffy and golden pancakes, served with a drizzle of maple syrup and a side of fresh fruit. A delightful breakfast option that will start your day off right.",
            image: "/images/pancake.png",
            type: "dinner",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map