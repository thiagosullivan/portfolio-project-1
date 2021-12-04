import axios from "axios";

export const sendContactMail = async (
  name: string,
  senderMail: string,
  content: string
  ) => {
    const data = {
      name,
      senderMail,
      content
    };

    try {
      return axios.post("/api/contact", data)
    } catch (error) {
      return error;
    }
  }