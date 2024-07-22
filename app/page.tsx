import { Box, Container, Stack, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Image from "next/image";
import ReferForm from "./refer-form";

const HomePage = () => {
  return (
    <Container component="main">
      {/* Hero Section */}
      <Stack
        direction={{ sm: "column", md: "row" }}
        sx={{
          mt: 8,
          p: 0,
          borderRadius: 8,
          bgcolor: grey[200],
          overflow: "hidden",
        }}
      >
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
          }}
        />
      </Stack>

      {/* How to Section */}
      <Box mt={8}>
        <Typography fontWeight={600} variant="h4" component="h2">
          How Do I Refer?
        </Typography>

        <Stack
          my={4}
          direction={{ sm: "column", md: "row" }}
          justifyContent="space-between"
          sx={{ gap: 4 }}
        >
          <Stack spacing={2} sx={{ bgcolor: grey[200], p: 4, borderRadius: 4 }}>
            <Typography color={grey[800]} fontWeight={600}>
              01
            </Typography>
            <Image src="/user.svg" height={32} width={32} alt="icon" />
            <Typography component="p">
              Submit referrals easily via our website’s referral section.
            </Typography>
          </Stack>
          <Stack spacing={2} sx={{ bgcolor: grey[200], p: 4, borderRadius: 4 }}>
            <Typography color={grey[800]} fontWeight={600}>
              02
            </Typography>
            <Image src="/doc.svg" height={32} width={32} alt="icon" />
            <Typography component="p">
              Earn rewards once your referral joins an Accredian program.
            </Typography>
          </Stack>
          <Stack spacing={2} sx={{ bgcolor: grey[200], p: 4, borderRadius: 4 }}>
            <Typography color={grey[800]} fontWeight={600}>
              03
            </Typography>
            <Image src="/wallet.svg" height={32} width={32} alt="icon" />
            <Typography component="p">
              Both parties receive a bonus 30 days after program enrollment.
            </Typography>
          </Stack>
        </Stack>

        <ReferForm />
      </Box>
    </Container>
  );
};

export default HomePage;
