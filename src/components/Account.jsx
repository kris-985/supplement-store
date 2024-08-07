import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";

export const Account = () => {
  const { userData } = useContext(AppContext);

  return (
    <div className="container mt-5">
      <div className="row">
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
                <li className="list-group-item">
                  <strong>Orders:</strong>
                  {userData?.orders ? userData.orders : <span>No Orders</span>}
                </li>
                <li className="list-group-item">
                  <strong>Shipping Address:</strong>
                  {userData.shippingAdress || <span>No Address</span>}
                </li>
              </ul>
            </div>
          </StyledCard>
        </div>
        <div className="col-md-6">
          <StyledCard className="card">
            <div className="card-body">
              <h5 className="card-title">Favorites</h5>
              <ul className="list-group list-group-flush">
                {userData?.favorites ? (
                  userData.favorites.map((favorite, index) => (
                    <li key={index} className="list-group-item">
                      {favorite}
                    </li>
                  ))
                ) : (
                  <li className="list-group-item">
                    <span>No Favorites</span>
                  </li>
                )}
              </ul>
            </div>
          </StyledCard>
        </div>
      </div>
    </div>
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
