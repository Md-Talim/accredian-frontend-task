import { Referral } from "@/app/types";
import axios from "axios";

export async function postReferral(referralData: Referral) {
  const apiUrl = process.env.API_URL;

  if (!apiUrl) {
    throw new Error("API URL is missing from the environment variables!");
  }

  try {
    const response = await axios.post(apiUrl, referralData);
    console.log("Referral submitted successfully:", response.data);
  } catch (error) {
    console.error("Error submitting referral:", error);
  }
}
