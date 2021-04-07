export const apiURL = `${process.env.REACT_APP_API_SERVER}/${process.env.REACT_APP_GITHUB_ACOUNT}`;

export const apiActions = async (url, method, data) => {
  try {
    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return method === "DELETE" ? true : res.json();
  } catch (error) {
    throw new Error(`somthing went wrong: ${error}`);
  }
};
