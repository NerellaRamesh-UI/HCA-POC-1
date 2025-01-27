export const loginCreds = {
  USERNAME: new Set(["admin", "hcaAdmin"]),
  PASSWORD: "Hca@123",
};
export const Errors = {
  INVALID: {
    username: "Please enter valid username",
    password: "Please enter valid password",
  },
  REQUIRED: {
    username: "Username is required",
    password: "Password is required",
  },
};
export const ErrorTypes = {
  INVALID: "INVALID",
  REQUIRED: "REQUIRED",
};

export const BODY_DATA = {
  sources: [
    {
      name: "",
      id: "",
    },
  ],
  emails: [""],
  addresses: [
    {
      line1: "",
      line2: "",
      city: "",
      state: "",
      postalCode: "",
    },
  ],
  names: [
    {
      first: "",
      middle: "",
      last: "",
      suffix: "",
    },
  ],
  ssns: [""],
  genders: [""],
  dateOfBirths: [""],
  phoneNumbers: [
    {
      number: "",
      areaCode: "",
      extension: "",
      countryCode: "",
    },
  ],
};
