export interface CustomTheme {
  colors: {
    background: string;
    border: string;
    gray: string;
    mediumText: string;
    primary: string;
    text: string;
    white: string;
  };
  dark: boolean;
}

const LightTheme: CustomTheme = {
  colors: {
    background: "#fff",
    border: "#ddd",
    gray: "gray",
    mediumText: "#676354",
    primary: "#ff6347",
    text: "#171100",
    white: "#fff",
  },

  dark: false,
};

const DarkTheme: CustomTheme = {
  colors: {
    background: "#fff",
    border: "#ddd",
    gray: "gray",
    mediumText: "#676354",
    primary: "#ff6347",
    text: "#171100",
    white: "#fff",
  },

  dark: true,
};

export { LightTheme, DarkTheme };
