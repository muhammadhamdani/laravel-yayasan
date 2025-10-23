import { cn } from '@/lib/utils';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import { Table } from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TextAlign from '@tiptap/extension-text-align';
import { Color, TextStyle } from '@tiptap/extension-text-style';
import Typography from '@tiptap/extension-typography';
import { EditorContent, Extension, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { InfoIcon, Subscript, Superscript } from 'lucide-react';
import { useEffect } from 'react';
import { ImageExtension } from '../tiptap/extensions/image';
import { ImagePlaceholder } from '../tiptap/extensions/image-placeholder';
import SearchAndReplace from '../tiptap/extensions/search-and-replace';
import { EditorToolbar } from '../tiptap/toolbars/editor-toolbar';
import { Label } from '../ui/label';

import '../tiptap/tiptap.css';

export const EditorComponent = ({
    label,
    className,
    value = '',
    errors,
    helperText,
    handleOnChange,
}: EditorPropsComponent) => {
    const extensions = [
        StarterKit.configure({
            orderedList: {
                HTMLAttributes: {
                    class: 'list-decimal',
                },
            },
            bulletList: {
                HTMLAttributes: {
                    class: 'list-disc',
                },
            },
            heading: {
                levels: [1, 2, 3, 4],
            },
        }),
        Placeholder.configure({
            emptyNodeClass: 'is-editor-empty',
            placeholder: ({ node }) => {
                switch (node.type.name) {
                    case 'heading':
                        return `Heading ${node.attrs.level}`;
                    case 'detailsSummary':
                        return 'Section title';
                    case 'codeBlock':
                        // never show the placeholder when editing code
                        return '';
                    default:
                        return "Write, type '/' for commands";
                }
            },
            includeChildren: false,
        }),
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
        Table.configure({
            resizable: true, // aktifkan resizable kalau pakai extension resizable table
            HTMLAttributes: {
                class: 'w-full table-auto',
            },
        }),
        TableRow,
        TableHeader,
        TableCell,
        TextStyle,
        Subscript,
        Superscript,
        Color,
        Highlight.configure({
            multicolor: true,
        }),
        ImageExtension,
        ImagePlaceholder,
        SearchAndReplace,
        Typography,
    ];

    const editor = useEditor({
        immediatelyRender: false,
        extensions: extensions as Extension[],
        content: value,
        editorProps: {
            attributes: {
                class: 'max-w-full focus:outline-none',
            },
        },
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            handleOnChange?.(html);
        },
    });

    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value); // false = tidak fokuskan ulang cursor
        }
    }, [value, editor]);

    if (!editor) return null;

    return (
        <div className="flex flex-col space-y-4">
            {label && <Label>{label}</Label>}
            <div
                className={cn(
                    'relative max-h-[calc(100dvh-6rem)] w-full overflow-hidden overflow-y-scroll border bg-card pb-[60px] sm:pb-0',
                    className,
                )}
            >
                <EditorToolbar editor={editor} />
                <EditorContent
                    editor={editor}
                    className="min-h-[600px] w-full min-w-full cursor-text sm:p-6"
                />
            </div>
            {helperText && (
                <div
                    className={cn(
                        'flex items-center space-x-2 text-xs',
                        errors && 'text-red-500',
                    )}
                >
                    <InfoIcon
                        className={cn(
                            'h-4 w-4',
                            errors ? 'text-red-500' : 'text-yellow-500',
                        )}
                    />
                    <span>{helperText}</span>
                </div>
            )}
        </div>
    );
};

interface EditorPropsComponent {
    label?: string;
    className?: string;
    value: string;
    errors?: any;
    helperText?: string;
    handleOnChange: (value: string) => void;
}
