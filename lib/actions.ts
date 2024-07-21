import { Referral } from "@/app/types";
import axios from "axios";

export async function postReferral(referralData: Referral) {
  try {
    const response = await axios.post(
      "https://accredian-backend-task-qqpw.onrender.com/referral",
      referralData
    );
    console.log("Referral submitted successfully:", response.data);
  } catch (error) {
    console.error("Error submitting referral:", error);
  }
}
