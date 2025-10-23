import { BoldIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { useToolbar } from './toolbar-provider';

type ButtonProps = ComponentPropsWithoutRef<typeof Button>;
// import type { Extension } from "@tiptap/core";
// import type { StarterKitOptions } from "@tiptap/starter-kit";

// type StarterKitExtensions = Extension<StarterKitOptions>;

const BoldToolbar = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, onClick, children, ...props }, ref) => {
        const { editor } = useToolbar();
        return (
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className={cn(
                            'h-8 w-8 p-0 sm:h-9 sm:w-9',
                            editor?.isActive('bold') && 'bg-accent',
                            className,
                        )}
                        onClick={(e: any) => {
                            editor?.chain().focus().toggleBold().run();
                            onClick?.(e);
                        }}
                        disabled={
                            !editor?.can().chain().focus().toggleBold().run()
                        }
                        ref={ref}
                        {...props}
                    >
                        {children ?? <BoldIcon className="h-4 w-4" />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>Bold</span>
                    <span className="text-gray-11 ml-1 text-xs">(cmd + b)</span>
                </TooltipContent>
            </Tooltip>
        );
    },
);

BoldToolbar.displayName = 'BoldToolbar';

export { BoldToolbar };
