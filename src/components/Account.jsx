import { useContext } from "react";
import AppContext from "../context/AppContext";

export const Account = () => {
  const { userData } = useContext(AppContext);

  return (
    <div>
      <ul>
        <li>First Name:{userData.firstname}</li>
        <li>Last Name:{userData.lastname}</li>
        <li>Username:{userData.username}</li>
        <li>Email:{userData.email}</li>
        <li>
          Favorites:
          {userData?.favorites ? userData.favorites : <span>No Favorites</span>}
        </li>
        <li>
          Orders: {userData?.orders ? userData.orders : <span>No Orders</span>}
        </li>
        <li>
          Shipping adress:
          {userData.shippingAdress ? (
            userData.shippingAdress
          ) : (
            <span>No Adress</span>
          )}
        </li>
      </ul>
    </div>
  );
};
