export const inputs = [
  {
    htmlFor: "firstname-register",
    label: "First name",
  },
  {
    htmlFor: "lastname-register",
    label: "Last name",
  },
  {
    htmlFor: "username-register",
    label: "Username",
  },
  {
    htmlFor: "email-register",
    label: "Email",
  },
  {
    htmlFor: "password-register",
    label: "Password",
    type: "password",
  },
];

export const serviceItems = [
  {
    location: "/",
    imgSrc:
      "https://as2.ftcdn.net/v2/jpg/00/95/25/75/1000_F_95257544_CG2CD0MoQf2iGsKrMyoqHQX0VYJDhfrk.jpg",
    label: "Top Quality",
    text: "We offer only the highest quality products that guarantee excellent results and satisfaction.",
  },
  {
    location: "/",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/013/413/157/non_2x/best-price-banner-megaphone-icon-modern-style-design-on-white-background-vector.jpg",
    label: "Best price",
    text: "Take advantage of our competitive prices that provide excellent value for your money.",
  },
  {
    location: "/",
    imgSrc:
      "https://media.istockphoto.com/id/1387606895/vector/hot-deal-banner-special-and-limited-offer-sale-countdown-badge-promo-sticker-with-stopwatch.jpg?s=612x612&w=0&k=20&c=MpGFvD0N4cGiBXijEP76ZbwWKMY-WwrW4cNiyZLF3h8=",
    label: "Wide range",
    text: "Discover our extensive range of dietary supplements that meet all your needs and preferences.",
    style: `marginTop: '39px', , maxWidth: '150px'`,
  },
];

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const products = [
  {
    name: "Protein Powder",
    picture:
      "https://fitnesdobavki.net/image/catalog/Optimum/OPTIMUM%20GOLD%20STANDARD%20100%20WHEY,%202270%20GRAMS%201.jpg",
    description: "High-quality whey protein for muscle building.",
    price: 29.99,
  },
  {
    name: "BCAA",
    picture:
      "https://s13emagst.akamaized.net/products/10470/10469896/images/res_21226184e5547b5686351bc667827b38.jpg",
    description: "Branched-chain amino acids for muscle recovery.",
    price: 35.99,
  },
  {
    name: "Mass Build Gainer",
    picture: "https://www.silabg.com/uf/product/34456_pm_mass6-bag-430.jpg",
    description:
      "Supplements with a blend of carbs, protein, and fats, which are used to help you gain weight, especially if you are trying to bulk up",
    price: 80.99,
  },
];

export const statsItems = [
  {
    count: 50,
    label: "Satisfied Customers",
    description:
      "We have thousands of satisfied customers who trust us for their supplement needs.",
  },
  {
    count: 369,
    label: "Products Offered",
    description:
      "A wide range of high-quality supplements to support your health goals.",
  },
  {
    count: 500,
    label: "Hours of Support",
    description:
      "Our dedicated team provides support around the clock for your convenience.",
  },
  {
    count: 24,
    label: "Customer Support",
    description:
      "Available 24/7 to assist you with any questions or concerns you may have.",
  },
];

export const validCodes = {
  DISCOUNT10: 10,
  DISCOUNT20: 20,
  FREESHIP: 5,
};

export const priceSum = (purchasedProducts, appliedDiscounts) => {
  const totalPriceWithoutDiscount = Object.values(purchasedProducts).reduce(
    (acc, product) => {
      const price = Number(product.content?.price) || 0;
      return acc + price * product.quantity;
    },
    0
  );

  const totalDiscount = appliedDiscounts.reduce(
    (acc, discount) => acc + discount,
    0
  );

  const totalPrice = (
    totalPriceWithoutDiscount *
    (1 - totalDiscount / 100)
  ).toFixed(2);

  const shippingCost = totalPriceWithoutDiscount >= 100 ? 0 : 10; // Example shipping cost
  const finalPrice = (parseFloat(totalPrice) + shippingCost).toFixed(2);
  return {
    totalPrice,
    shippingCost,
    finalPrice,
  };
};

