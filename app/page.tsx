import { Container, Stack, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Image from "next/image";
import ReferForm from "./refer-form";

const HomePage = () => {
  return (
    <Container
      component="main"
      sx={{ mt: 8, p: 0, borderRadius: 8, bgcolor: grey[200] }}
    >
      {/* Hero Section */}
      <Stack direction={{ sm: "column", md: "row" }}>
        <Stack p={4} spacing={2}>
          <Typography variant="h1" component="h1" fontWeight={600}>
            Let&apos;s Learn & Earn
          </Typography>
          <Typography variant="h4" component="p">
            Get a chance to win up-to{" "}
            <span style={{ color: blue[500], fontWeight: 600 }}>
              Rs. 15,000
            </span>
          </Typography>
          <ReferForm />
        </Stack>

        <Image
          src="/hero.png"
          height={300}
          width={500}
          alt="hero"
          className="hero-image"
          style={{
            maxWidth: "100%",
            height: "auto",
            aspectRatio: "video",
            backgroundSize: "cover",
            scale: 1.1,
          }}
        />
      </Stack>
    </Container>
  );
};

export default HomePage;
