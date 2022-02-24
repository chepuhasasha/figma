// TODO: дописать типы
export interface IColor {
  r: number;
  g: number;
  b: number;
  a: number;
}
export interface ICoord {
  x: number;
  y: number;
}
export interface ISolidFill {
  type: string;
  color: IColor;
}
export interface IGradientFill {
  gradientStops: IColor[];
  gradientHandlePositions: ICoord[];
}

export interface IFigma {
  id: string;
  name: string;
  type: string;
  children: IFigma[];
}

export interface IFigmaText extends IFigma {
  fills: ISolidFill[] | IGradientFill[];
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number;
  letterSpacing?: number;
  lineHeightPx?: number;
  textAlignHorizontal?: string;
  textAlignVertical?: string;
}

export interface IFigmaFrame extends IFigma {
  fills: ISolidFill[] | IGradientFill[];
  strokes?: ISolidFill[];
  strokeWeight?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
}

export interface IOutputObject {
  tag: string;
  style: object;
  content?: string | number;
  childs: IOutputObject[];
}
