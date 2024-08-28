import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Button, Divider } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

const OrderConfirmModal = ({ cartItem, setOrderConfirm }) => {
  return (
    <Modal
      keepMounted
      open={true}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <CheckCircleOutlineOutlinedIcon
          onClick={() => setOrderConfirm(false)}
          style={{ color: "hsl(159, 69%, 38%)" }}
        />
        <Typography
          style={{
            marginTop: "0.7rem",
            fontWeight: "600",
            fontSize: "x-large",
          }}
        >
          Order Confirmed
        </Typography>
        <Typography variant="subtitle">
          We hope you enjoyed your food
        </Typography>
        <Box
          style={{
            backgroundColor: "hsl(13, 31%, 94%)",
            padding: "15px",
            borderRadius: "3px",
            marginTop: "1rem",
          }}
        >
          {cartItem.map((item, idx) => (
            <>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0.8rem 0",
                  alignItems: "center",
                }}
              >
                <Box style={{ display: "flex" }}>
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "20%", borderRadius: "5px" }}
                  />
                  <Box style={{ marginLeft: "1rem" }}>
                    <Typography style={{ fontWeight: "500" }}>
                      {item.name}
                    </Typography>
                    <Box
                      style={{
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <Typography style={{ color: "hsl(14, 86%, 42%)" }}>
                        {item.quantity} X
                      </Typography>
                      <Typography>@ {item.singleItemPrice}</Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography>${item.totalPrice}</Typography>
              </Box>
              <Divider />
            </>
          ))}
          {cartItem.length > 0 && (
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
            >
              <Box style={{ fontSize: "large", marginBottom: "0.5rem" }}>
                order total
              </Box>
              <Box style={{ fontSize: "large", fontWeight: "600" }}>
                $
                {cartItem.length > 0
                  ? cartItem.reduce((acc, curr) => {
                      return acc + curr.totalPrice;
                    }, 0)
                  : cartItem.totalPrice}
              </Box>
            </Box>
          )}
        </Box>
        <Button
          variant="contained"
          style={{
            width: "100%",
            backgroundColor: "hsl(14, 86%, 42%)",
            borderRadius: "50px",
            marginTop: "2rem",
            cursor: "default",
          }}
        >
          Start New Order
        </Button>
      </Box>
    </Modal>
  );
};

export default OrderConfirmModal;
