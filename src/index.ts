// TODO: дописать типы
interface IColor {
  r: number;
  g: number;
  b: number;
  a: number;
}
interface ISolidFill {
  type: string;
  color: IColor;
}
interface IGradientFill {
  type: string;
  color: IColor;
}

interface IFigma {
  id: string;
  name: string;
  type: string;
  children: IFigma[];
}

interface IFigmaText extends IFigma {
  fills: ISolidFill[] | IGradientFill[];
}
interface IFigmaFrame extends IFigma {
  fills: ISolidFill[] | IGradientFill[];
  strokes?: ISolidFill[];
  strokeWeight?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
}

export default {
  // TODO: getFile
  getFile(fileKey: string, token: string): object {
    return {};
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
  linearGradient(gradient: object): string {
    return "";
  },

  // TODO: radialGradient
  radialGradient(gradient: object): string {
    return "";
  },

  // TODO: background
  background({ fills = [] }: IFigma): string {
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
        ? `${strokeWeight}px ${strokes[0].type.toLowerCase()}`
        : "none";
    }
    return "none";
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
