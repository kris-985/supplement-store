import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceItem = ({ location, imgSrc, label, text, style }) => {
  return (
    <div className="col-md-4 d-flex flex-column align-items-center mb-4">
      <Link to={location} className="d-block text-center">
        <img
          src={imgSrc}
          alt=""
          className="img-fluid mb-3"
          style={
            style
              ? { maxWidth: "150px", marginTop: "39px" }
              : { maxWidth: "150px" }
          }
        />
      </Link>
      <span className="d-block fs-4 fw-bold text-uppercase mb-2">{label}</span>
      <span className="d-block text-center text-muted">{text}</span>
    </div>
  );
};

ServiceItem.propTypes = {
  location: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default ServiceItem;
