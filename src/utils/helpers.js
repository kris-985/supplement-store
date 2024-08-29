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
