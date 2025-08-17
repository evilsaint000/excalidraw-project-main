"use client";

import { ShapeType } from "@/types";
import { useCanvasState } from "./use-canvas-state";
import rough from "roughjs";
import { RoughCanvas } from "roughjs/bin/canvas";
import { Drawable } from "roughjs/bin/core";
// drawOnCanvas is used for rendering; here we create element objects instead
import { drawOnCanvas } from "@/lib/utils";

export const useDrawingTool = (shapeType: ShapeType) => {
    const { dispatch, elements, getScaledCoordinates } = useCanvasState();

    const handleMouseDown = (e: React.MouseEvent) => {
        const { x, y } = getScaledCoordinates(e.clientX, e.clientY);
        const id = elements.length;
        // Initialize element with starting coordinates; x2/y2 will be updated on mouse move
        const newElement = {
            id,
            x1: x,
            y1: y,
            x2: x,
            y2: y,
            shape: shapeType,
            roughElement: undefined,
        };
        dispatch({ type: "ADD_ELEMENT", element: newElement });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        const { x, y } = getScaledCoordinates(e.clientX, e.clientY);
        const lastElement = elements[elements.length - 1];
        if (!lastElement) return;
        dispatch({ type: "UPDATE_ELEMENT", id: lastElement.id, updates: { x2: x, y2: y } });
    };

    return { handleMouseDown, handleMouseMove };
};
