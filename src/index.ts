export default {
  getFile(fileKey: string, token: string): object {
    return {};
  },

  /**
   * Преобразование объекта в CSS цвет
   * @param {{r: 1, g: 1, b: 1, a: 1}} color - объект
   * @returns rgba(255, 255, 255, 0.5)
   */
  rgba({ r = 1, g = 1, b = 1, a = 1 }): string {
    return `rgba(${(r * 255).toFixed(2)}, ${(g * 255).toFixed(2)}, ${(
      b * 255
    ).toFixed(2)}, ${a.toFixed(2)})`;
  },

  PARSE(obj: object): object {
    const result = {};
    return result;
  },
};
