export default {
  rgba({ r = 1, g = 1, b = 1, a = 1 }): string {
    return `rgba(${(r * 255).toFixed(2)}, ${(g * 255).toFixed(2)}, ${(
      b * 255
    ).toFixed(2)}, ${a.toFixed(2)})`;
  },
};
