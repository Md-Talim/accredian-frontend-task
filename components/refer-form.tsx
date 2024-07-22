"use client";

import { Referral } from "@/app/types";
import { postReferral } from "@/lib/actions";
import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const ReferForm = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Referral>();

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<Referral> = async (referralData) => {
    setIsSubmitting(true);

    try {
      await postReferral(referralData);
    } catch (error) {
      console.error("Error submitting referral: ", error);
    } finally {
      setIsSubmitting(false);
      reset();
    }
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => setOpen(true)}
      >
        Refer Now
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle variant="h5">Refer a Course</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "400px", marginInline: "auto" }}
          >
            <Stack spacing={2}>
              <Typography variant="h6">Course Details</Typography>
              <Box>
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  label="Course Name"
                  {...register("courseName", {
                    required: "Please enter the course name.",
                  })}
                />
                {errors.courseName && (
                  <p className="error">{errors.courseName.message}</p>
                )}
              </Box>
            </Stack>

            {/* ------- Referrer's Details ------- */}
            <Stack spacing={2} mt={4}>
              <Typography variant="h6">Your Details</Typography>

              {/* Referrer Name */}
              <Box>
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  label="Your Name"
                  {...register("referrerName", {
                    required: "Please enter your name.",
                  })}
                />
                {errors.referrerName && (
                  <p className="error">{errors.referrerName.message}</p>
                )}
              </Box>

              {/* Referrer Email */}
              <Box>
                <TextField
                  sx={{ width: "100%" }}
                  type="email"
                  label="Your Email"
                  {...register("referrerEmail", {
                    required: "Please enter your email.",
                  })}
                />
                {errors.referrerEmail && (
                  <p className="error">{errors.referrerEmail.message}</p>
                )}
              </Box>

              {/* Referrer Phone */}
              <Box>
                <TextField
                  sx={{ width: "100%" }}
                  type="tel"
                  label="Your Phone No."
                  {...register("referrerPhone", {
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid contact number",
                    },
                  })}
                />
                {errors.referrerPhone && (
                  <p className="error">{errors.referrerPhone.message}</p>
                )}
              </Box>
            </Stack>

            {/* ------- Referee's Details ------- */}
            <Stack spacing={2} mt={4}>
              <Typography variant="h6">Referee&apos;s Details</Typography>

              {/* Referee's Name */}
              <Box>
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  label="Referee's Name"
                  {...register("refereeName", {
                    required: "Please enter the referee's name.",
                  })}
                />
                {errors.refereeName && (
                  <p className="error">{errors.refereeName.message}</p>
                )}
              </Box>

              {/* Referee's Email */}
              <Box>
                <TextField
                  sx={{ width: "100%" }}
                  type="email"
                  label="Referee's Email"
                  {...register("refereeEmail", {
                    required: "Please enter the referee's email.",
                  })}
                />
                {errors.refereeEmail && (
                  <p className="error">{errors.refereeEmail.message}</p>
                )}
              </Box>

              {/* Referee's Contact */}
              <Box>
                <TextField
                  sx={{ width: "100%" }}
                  type="tel"
                  label="Referee's Phone No."
                  {...register("refereePhone", {
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid contact number",
                    },
                  })}
                />
                {errors.refereePhone && (
                  <p className="error">{errors.refereePhone.message}</p>
                )}
              </Box>
            </Stack>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                mt: 4,
              }}
            >
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained" color="primary">
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ReferForm;