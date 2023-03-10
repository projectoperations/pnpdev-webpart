export const CAT: string = "ðą";
export const MOUSE: string = "ð­";
export const KOALA: string = "ðĻ";
export const OCTOPUS: string = "ð";
export const MONKEY: string = "ðĩ";
export const FOX: string = "ðĶ";
export const GIRL: string = "ðĐ";
export const BOY: string = "ð§";
export const MAN: string = "ðĻâðĶē";
export const WOMAN: string = "ðĐâðĶą";

export const getBackgroundColor = (avatar: string): { backgroundColor: string } => {
  switch (avatar) {
    case CAT:
      return {
        backgroundColor: "rgb(255, 250, 228)",
      };
    case MOUSE:
      return {
        backgroundColor: "rgb(232, 242, 249)",
      };
    case KOALA:
      return {
        backgroundColor: "rgb(237, 232, 230)",
      };
    case OCTOPUS:
      return {
        backgroundColor: "rgb(255, 240, 245)",
      };
    case MONKEY:
      return {
        backgroundColor: "rgb(255, 245, 222)",
      };
    case FOX:
      return {
        backgroundColor: "rgb(255, 231, 205)",
      };
    default:
      return {
        backgroundColor: "rgb(255, 250, 228)",
      };
  }
};
