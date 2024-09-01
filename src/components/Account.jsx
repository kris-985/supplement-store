import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";

export const Account = () => {
  const { userData } = useContext(AppContext);

  return (
    <BackgroundContainer>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <StyledCard className="card">
              <img
                src="https://img.freepik.com/premium-photo/measuring-scoop-whey-protein-wooden-table-prepare-milkshake_77593-264.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722470400&semt=ais_hybrid"
                className="card-img-top"
                alt="User"
              />
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>First Name:</strong> {userData.firstname}
                  </li>
                  <li className="list-group-item">
                    <strong>Last Name:</strong> {userData.lastname}
                  </li>
                  <li className="list-group-item">
                    <strong>Username:</strong> {userData.username}
                  </li>
                  <li className="list-group-item">
                    <strong>Email:</strong> {userData.email}
                  </li>
                </ul>
              </div>
            </StyledCard>
          </div>
        </div>
      </div>
    </BackgroundContainer>
  );
};

const StyledCard = styled.div`
  .card {
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card-img-top {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .card-body {
    padding: 20px;
  }

  .list-group-item {
    border: none;
    padding: 10px 0;
  }

  .card-title {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 15px;
  }
`;

const BackgroundContainer = styled.div`
  background-image: url("https://www.hap.org/-/media/Project/HAP/HAP/Blog/Images/Post-Images/201806/proteinpowders1105x440-(1).jpg?rev=bd8bf95e484f4e0991af3c789e085045");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
