import React, { useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Chip from "@mui/material/Chip";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Item = ({
  cartItem,
  item,
  setCartItem,
  id,
  activeCardId,
  setActiveCardId,
}) => {
  const [isItemInCart, setIsItemInCart] = useState(false);
  const [quantityInCart, setQuantityInCart] = useState(0);

  useEffect(() => {
    if (!cartItem.some((item) => item.id === id)) {
      setIsItemInCart(false);
    }
    //  eslint-disable-next-line
  }, [cartItem.length]);

  function handleCartItem() {
    setActiveCardId(id);
    setQuantityInCart(1);
    setCartItem((prev) => [
      ...prev,
      {
        id: id,
        image: item.image.desktop,
        name: item.name,
        quantity: 1,
        singleItemPrice: item.price,
        totalPrice: item.price,
      },
    ]);
    setIsItemInCart(true);
  }

  function handleQuantity(type) {
    const itemIndex = cartItem.findIndex((item) => item.id === id);
    if (type === "remove") {
      if (quantityInCart > 1) {
        const newCartItem = cartItem;
        newCartItem[itemIndex] = {
          id: id,
          image: item.image.desktop,
          name: item.name,
          quantity: quantityInCart - 1,
          singleItemPrice: item.price,
          totalPrice: (quantityInCart - 1) * item.price,
        };
        setCartItem([...newCartItem]);
        setQuantityInCart(quantityInCart - 1);
      } else {
        alert("value can not be negative");
      }
    } else if (type === "add") {
      cartItem[itemIndex] = {
        id: id,
        image: item.image.desktop,
        name: item.name,
        quantity: quantityInCart + 1,
        singleItemPrice: item.price,
        totalPrice: (quantityInCart + 1) * item.price,
      };
      setCartItem([...cartItem]);
      setQuantityInCart(quantityInCart + 1);
    }
  }

  return (
    <Grid item lg={4} style={{ marginBottom: "1rem" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <picture>
            <source media="(min-width:1024px)" srcSet={item.image.desktop} />
            <source media="(min-width:768px)" srcSet={item.image.tablet} />
            <source media="(max-width:767px)" srcSet={item.image.mobile} />
            <img
              src={item.image.thumbnail}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                border: `1px solid ${
                  activeCardId === id ? "hsl(14, 86%, 42%)" : "white"
                }`,
                borderRadius: "5px",
                boxShadow:
                  activeCardId === id
                    ? "0px 0px 15px rgba(0, 0, 0, 0.3)"
                    : "none",
                transition: "box-shadow 0.3s ease",
              }}
              onClick={() => setActiveCardId(id)}
            />
          </picture>
          {isItemInCart ? (
            <Box
              style={{
                position: "absolute",
                backgroundColor: "hsl(14, 86%, 42%)",
                zIndex: "1",
                bottom: "0",
                padding: "4px",
                borderRadius: "50px",
                display: "flex",
                width: "60%",
                marginBottom: "-12px",
                justifyContent: "space-between",
              }}
            >
              <RemoveCircleIcon
                style={{
                  marginRight: "10px",
                  color: "white",
                }}
                onClick={() => handleQuantity("remove")}
              />
              <Typography style={{ color: "white" }}>
                {quantityInCart}
              </Typography>
              <AddCircleIcon
                style={{
                  marginLeft: "10px",
                  color: "white",
                }}
                onClick={() => handleQuantity("add")}
              />
            </Box>
          ) : (
            <Chip
              label="Add to cart"
              style={{
                position: "absolute",
                backgroundColor: "white",
                zIndex: "1",
                bottom: "0",
                marginBottom: "-12px",
                border: "1px solid hsl(14, 86%, 42%)",
                padding: "5px",
              }}
              icon={
                <AddShoppingCartIcon style={{ color: "hsl(14, 86%, 42%)" }} />
              }
              onClick={() => handleCartItem()}
            />
          )}
        </Box>
        <Box style={{ marginTop: "2rem" }}>
          <Typography style={{ color: "gray" }}>{item.category}</Typography>
          <Typography>{item.name}</Typography>
          <Typography style={{ color: "hsl(14, 86%, 42%)", fontWeight: "500" }}>
            $ {item.price}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Item;
