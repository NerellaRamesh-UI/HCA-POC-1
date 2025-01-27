export const getAPIEndpoint = () => {
  const { location: { hostname: HOST_NAME = "" } = {} } = window || {};
  const DEV_URL =
    "https://owiodvx3w1.execute-api.us-east-1.amazonaws.com/Prod/";
  const QA_URL = "";
  const UAT_URL = "";
  const PREPROD_URL = "";
  const URLS = {
    localhost: DEV_URL, //DEV
  };
  return URLS[HOST_NAME] || DEV_URL;
};
