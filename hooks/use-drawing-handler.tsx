import { useCallback } from "react";
import { useCanvasState } from "./use-canvas-state";
import { useTools } from "./use-tools";

export const useDrawingHandlers = () => {
    const { elements, dispatch } = useCanvasState();
    const { activeTool, cursor, selectTool } = useTools();

    // You may implement your own handlers here using activeTool, cursor, selectTool
    // For now, return them so you can use them in your components
    return {
        activeTool,
        cursor,
        selectTool,
        elements,
        dispatch,
    };
};
