import { Code } from 'lucide-react';

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

const CodeBlockToolbar = forwardRef<HTMLButtonElement, ButtonProps>(
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
                            editor?.isActive('codeBlock') && 'bg-accent',
                            className,
                        )}
                        onClick={(e: any) => {
                            editor?.chain().focus().toggleCodeBlock().run();
                            onClick?.(e);
                        }}
                        disabled={
                            !editor
                                ?.can()
                                .chain()
                                .focus()
                                .toggleCodeBlock()
                                .run()
                        }
                        ref={ref}
                        {...props}
                    >
                        {children ?? <Code className="h-4 w-4" />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>Code Block</span>
                </TooltipContent>
            </Tooltip>
        );
    },
);

CodeBlockToolbar.displayName = 'CodeBlockToolbar';

export { CodeBlockToolbar };