export const partners = [
  {
    logo: "https://media.istockphoto.com/id/1369899988/vector/handshake-sign-in-the-circle-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=auA4GuM2p-EmKmEgcFjIOUibPiXsuvTxfvRKB-EN7o8=",
  },
  {
    logo: "https://images-platform.99static.com//QssdknHvUWVZfAL-AujVQVkqYQk=/393x3547:1106x4260/fit-in/500x500/99designs-contests-attachments/104/104799/attachment_104799702",
  },
  {
    logo: "https://i.pinimg.com/564x/26/30/a5/2630a52bd5a31c4d366be1685c4f7831.jpg",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWtyjk6Pso05Vau09VvZUW1DTo-79Fu50u63C3d7oPWqMgC8NW4aF9zOg3ZBTT5tS4xA&usqp=CAU",
  },
  {
    logo: "https://images-platform.99static.com//9JL9sOc2J6lToGcs1HIACY3bN2Y=/245x133:749x637/fit-in/500x500/99designs-contests-attachments/58/58135/attachment_58135285",
  },
  {
    logo: "https://dcassetcdn.com/design_img/3806176/569983/23365972/z037bf00vdmgahjgpzvvj0w0wc_image.jpg",
  },
  {
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/muscle-and-workout-supplement-logo-design-template-f0916432c487f7ceb5151a559806a15e_screen.jpg?ts=1689029277",
  },
  {
    logo: "https://t4.ftcdn.net/jpg/01/56/84/65/360_F_156846577_KFaK8e8PNLRaImPZemqxjkVCaGuvPyAa.jpg",
  },
  {
    logo: "https://cdn.dribbble.com/users/5074949/screenshots/14145946/media/3a9dbf586daaca8ced30bc4935a0ee9e.jpg",
  },
  {
    logo: "https://cdn.dribbble.com/userupload/12785473/file/original-c50f5c42045bcd6741c6b91166cce4fe.png?resize=400x0",
  },
  {
    logo: "https://i.pinimg.com/originals/f6/8a/24/f68a249080a943372e6a234a51c8596a.png",
  },
  {
    logo: "https://e7.pngegg.com/pngimages/906/446/png-clipart-dietary-supplement-bodybuilding-com-logo-physical-fitness-bodybuilding-love-hand.png",
  },
];

export const promotions = [
  {
    name: "Protein Power",
    discount: "30% off",
    description: "High-quality whey protein to fuel your workouts.",
  },
  {
    name: "Vitamins Pack",
    discount: "Buy 1 Get 1 Free",
    description: "Boost your immune system with our top-selling vitamins.",
  },
  {
    name: "Omega 3 Fish Oil",
    discount: "25% off",
    description:
      "Support your heart health with essential omega-3 fatty acids.",
  },
  {
    name: "BCAA Energy",
    discount: "20% off",
    description: "Enhance muscle recovery with our top BCAA formula.",
  },
  {
    name: "Pre-Workout Explosion",
    discount: "15% off",
    description: "Maximize your energy and focus during workouts.",
  },
  {
    name: "Super Greens Powder",
    discount: "10% off",
    description: "Get your daily dose of greens for optimal health.",
  },
];

export const questions = [
  {
    text: "What is the most popular fitness supplement?",
    options: ["Protein", "Creatine", "BCAA", "Multivitamins"],
  },
  {
    text: "When is the best time to take supplements?",
    options: ["Before workout", "After workout", "During workout", "Anytime"],
  },
  {
    text: "What do you prefer for recovery?",
    options: ["Sleep", "Massage", "Sauna", "Supplements"],
  },
  {
    text: "How often do you take protein supplements?",
    options: ["Daily", "Weekly", "Monthly", "Never"],
  },
  {
    text: "Which type of workout do you prefer?",
    options: ["Strength training", "Cardio", "HIIT", "Yoga"],
  },
  {
    text: "What is your fitness goal?",
    options: ["Muscle gain", "Weight loss", "Endurance", "Flexibility"],
  },
  {
    text: "How long do you usually work out?",
    options: [
      "Less than 30 minutes",
      "30-60 minutes",
      "1-2 hours",
      "More than 2 hours",
    ],
  },
  {
    text: "Do you follow a specific diet?",
    options: [
      "Yes, high protein",
      "Yes, low carb",
      "Yes, balanced diet",
      "No specific diet",
    ],
  },
  {
    text: "How do you track your fitness progress?",
    options: ["Fitness app", "Journal", "Personal trainer", "I don’t track"],
  },
  {
    text: "How often do you exercise per week?",
    options: ["1-2 times", "3-4 times", "5-6 times", "Every day"],
  },
];

