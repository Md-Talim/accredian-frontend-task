import axios from "axios";

interface Referral {
  referrerName: string;
  referrerEmail: string;
  referrerPhone?: number;
  refereeName: string;
  refereeEmail: string;
  refereePhone?: number;
  courseName: string;
}

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
