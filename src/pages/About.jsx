import styled from "styled-components";
import { texts, values } from "../utils/helpers";

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
              <h2 className="text-danger mb-4">{texts.title}</h2>
              {texts.paragraphs.map((paragraph, index) => (
                <p className="mb-3" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="my-5 text-center">
            <h3 className="mb-4 text-danger">{texts.valuesTitle}</h3>
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
