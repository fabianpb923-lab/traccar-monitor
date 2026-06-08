import axios from "axios";

let sessionCookie = null;

export const login = async () => {
  try {
    console.log(
      "LOGIN URL:",
      `${process.env.TRACCAR_URL}/api/session`
    );

    const response = await axios.post(
      `${process.env.TRACCAR_URL}/api/session`,
      new URLSearchParams({
        email: process.env.TRACCAR_USER,
        password: process.env.TRACCAR_PASSWORD,
      }),
      {
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
      }
    );

    console.log("LOGIN OK");

    // store only the cookie name=value (strip attributes like Path, HttpOnly)
    const raw = response.headers["set-cookie"]?.[0] || null;
    sessionCookie = raw ? raw.split(";")[0] : null;

    return sessionCookie;
  } catch (error) {
    console.error(
      "LOGIN STATUS:",
      error.response?.status
    );

    console.error(
      "LOGIN DATA:",
      error.response?.data
    );

    console.error(
      "LOGIN MESSAGE:",
      error.message
    );

    throw error;
  }
};

export const getSessionCookie = async () => {
  if (!sessionCookie) {
    await login();
  }

  return sessionCookie;
};