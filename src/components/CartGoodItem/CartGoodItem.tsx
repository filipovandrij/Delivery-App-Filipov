import { FC } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import {
  addGoodToCart,
  deleteGoodFromCart,
} from "../../store/reducers/cartSlice";
import { useAppDispatch } from "../../hooks/redux";
import { IGood } from "../../models/IGood";

interface Props {
  cartGood: IGood;
}

const CartGoodItem: FC<Props> = ({ cartGood }) => {
  const dispatch = useAppDispatch();

  const { image, name, price, quantity } = cartGood;

  const changeQuantity = (item: IGood, quantity: number) => {
    dispatch(addGoodToCart({ ...item, quantity }));
  };

  const deleteGood = () => {
    dispatch(deleteGoodFromCart(cartGood));
  };

  return (
    <Card sx={{ display: "flex", width: "100%" }}>
      <CardMedia
        component="img"
        alt={name}
        sx={{ width: "250px", maxHeight: "250px" }}
        image={image}
      />
      <Box flexGrow={2}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            textAlign={"center"}
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            textAlign={"center"}
          >
            Price: {price}$
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <Remove
              onClick={() =>
                changeQuantity(cartGood, Math.max(1, quantity - 1))
              }
            />
            <Typography component={"span"}>{quantity}</Typography>
            <Add
              onClick={() =>
                changeQuantity(cartGood, Math.max(1, quantity + 1))
              }
            />
          </Box>
          <Button variant="contained" onClick={deleteGood}>
            delete
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CartGoodItem;
