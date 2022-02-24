import {
  IColor,
  IFigma,
  IFigmaFrame,
  IFigmaText,
  IGradientFill,
  IOutputObject,
} from "./interfaces";
import axios from "axios";

export default {
  // TODO: getFile
  getFile(fileKey: string, token: string): void {
    axios
      .get(`https://api.figma.com/v1/files/${fileKey}`, {
        headers: {
          "X-FIGMA-TOKEN": token,
        },
      })
      .then((res) => {
        console.log(JSON.stringify(res.data, null, 2));
        return res.data;
      })
      .catch((err) => console.log(err));
  },

  /**
   * Преобразование объекта вида: *{r:1, g: 1, b: 1, a: 1}* в CSS цвет: *rgba(255, 255, 255, 1)*
   * ```js
   * const color = figma.rgba({r:1, g: 1, b: 1, a: 1})
   * ```
   * *Принемает значения от 0 до 1*
   */
  rgba({ r = 1, g = 1, b = 1, a = 1 }: IColor): string {
    return `rgba(${(r * 255).toFixed(2)}, ${(g * 255).toFixed(2)}, ${(
      b * 255
    ).toFixed(2)}, ${a.toFixed(2)})`;
  }, // COMPLETE: rgba

  // TODO: linearGradient
  linearGradient(gradient: IGradientFill): string {
    return "";
  },

  // TODO: radialGradient
  radialGradient(gradient: IGradientFill): string {
    return "";
  },

  // TODO: background
  background({ fills = [] }: IFigmaFrame | IFigmaText): string {
    return "";
  },

  /**
   * Возвращает CSS padding
   */
  padding({
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
  }: IFigmaFrame): string {
    const sum = paddingTop + paddingRight + paddingBottom + paddingLeft;
    if (sum > 0) {
      if (paddingBottom === paddingTop && paddingLeft === paddingRight) {
        return `${paddingTop}px ${paddingRight}px`;
      }
      return `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`;
    }
    return "none";
  }, // COMPLETE: padding

  /**
   * Возвращает CSS padding
   */
  // TODO: border
  border({ strokeWeight = 0, strokes = [] }: IFigmaFrame): string {
    if (strokeWeight > 0 && strokes[0]) {
      const map = ["SOLID", "DASHED"];
      return map.includes(strokes[0].type)
        ? `${strokeWeight}px ${strokes[0].type.toLowerCase()} ${this.rgba(
            strokes[0].color
          )}`
        : "none";
    }
    return "none";
  },

  text(obj: IFigmaText): IOutputObject {
    const result = {
      tag: "div",
      style: {},
      childs: [],
    };
    return result;
  },

  frame(obj: IFigmaFrame): IOutputObject {
    const map = ["div"];
    const result = {
      tag: map.includes(obj.name) ? obj.name : "div",
      style: {
        background: this.background(obj),
        border: this.border(obj),
        padding: this.padding(obj),
      },
      childs: [],
    };
    return result;
  },

  /**
   * Парсинг объекта figma
   */
  // TODO: PARSE
  PARSE(obj: IFigma): object {
    const result = {
      tag: "",
    };
    return result;
  },
};
