import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { PopoverArrow } from '@radix-ui/react-popover';
import { Table } from 'lucide-react';
import { useState } from 'react';
import { useToolbar } from '../toolbars/toolbar-provider';

export const TableToolbar = () => {
    const { editor } = useToolbar();

    const [hoverRow, setHoverRow] = useState(0);
    const [hoverCol, setHoverCol] = useState(0);
    const maxRows = 10;
    const maxCols = 10;

    if (!editor) return null;

    const handleInsert = (rows: number, cols: number) => {
        editor
            .chain()
            .focus()
            .insertTable({ rows, cols, withHeaderRow: true })
            .run();
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <button
                    type="button"
                    className="flex items-center rounded p-2 hover:bg-muted"
                    title="Insert Table"
                >
                    <Table className="mr-2 size-4" />
                    <span className="text-sm">Table</span>
                </button>
            </PopoverTrigger>

            <PopoverContent
                align="start"
                sideOffset={8}
                className="z-50 w-auto rounded-md border bg-background p-3 shadow-md"
            >
                <div className="flex flex-col items-center select-none">
                    {/* ✅ langsung 10x10 grid */}
                    <div
                        className="grid gap-0.5"
                        style={{
                            gridTemplateColumns: `repeat(${maxCols}, 1.25rem)`,
                        }}
                    >
                        {Array.from({ length: maxRows * maxCols }).map(
                            (_, index) => {
                                const row = Math.floor(index / maxCols);
                                const col = index % maxCols;
                                const active =
                                    row <= hoverRow && col <= hoverCol;

                                return (
                                    <div
                                        key={index}
                                        onMouseEnter={() => {
                                            setHoverRow(row);
                                            setHoverCol(col);
                                        }}
                                        onClick={() =>
                                            handleInsert(row + 1, col + 1)
                                        }
                                        className={`h-5 w-5 cursor-pointer rounded-sm border transition-colors ${
                                            active
                                                ? 'border-blue-500 bg-blue-500'
                                                : 'border-gray-300 hover:bg-gray-100'
                                        }`}
                                    />
                                );
                            },
                        )}
                    </div>

                    <div className="mt-2 text-sm text-muted-foreground">
                        {hoverCol + 1} × {hoverRow + 1}
                    </div>
                </div>

                <PopoverArrow className="fill-border" />
            </PopoverContent>
        </Popover>
    );
};
