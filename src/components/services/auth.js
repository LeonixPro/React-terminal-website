// Login function
export const authenticateUser = async (data) => {
  try {
    const request = fetch(`${process.env.REACT_APP_MAIN_REQUEST}/login`, {
      method: "POST",
      headers: {
        Accept: { "Content-Type": "application/json" },
      },
      body: JSON.stringify(data),
    });
    const response = await request;
    const res = await response.json();
    if (res.status === false) {
      return;
    } else {
      return res;
    }
  } catch (error) {
    console.log("There was an error!");
  }
};
