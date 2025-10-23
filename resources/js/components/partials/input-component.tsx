import { cn } from '@/lib/utils';
import { InfoIcon } from 'lucide-react';
import { createElement } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export const InputTextComponent = ({
    label,
    errors,
    helperText,
    addonRight,
    addonRightHandler,
    iconClass,
    addonLeft,
    addonLeftHandler,
    className,
    handleOnChange,
    ...props
}: InputProps) => {
    return (
        <div className="flex flex-col space-y-3">
            {label && <Label>{label}</Label>}
            <div className="relative">
                {addonLeft && (
                    <button
                        type="button"
                        onClick={addonLeftHandler}
                        className="absolute inset-y-0 left-0 flex items-center px-2"
                    >
                        {createElement(addonLeft, { className: 'w-4 h-4' })}
                    </button>
                )}
                <Input
                    onChange={(e: any) => handleOnChange(e.target.value)}
                    className={cn(
                        '',
                        className,
                        addonLeft && 'pl-8',
                        addonRight && 'pr-8',
                    )}
                    {...props}
                />
                {addonRight && (
                    <button
                        type="button"
                        onClick={addonRightHandler}
                        className="absolute inset-y-0 right-0 flex items-center px-2"
                    >
                        {createElement(addonRight, {
                            className: cn('h-4 w-4', iconClass),
                        })}
                    </button>
                )}
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

export const InputFileComponent = ({
    label,
    errors,
    helperText,
    addonRight,
    addonRightHandler,
    iconClass,
    addonLeft,
    addonLeftHandler,
    className,
    handleOnChange,
    ...props
}: InputProps) => {
    return (
        <div className="flex flex-col space-y-3">
            {label && <Label>{label}</Label>}
            <div className="relative">
                {addonLeft && (
                    <button
                        type="button"
                        onClick={addonLeftHandler}
                        className="absolute inset-y-0 left-0 flex items-center px-2"
                    >
                        {createElement(addonLeft, { className: 'w-4 h-4' })}
                    </button>
                )}
                <Input
                    type="file"
                    onChange={(e: any) => {
                        const file = e.target.files?.[0];
                        if (file) handleOnChange?.(file);
                    }}
                    className={cn(
                        '',
                        className,
                        addonLeft && 'pl-8',
                        addonRight && 'pr-8',
                    )}
                    {...props}
                />
                {addonRight && (
                    <button
                        type="button"
                        onClick={addonRightHandler}
                        className="absolute inset-y-0 right-0 flex items-center px-2"
                    >
                        {createElement(addonRight, {
                            className: cn('h-4 w-4', iconClass),
                        })}
                    </button>
                )}
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

export const InputTextAreaComponent = ({
    label,
    errors,
    helperText,
    addonRight,
    addonRightHandler,
    iconClass,
    addonLeft,
    addonLeftHandler,
    className,
    handleOnChange,
    ...props
}: InputProps) => {
    return (
        <div className="flex flex-col space-y-3">
            {label && <Label>{label}</Label>}
            <div className="relative">
                {addonLeft && (
                    <button
                        type="button"
                        onClick={addonLeftHandler}
                        className="absolute inset-y-0 left-0 flex items-center px-2"
                    >
                        {createElement(addonLeft, { className: 'w-4 h-4' })}
                    </button>
                )}
                <Textarea
                    onChange={(e: any) => handleOnChange(e.target.value)}
                    {...props}
                />
                {addonRight && (
                    <button
                        type="button"
                        onClick={addonRightHandler}
                        className="absolute inset-y-0 right-0 flex items-center px-2"
                    >
                        {createElement(addonRight, {
                            className: cn('h-4 w-4', iconClass),
                        })}
                    </button>
                )}
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

interface InputProps {
    label?: string;
    errors?: any;
    helperText?: string;
    addonRight?: any;
    addonRightHandler?: any;
    iconClass?: string;
    addonLeft?: any;
    addonLeftHandler?: any;
    className?: string;
    handleOnChange: (e: any) => void;
    [key: string]: any;
}
