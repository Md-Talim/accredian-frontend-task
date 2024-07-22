import ReferForm from "@/components/refer-form";
import { Box, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";

const HowToSection = () => {
  return (
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
  );
};

export default HowToSection;
