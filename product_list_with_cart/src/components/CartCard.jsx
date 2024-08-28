import React from "react";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";

const CartCard = ({ cartItem, handleCancelItem, setOrderConfirm }) => {
  return (
    <Card style={{ padding: "1rem", marginTop: "2rem" }}>
      <Typography
        style={{
          color: "hsl(14, 86%, 42%)",
          fontWeight: "800",
          fontSize: "large",
        }}
      >
        Your Cart {cartItem.quantity >= 1 ? `(${cartItem.quantity})` : "(0)"}
      </Typography>
      {cartItem.length > 0 ? (
        <>
          {cartItem.map((item, idx) => (
            <Box key={idx} style={{ margin: "1rem 0" }}>
              <Typography style={{ fontWeight: "500", marginBottom: "0.5rem" }}>
                {item.name}
              </Typography>
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  style={{ color: "hsl(14, 86%, 42%)", fontWeight: "600" }}
                >
                  {item.quantity} X
                </Typography>
                <Typography>${item.singleItemPrice}</Typography>
                <Typography>${item.totalPrice}</Typography>
                <CancelOutlinedIcon
                  style={{ color: "hsl(14, 25%, 72%)", cursor: "pointer" }}
                  onClick={() => handleCancelItem(idx)}
                  className="cancel-cart-item"
                />
              </Box>
            </Box>
          ))}
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography style={{ fontSize: "large", marginBottom: "0.5rem" }}>
              order total
            </Typography>
            <Typography style={{ fontSize: "large", fontWeight: "600" }}>
              $
              {cartItem.length > 0
                ? cartItem.reduce((acc, curr) => {
                    return acc + curr.totalPrice;
                  }, 0)
                : cartItem.totalPrice}
            </Typography>
          </Box>
          <Box
            style={{
              backgroundColor: "hsl(13, 31%, 94%)",
              borderRadius: "5px",
              padding: "5px",
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ParkOutlinedIcon style={{ color: "hsl(159, 69%, 38%)" }} /> This is
            a carbon neutral delivery
          </Box>
          <Button
            variant="contained"
            style={{
              width: "100%",
              backgroundColor: "hsl(14, 86%, 42%)",
              borderRadius: "50px",
            }}
            onClick={() => setOrderConfirm(true)}
          >
            Confirm Order
          </Button>
        </>
      ) : (
        <>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://img.freepik.com/premium-vector/search-found-no-data-found-data-empty_1249780-8.jpg?w=740"
              alt=""
              style={{ width: "50%", height: "50%" }}
            />
          </Box>
          <Typography
            style={{ color: "hsl(12, 20%, 44%)", textAlign: "center" }}
          >
            Your added items will appear here
          </Typography>
        </>
      )}
    </Card>
  );
};

export default CartCard;
