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
  rgba({ r = 1, g = 1, b = 1, a = 1 }): string {
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
  background(fills: object[]): string {
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
  }): string {
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
  border({}): string {
    return "";
  },

  /**
   * Парсинг объекта figma
   */
  // TODO: PARSE
  PARSE(obj: { name: string; childrens: object[] }): object {
    const result = {
      tag: "",
    };
    return result;
  },
};
