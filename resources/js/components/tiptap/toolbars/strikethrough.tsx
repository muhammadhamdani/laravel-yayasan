import { Strikethrough } from 'lucide-react';

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

const StrikeThroughToolbar = forwardRef<HTMLButtonElement, ButtonProps>(
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
                            editor?.isActive('strike') && 'bg-accent',
                            className,
                        )}
                        onClick={(e) => {
                            editor?.chain().focus().toggleStrike().run();
                            onClick?.(e);
                        }}
                        disabled={
                            !editor?.can().chain().focus().toggleStrike().run()
                        }
                        ref={ref}
                        {...props}
                    >
                        {children ?? <Strikethrough className="h-4 w-4" />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>Strikethrough</span>
                    <span className="text-gray-11 ml-1 text-xs">
                        (cmd + shift + x)
                    </span>
                </TooltipContent>
            </Tooltip>
        );
    },
);

StrikeThroughToolbar.displayName = 'StrikeThroughToolbar';

export { StrikeThroughToolbar };
