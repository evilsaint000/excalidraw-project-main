import { Drawable } from "roughjs/bin/core";

export type CursorStateType =
    | "default"
    | "crosshair"
    | "not-allowed"
    | "grab"
    | "grabbing"
    | "text";
export type StrokeWidthType = "thin" | "bold" | "extrabold";
export type StrokeStyleType = "solid" | "dashed" | "dotted";

export type ToolType =
    | "select"
    | "draw"
    | "rectangle"
    | "circle"
    | "erase"
    | "pan"
    | "line"
    | "text"
    | "arrow";

export type ShapeType = "rectangle" | "circle" | "square" | "line" | "pencil" | "text" | "arrow";
export type Point = { x: number; y: number; pressure?: number };

export type DrawnElementType = {
    id: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    roughElement: Drawable | undefined;
    // shape: ShapesType;
    points?: Point[];
    textValue?: string;

    isSelected?: boolean;
    offsetX?: number;
    offsetY?: number;
    strokeOptions?: Record<string, any>;

    textAlign?: TextAlignType;
    fontSize?: FontSizeType;
    fontFamily?: FontFamilyType;
};

export type CanvasElement = {
    id: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    shape: ShapeType;
    roughElement?: Drawable;
    points?: Point[];
    textValue?: string;
    textAlign?: TextAlignType;
    fontSize?: number;
    fontFamily?: string;
    strokeOptions?: Record<string, any>;
    offsetX?: number;
    offsetY?: number;
};

export type StrokeOptions = {
    color: string;
    width: number;
    style: "solid" | "dashed" | "dotted";
};

export type FontSizeType = 18 | 20 | 24 | 26;
export type FontFamilyType =
    | "__Epilogue_063c31, __Epilogue_Fallback_063c31"
    | "__Montserrat_cce811, __Montserrat_Fallback_cce811"
    | "__Roboto_Mono_829659, __Roboto_Mono_Fallback_829659";
export type TextAlignType = "left" | "center" | "right";

export type XYWH = {
    x: number;
    y: number;
    width: number;
    height: number;
};

export type Position = "tl" | "tr" | "bl" | "br" | "tm" | "lm" | "rm" | "bm";
export type Coordinates = {
    x: number;
    y: number;
};

export type PositionStatus = "inside" | "outside" | "boundary";
export type ElementAtPosition =
    | { positionStatus: "inside" | "boundary"; element: CanvasElement }
    | { positionStatus: "outside"; element: null };

export type ToolCursorState = {
    tool: ShapeType | "select" | "erase";
    cursor: string;
};

export type BoundingBox = { x1: number; y1: number; x2: number; y2: number };
