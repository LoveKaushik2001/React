import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Hello world from React!");

// const HeadingComponent = () => {
//   return (
//     <h1 id="heading">Hello world from React!</h1>
//   );
// }

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661887113/indian-food/indian-food-1120x732.jpg" className="res-logo" />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Meghna Foods" cuisine="Biryani, North Indian, Asian" />
        <RestaurantCard resName="KFC" cuisine="Burgers, Fries and coke" />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
