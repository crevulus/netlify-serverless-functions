export const handler = async () => {
  console.log("this is a console log");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello world!",
    }),
  };
};
