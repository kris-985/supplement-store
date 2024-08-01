import { NavLink } from "react-router-dom";
import styled from "styled-components";

const values = [
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

const testimonials = [
  {
    quote:
      "Great quality supplements and fantastic customer service! Highly recommended.",
    author: "Jane D.",
  },
  {
    quote:
      "I've seen a noticeable improvement in my energy levels since using their products.",
    author: "John S.",
  },
  {
    quote:
      "Excellent range of products and very knowledgeable staff. Will definitely return.",
    author: "Emily R.",
  },
  {
    quote:
      "The best supplements I have tried! Their products have truly made a difference in my life.",
    author: "Sarah T.",
  },
  {
    quote:
      "Exceptional quality and fast shipping. This store is my go-to for all my supplement needs.",
    author: "Michael B.",
  },
  {
    quote:
      "I appreciate their commitment to sustainability and the quality of their products.",
    author: "Lisa C.",
  },
];

export const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="container my-5">
          <div className="row align-items-center">
            <ImageContainer className="col-md-6">
              <StyledImage
                src="https://t4.ftcdn.net/jpg/08/35/21/71/360_F_835217109_MHD6nPbrnuV2mDfPofkRTDyfcuuDR407.jpg"
                alt="Store Front"
                className="img-fluid"
              />
            </ImageContainer>
            <div className="col-md-6">
              <h2 className="text-danger mb-4">We are FitArt</h2>
              <p className="mb-3">
                Welcome to our premier supplement store, your ultimate
                destination for high-quality nutritional supplements and
                wellness products. We are dedicated to providing our customers
                with a wide range of vitamins, minerals, and herbal supplements
                to support their health and wellness goals.
              </p>
              <p className="mb-3">
                Our mission is to enhance your health and well-being by offering
                only the best products on the market. We carefully select each
                item in our store to ensure it meets our rigorous standards for
                quality, potency, and purity. Whether you're looking to boost
                your immune system, improve your energy levels, or support your
                overall health, we have the perfect supplement for you.
              </p>
              <p className="mb-3">
                At our store, we believe in the power of natural health
                solutions and strive to educate our customers about the benefits
                of supplements. Our knowledgeable staff is always available to
                answer your questions and help you find the right products for
                your needs.
              </p>
              <p className="mb-4">
                Thank you for choosing our supplement store. We look forward to
                supporting you on your journey to optimal health.
              </p>
              <div className="text-center">
                <NavLink to="/contacts" className="btn btn-danger btn-lg">
                  Contacts
                </NavLink>
              </div>
            </div>
          </div>

          <div className="my-5 text-center">
            <h3 className="mb-4 text-danger">Our Values</h3>
            <div className="row">
              {values.map((value, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="p-4 border rounded shadow-sm bg-light border-3 border border-danger custom-shadow">
                    <h4 className="text-danger">{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center my-5">
            <h3 className="mb-4 text-danger">What Our Customers Say</h3>
            <div className="row">
              {testimonials.map((testimonial, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="p-4 border rounded shadow-sm bg-light border-3 border border-danger custom-shadow">
                    <p className="font-italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <p className="font-weight-bold">– {testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageContainer = styled.div`
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const StyledImage = styled.img`
  max-height: 500px;
  object-fit: cover;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;
