export const colorsLUT = (color: string) => {
  switch (color) {
    case "black":
      return "rgba(0,0,0,0.5)";
    case "blue":
      return "rgba(30,58,89,0.5)";
    case "red":
      return "rgba(167,28,28,0.5)";
    case "green":
      return "rgba(75,167,28,0.5)";

    default:
      return "rgba(152,152,152,0.4)";
  }
};
