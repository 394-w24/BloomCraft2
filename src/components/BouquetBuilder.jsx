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
import VisualBouquet from "./VisualBouquet";

const BouquetBuilder = ({ userPreferences }) => {
  const [selectedFlowerType, setSelectedFlowerType] = useState("Focal");
  const [focalFlowers, setFocalFlowers] = useState([]);
  const [fillerFlowers, setFillerFlowers] = useState([]);
  const [foliageFlowers, setFoliageFlowers] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartView, setCartView] = useState(false);
  const [bouquetSize, setBouquetSize] = useState("Small");
  const [flowerNumber, setFlowerNumber] = useState(0);
  const [flowerLimit, setFlowerLimit] = useState(0);

  const [userPreferencesFlowers, setUserPreferencesFlowers] = useState([]);

  const [selectedNote, setSelectedNote] = useState("");
  const [customNote, setCustomNote] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const filteredFlowers = dummyData["flowers"].filter((flower) => {
      return (
        userPreferences.occasion === "all" ||
        (flower.occasion.some(
          (occasion) => occasion === userPreferences.occasion
        ) &&
          (userPreferences.shoppingFor === "all" ||
            flower.shoppingFor.some(
              (shoppingFor) => shoppingFor === userPreferences.shoppingFor
            )))
      );
    });

    setUserPreferencesFlowers(filteredFlowers);

    if (userPreferences.template) {
      prePopulateCart(filteredFlowers);
    }
  }, [userPreferences]);

  const prePopulateCart = (flowers) => {
    const newFocalFlowers = [];
    const newFillerFlowers = [];
    const newFoliageFlowers = [];

    flowers.forEach((flower) => {
      const newFlower = { ...flower, quantity: 1 }; // Prepare the flower object with quantity
      switch (flower.type) {
        case "Focal":
          newFocalFlowers.push(newFlower);
          break;
        case "Filler":
          newFillerFlowers.push(newFlower);
          break;
        case "Foliage":
          newFoliageFlowers.push(newFlower);
          break;
        default:
          console.log("Unknown flower type:", flower.type);
      }
    });

    setFocalFlowers((focalFlowers) => [...focalFlowers, ...newFocalFlowers]);
    setFillerFlowers((fillerFlowers) => [
      ...fillerFlowers,
      ...newFillerFlowers,
    ]);
    setFoliageFlowers((foliageFlowers) => [
      ...foliageFlowers,
      ...newFoliageFlowers,
    ]);

    calculatePrice();
  };

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

    console.log(focalFlowers);
    console.log(fillerFlowers);
    console.log(foliageFlowers);
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

  const updateTotalQuantity = () => {
    let sum = 0;
    focalFlowers.forEach((flower) => {
      sum += flower.quantity;
    });
    fillerFlowers.forEach((flower) => {
      sum += flower.quantity;
    });
    foliageFlowers.forEach((flower) => {
      sum += flower.quantity;
    });
    setFlowerNumber(sum);
  };

  const updateFlowerLimit = () => {
    if (bouquetSize === "Small") {
      setFlowerLimit(6);
    } else if (bouquetSize === "Medium") {
      setFlowerLimit(12);
    } else {
      setFlowerLimit(18);
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [focalFlowers, fillerFlowers, foliageFlowers]);

  useEffect(() => {
    updateTotalQuantity();
    updateFlowerLimit();
  }, [focalFlowers, fillerFlowers, foliageFlowers, bouquetSize]);

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
          <IconButton
            color="inherit"
            onClick={() => setCartView(false)}
            style={{
              left: "1.5vh",
              top: "12vh",
              position: "absolute",
            }}>
            <ArrowBackIcon
              style={{
                scale: "1.5",
              }}
            />
          </IconButton>
          <FinalCart
            focalFlowers={focalFlowers}
            fillerFlowers={fillerFlowers}
            foliageFlowers={foliageFlowers}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
            customNote={customNote}
            setCustomNote={setCustomNote}
          />
          <b
            style={{ fontSize: "1.5rem" }}
          >{`Total Price: $${totalPrice}.00`}</b>
        </>
      ) : (
        <>
          <BouquetSizeSelector bouquetSizeSelection={bouquetSize} setBouquetSize={setBouquetSize} />
          <div
            className="flower-type-button-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <FlowerTypeButton
                flowerType={selectedFlowerType}
                setFlowerType={setSelectedFlowerType}
                value="Filler"
              />
            </div>

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
          {flowerNumber > flowerLimit && (
            <p style={{ color: "red" }}>
              {`You have exceeded the limit of ${flowerLimit} flowers`}
            </p>
          )}
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
            <VisualBouquet
              focalList={focalFlowers}
              fillerList={fillerFlowers}
              foliageList={foliageFlowers}
              bouquetSize={bouquetSize}
            />
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/quiz")}
                style={{
                  display: "flex",
                }}
              >
                Start Quiz
              </Button>
            </div>

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
              updateTotalQuantity={updateTotalQuantity}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BouquetBuilder;