export const testimonials = [
  {
    name: "John Smith",
    review:
      "These supplements are amazing! I already feel much better after just a week. I have tried many products in the past, but nothing has worked as effectively as this. Highly recommend to anyone looking to improve their health.",
  },
  {
    name: "Mary Johnson",
    review:
      "Since I started using them, I have more energy throughout the day. My daily activities have become much easier to manage, and I no longer feel exhausted by the afternoon. This is a game-changer!",
  },
  {
    name: "George Brown",
    review:
      "I recommend them to everyone! The quality is top-notch and the benefits are undeniable. My overall well-being has improved significantly. It's worth every penny!",
  },
  {
    name: "Elena Davis",
    review:
      "Incredible product! I will keep using it because it has truly made a difference in my daily life. I feel more active, alert, and healthier overall. Can't imagine my routine without it.",
  },
  {
    name: "Nick Wilson",
    review:
      "Excellent value for money. I'm very satisfied with the results and the price point. It's rare to find such high-quality supplements at this price. Definitely a repeat customer.",
  },
  {
    name: "Daniela Martinez",
    review:
      "I've noticed significant improvement since I started taking them. My immune system feels stronger, and I haven't been sick once since I started. Thank you for such a great product!",
  },
  {
    name: "Alexander Garcia",
    review:
      "The supplements are very effective and easy to take. I appreciate the natural ingredients and the fact that they don't upset my stomach like other products I've tried. Fantastic results!",
  },
  {
    name: "Victoria Anderson",
    review:
      "I saw a difference in just one week. Highly recommend! My skin looks better, I sleep better, and I have more energy. This product has improved multiple aspects of my life.",
  },
  {
    name: "Stanley Taylor",
    review:
      "I'm very impressed with the results. Will order again. The changes I've seen in my health are nothing short of amazing. I feel rejuvenated and more vibrant every day.",
  },
  {
    name: "Anna Moore",
    review:
      "The product is very good and you can feel the difference. Excellent choice for anyone looking to boost their health. I can't believe how much better I feel after taking these supplements.",
  },
  {
    name: "Chris Evans",
    review:
      "These supplements have become a staple in my daily routine. I love how they make me feel more energetic and balanced. Highly recommend to anyone looking for a reliable health boost.",
  },
  {
    name: "Laura Taylor",
    review:
      "I was skeptical at first, but after a few weeks, I am convinced. My digestion has improved, and I have more stamina during workouts. These supplements are a must-have!",
  },
  {
    name: "James Wilson",
    review:
      "Fantastic product! I've tried many other brands, but none come close to the effectiveness of these supplements. My overall health has improved, and I feel more vibrant.",
  },
  {
    name: "Patricia Brown",
    review:
      "I can't say enough good things about these supplements. They've improved my mood, energy levels, and overall well-being. I feel like a new person. Highly recommend!",
  },
  {
    name: "Robert Johnson",
    review:
      "These supplements have exceeded my expectations. My focus and concentration have improved significantly. I feel more productive and motivated every day. A great addition to my health regimen.",
  },
];

export const values = [
  {
    title: "Quality",
    description:
      "We ensure that every product meets our high standards of quality and effectiveness.",
  },
  {
    title: "Customer Care",
    description:
      "Our friendly and knowledgeable team is always here to help you find the best products for your needs.",
  },
  {
    title: "Sustainability",
    description:
      "We are committed to environmentally friendly practices and sustainable sourcing of our products.",
  },
];

export const texts = {
  title: "We are FitArt",
  paragraphs: [
    "Welcome to our premier supplement store, your ultimate destination for high-quality nutritional supplements and wellness products. We are dedicated to providing our customers with a wide range of vitamins, minerals, and herbal supplements to support their health and wellness goals.",
    "Our mission is to enhance your health and well-being by offering only the best products on the market. We carefully select each item in our store to ensure it meets our rigorous standards for quality, potency, and purity. Whether you're looking to boost your immune system, improve your energy levels, or support your overall health, we have the perfect supplement for you.",
    "At our store, we believe in the power of natural health solutions and strive to educate our customers about the benefits of supplements. Our knowledgeable staff is always available to answer your questions and help you find the right products for your needs.",
    "Thank you for choosing our supplement store. We look forward to supporting you on your journey to optimal health.",
  ],
  valuesTitle: "Our Values",
};

export const content = [
  {
    title: "Free Shipping",
    text: "Enjoy the convenience of free shipping on all orders, no matter the value. Our fast and reliable delivery service ensures that your purchases arrive at your doorstep quickly and safely. We believe in providing value to our customers, which is why we cover the shipping costs for you. Whether you're ordering a small item or a large one, you can count on us to get it to you without any additional charges. Take advantage of our free shipping offer today and experience a hassle-free shopping journey with us.",
  },
  {
    title: "Consultations",
    text: "Our team of experts is always ready to provide you with professional consultations and advice tailored to your needs. Whether you have questions about our products, need guidance on making the best purchase, or require detailed information on our services, we are here to help. Our consultation services are designed to ensure that you make informed decisions and get the most out of your purchases. Contact us anytime for personalized assistance, and let us help you achieve your goals with expert support and reliable advice.",
  },
];
