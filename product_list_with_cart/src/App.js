import data from "./data.json";
import "./App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Item from "./components/Item";
import CartCard from "./components/CartCard";
import OrderConfirmModal from "./components/OrderConfirmModal";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [orderConfirm, setOrderConfirm] = useState(false);
  const [activeCardId, setActiveCardId] = useState("");

  function handleCancelItem(idx) {
    const newCartItem = [...cartItem];
    newCartItem.splice(idx, idx + 1);
    setCartItem(newCartItem);
  }

  return (
    <Box style={{display: "flex" }}>
      {orderConfirm && (
        <OrderConfirmModal
          cartItem={cartItem}
          setOrderConfirm={setOrderConfirm}
        />
      )}
      <Grid container>
        <Grid lg={8} style={{ marginRight: "4rem" }}>
          <Typography
            style={{ textAlign: "center", marginBottom: "20px", fontWeight: "500", fontSize: "x-large" }}
          >
            Desserts
          </Typography>
          <Grid container spacing={2} style={{width: "100%", margin: "auto"}}>
            {data.map((item, idx) => (
              <Item
                item={item}
                id={idx}
                key={idx}
                cartItem={cartItem}
                setCartItem={setCartItem}
                activeCardId={activeCardId}
                setActiveCardId={setActiveCardId}
              />
            ))}
          </Grid>
        </Grid>
        <Grid lg={3}>
          <CartCard
            cartItem={cartItem}
            handleCancelItem={handleCancelItem}
            setOrderConfirm={setOrderConfirm}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
