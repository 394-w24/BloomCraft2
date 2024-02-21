import { useState, useEffect } from "react";

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import logo from "/icons/logo.png";
import "./BouquetBuilder.css";
import Container from "@mui/material/Container";
import FlowerSelect from "./FlowerSelect";
import BouquetSizeSelector from "./BouquetSize";
import FlowerTypeButton from "./FlowerTypeButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import dummyData from "./dummyData";
import FlowerShop from "./FlowerShop";
import Cart from "./Cart";
import FinalCart from "./FinalCart";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const BouquetBuilder = ({ userPreferences }) => {
  const [selectedFlowerType, setSelectedFlowerType] = useState("Focal");
  const [focalFlowers, setFocalFlowers] = useState([]);
  const [fillerFlowers, setFillerFlowers] = useState([]);
  const [foliageFlowers, setFoliageFlowers] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartView, setCartView] = useState(false);

  const [userPreferencesFlowers, setUserPreferencesFlowers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    setUserPreferencesFlowers(dummyData["flowers"].filter((flower) => {
      // apparently, the return keyword is VERY important
      return (
        userPreferences.occasion == "all" 
        || flower.occasion.some((occasion) =>
            occasion === userPreferences.occasion
        )
        && (userPreferences.shoppingFor == "all" 
        || flower.shoppingFor.some((shoppingFor) =>
            shoppingFor === userPreferences.shoppingFor
        )))

    }));
    console.log(userPreferencesFlowers);
  }, [userPreferences]);



  const calculatePrice = () => {
    let sum = 0;
    focalFlowers.forEach((flower) => {
      sum += flower.price * flower.quantity;
    });
    fillerFlowers.forEach((flower) => {
      sum += flower.price * flower.quantity;
    });
    foliageFlowers.forEach((flower) => {
      sum += flower.price * flower.quantity;
    });
    setTotalPrice(sum);
    console.log(totalPrice);
  };

  const updateQuantity = (index, newQuantity) => {
    if (selectedFlowerType === "Focal") {
      const updatedFlowers = [...focalFlowers];
      updatedFlowers[index].quantity = newQuantity;
      if (newQuantity === 0) {
        const filteredFlowers = updatedFlowers.filter(
          (flower, i) => i !== index
        );
        setFocalFlowers(filteredFlowers);
      } else {
        setFocalFlowers(updatedFlowers);
      }
    } else if (selectedFlowerType === "Filler") {
      const updatedFlowers = [...fillerFlowers];
      updatedFlowers[index].quantity = newQuantity;
      if (newQuantity === 0) {
        const filteredFlowers = updatedFlowers.filter(
          (flower, i) => i !== index
        );
        setFillerFlowers(filteredFlowers);
      } else {
        setFillerFlowers(updatedFlowers);
      }
    } else {
      const updatedFlowers = [...foliageFlowers];
      updatedFlowers[index].quantity = newQuantity;
      if (newQuantity === 0) {
        const filteredFlowers = updatedFlowers.filter(
          (flower, i) => i !== index
        );
        setFoliageFlowers(filteredFlowers);
      } else {
        setFoliageFlowers(updatedFlowers);
      }
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [focalFlowers, fillerFlowers, foliageFlowers]);


  return (

    <div className="App">
      <AppBar
        position="static"
        style={{ backgroundColor: "mustard !important" }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div style={{ margin: "0 auto" }}>
            <img src={logo} alt="Logo" className="App-logo" />
          </div>
          <IconButton
            color="inherit"
            aria-label="cart"
            onClick={() => setCartView(!cartView)}
          >
            <ShoppingCartIcon style={{ scale: "1.5" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {cartView ? (
        <>
          <ArrowBackIcon
            style={{
              left: "10",
              top: "10vh",
              position: "absolute",
              scale: "1.5",
            }}
            onClick={() => setCartView(false)}
          />
          <FinalCart
            focalFlowers={focalFlowers}
            fillerFlowers={fillerFlowers}
            foliageFlowers={foliageFlowers}
          />
          <b
            style={{ fontSize: "1.5rem" }}
          >{`Total Price: $${totalPrice}.00`}</b>
        </>
      ) : (
        <>
          <div
            className="flower-type-button-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FlowerTypeButton
              flowerType={selectedFlowerType}
              setFlowerType={setSelectedFlowerType}
              value="Filler"
            />
            <FlowerTypeButton
              flowerType={selectedFlowerType}
              setFlowerType={setSelectedFlowerType}
              value="Focal"
            />
            <FlowerTypeButton
              flowerType={selectedFlowerType}
              setFlowerType={setSelectedFlowerType}
              value="Foliage"
            />
          </div>
          <h3>{`${selectedFlowerType} Flowers `}</h3>
          <Cart
            list={
              selectedFlowerType === "Focal"
                ? focalFlowers
                : selectedFlowerType === "Filler"
                  ? fillerFlowers
                  : foliageFlowers
            }
            updateQuantity={updateQuantity}
          />
          <b>{`Total Price: $${totalPrice}.00`}</b>

          <IconButton
            color="inherit"
            aria-label="cart"
            onClick={() => setCartView(!cartView)}
          >
            <img src="/icons/flower.png" style={{ width: "2rem" }}></img> View
            cart
          </IconButton>

          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/quiz")}
            >
              Start Quiz
            </Button>

            <FlowerShop
              // flowerList={dummyData["flowers"]}
              flowerList={userPreferencesFlowers}
              selectedFlowerType={selectedFlowerType}
              typeList={
                selectedFlowerType === "Focal"
                  ? focalFlowers
                  : selectedFlowerType === "Filler"
                    ? fillerFlowers
                    : foliageFlowers
              }
              setTypeList={
                selectedFlowerType === "Focal"
                  ? setFocalFlowers
                  : selectedFlowerType === "Filler"
                    ? setFillerFlowers
                    : setFoliageFlowers
              }
              calculatePrice={calculatePrice}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BouquetBuilder;
