const ingredients = [
    {
        id: 1,
        name: "Raagi",
        image: "https://www.mypunepulse.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-22-at-3.57.13-PM-jpg-e1700716312441.webp",
        description: "Raagi, also known as finger millet, is a nutritious whole grain that has been a staple in many South Asian cuisines for centuries."
    },
    {
        id: 2,
        name: "Sorghum (Jowar)",
        image: "https://5.imimg.com/data5/LO/HG/UW/SELLER-96419256/white-sorghum-500x500.jpg",
        description: "Jowar, or sorghum, is a versatile ancient grain widely cultivated in various parts of the world."
    },
    {
        id: 3,
        name: "Corn",
        image: "https://plantlane.com/cdn/shop/products/51NnLHaDQBL.jpg?v=1681884242",
        description: "Corn, or maize, is a staple food in many cultures. It is a good source of carbohydrates, fiber, and essential nutrients."
    },
    {
        id: 4,
        name: "Pearl Millet (Bajra)",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/12/366393864/JB/ZE/TJ/155881618/bajra-pearl-millet-500x500.jpg",
        description: "Pearl Millet, commonly known as Bajra, is a drought-resistant grain with a slightly nutty flavor."
    },
    {
        id: 5,
        name: "Foxtail Millet",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/12/369555414/JA/YL/LA/25447730/organic-foxtail-millet-500x500.jpg",
        description: "Foxtail Millet is a gluten-free grain with a mild, nutty flavor."
    },
    {
        id: 6,
        name: "Little Millet",
        image: "https://bhoomi.farm/cdn/shop/products/377953LittleMilletSemiPolished.jpg?v=1659615031",
        description: "Little Millet, also known as Samai, is a small-grained cereal rich in fiber, B-vitamins, and minerals."
    },
    {
        id: 7,
        name: "Kodo Millet",
        image: "https://5.imimg.com/data5/LM/EJ/HD/SELLER-28010074/organic-kodo-millet-500x500.jpg",
        description: "Kodo Millet is a gluten-free ancient grain known for its high nutritional value."
    },
    {
        id: 8,
        name: "Wheat",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/12/KM/YC/SK/159824908/high-quality-wheat-grain-500x500.jpeg",
        description: "Wheat is one of the most widely cultivated and consumed grains globally. It is a staple in many diets."
    },
    {
        id: 9,
        name: "Red Rice",
        image: "https://5.imimg.com/data5/SELLER/Default/2020/10/FR/UP/CA/52487202/himalayan-red-rice.jpg",
        description: "Red Rice is a whole grain rice variety with a nutty flavor and higher nutritional content compared to white rice."
    },
    {
        id: 10,
        name: "Moong Dal",
        image: "https://5.imimg.com/data5/SELLER/Default/2020/12/ZD/LK/GP/102172283/moong-dal-500x500.jpeg",
        description: "Moong Dal, or split green gram, is a versatile legume used in various Indian dishes."
    },
    {
        id: 11,
        name: "Roasted Gram",
        image: "https://dryfruitmart.in/wp-content/uploads/2021/08/2.jpg",
        description: "Roasted Gram, also known as Bhuna Chana, is a popular snack in many cultures."
    },
    {
        id: 12,
        name: "Sago (Sabudana)",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/1/375862414/OE/IK/OR/325239/natural-sago-seed-500x500.jpeg",
        description: "Sago, also known as Sabudana, is extracted from the pith of certain types of palm trees. It is commonly used in Indian cuisine."
    },
    {
        id: 13,
        name: "Red Poha",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/3/295138431/ZV/DY/BB/64098181/organic-red-poha-500x500.jpeg",
        description: "Red Poha is flattened rice made from red rice grains. It is a healthier alternative to white poha."
    },
    {
        id: 14,
        name: "Groundnut (Peanuts)",
        image: "https://5.imimg.com/data5/NH/FA/MY-4465252/raw-groundnut-500x500.jpg",
        description: "Groundnuts, also known as peanuts, are versatile legumes often used in various culinary applications."
    },
    {
        id: 15,
        name: "Cashew",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/7/324498632/SY/MD/TW/154660086/cashew-nuts-kaju--500x500.webp",
        description: "Cashews are kidney-shaped nuts that are commonly consumed as a snack or used in various dishes."
    },
    {
        id: 16,
        name: "Pistachio (Pista)",
        image: "https://m.media-amazon.com/images/I/417XmpfYLrL.jpg",
        description: "Pistachios, also known as Pista, are nutrient-dense nuts with a slightly sweet and savory flavor."
    },
    {
        id: 17,
        name: "Almond",
        image: "https://5.imimg.com/data5/NM/EL/GLADMIN-70090179/a-500x500.jpg",
        description: "Almonds are nutrient-packed nuts that are rich in healthy fats, protein, vitamins, and minerals."
    },
    {
        id: 18,
        name: "Dry Ginger",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/8/NY/IN/QL/51967572/dry-ginger-1-natureloc-600x600-500x500.jpg",
        description: "Dry Ginger, also known as Sonth, is the dried form of ginger root and is commonly used as a spice in various cuisines."
    },
    {
        id: 19,
        name: "Carom Seed (Ajwain)",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/11/362948486/PM/QW/XA/10153984/natural-green-ajwain-500x500.jpg",
        description: "Carom Seed, also known as Ajwain, is a spice with a strong aroma and is often used in Indian cooking for its digestive properties."
    },
    {
        id: 20,
        name: "Cardamom",
        image: "https://i.ebayimg.com/images/g/QtsAAOSwh1BjMTUs/s-l1200.webp",
        description: "Cardamom is a fragrant spice known for its unique flavor. It is often used in both sweet and savory dishes."
    },
];

export default ingredients;
