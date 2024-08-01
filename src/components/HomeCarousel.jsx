import styled from "styled-components";

export const HomeCarousel = () => {

  const images = [
    'https://www.ironbrothers-shop.com/cdn/shop/files/WheyProteinIsolate_ChocoholicChampion.png?v=1699889015&width=1080',
    'https://www.ironbrothers-shop.com/cdn/shop/files/WinterEdition_WheyProteinIsolate_Zimtstern.png?v=1699876022&width=1080',
    'https://dukaan.b-cdn.net/700x700/webp/upload_file_service/asg/77553bd4-c99b-4828-b22f-20e6898a318d/Dexter-Jackson-Isolate-04.jpg',
    'https://xplosiv.nz/media/catalog/product/cache/aadd22f13385e97bd2c31bcb82066b4a/x/p/xplosivisolate2lb_vanillarender.png'
  ];

  return (
    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <CarouselInner>
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} d-flex justify-content-center align-items-center`} style={{ height: '100%' }}>
            <img src={image} alt={`Slide ${index + 1}`} className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
          </div>
        ))}
      </CarouselInner>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const CarouselInner = styled.div`
  height: 500px;
`;

