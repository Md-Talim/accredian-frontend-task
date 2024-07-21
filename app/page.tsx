import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ReferForm from "./refer-form";

const HomePage = () => {
  return (
    <Container component="main" sx={{ mt: 4, p: 4 }}>
      <Typography variant="h1" component="h1">
        Refer & Earn
      </Typography>
      <ReferForm />
    </Container>
  );
};

export default HomePage;
