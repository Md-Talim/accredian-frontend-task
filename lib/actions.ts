import { Referral } from "@/app/types";
import axios from "axios";

export async function postReferral(referralData: Referral) {
  try {
    const response = await axios.post(
      "http://localhost:8000/referral",
      referralData
    );
    console.log("Referral submitted successfully:", response.data);
  } catch (error) {
    console.error("Error submitting referral:", error);
  }
}
