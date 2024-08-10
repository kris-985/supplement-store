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
