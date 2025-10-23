import type { Editor } from '@tiptap/react';
import { createContext, ReactNode, useContext } from 'react';

export interface ToolbarContextProps {
    editor: Editor;
}

export const ToolbarContext = createContext<ToolbarContextProps | null>(null);

interface ToolbarProviderProps {
    editor: Editor;
    children: ReactNode;
}

export const ToolbarProvider = ({ editor, children }: ToolbarProviderProps) => {
    return (
        <ToolbarContext.Provider value={{ editor }}>
            {children}
        </ToolbarContext.Provider>
    );
};

export const useToolbar = () => {
    const context = useContext(ToolbarContext);

    if (!context) {
        throw new Error('useToolbar must be used within a ToolbarProvider');
    }

    return context;
};
