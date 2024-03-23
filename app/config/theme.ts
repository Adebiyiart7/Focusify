export interface CustomTheme {
  colors: {
    background: string;
    background200: string;
    border: string;
    border100: string;
    danger: string;
    gray: string;
    lightText: string;
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
    background200: "#eee",
    border: "#ddd",
    border100: "#eee",
    danger: "#b91c1c",
    gray: "gray",
    lightText: "#9c9886",
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
    background200: "#eee",
    border: "#ddd",
    border100: "#eee",
    danger: "#b91c1c",
    gray: "gray",
    lightText: "#9c9886",
    mediumText: "#676354",
    primary: "#ff6347",
    text: "#171100",
    white: "#fff",
  },

  dark: true,
};

export { LightTheme, DarkTheme };
