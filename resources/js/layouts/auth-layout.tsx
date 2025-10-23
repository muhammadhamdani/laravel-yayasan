import { Toaster } from '@/components/ui/sonner';
import AuthLayoutTemplate from '@/layouts/auth/auth-split-layout';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { ReactNode, useEffect } from 'react';
import { toast } from 'sonner';

export default function AuthLayout({
    children,
    title,
    description,
    ...props
}: {
    children: ReactNode;
    title: string;
    description: string;
}) {
    const { flash } = usePage<SharedData>().props;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash?.success);
        }

        if (flash?.error) {
            toast.error(flash?.error);
        }
    }, [flash?.success, flash?.error]);

    return (
        <AuthLayoutTemplate title={title} description={description} {...props}>
            {children}
            <Toaster position="top-right" richColors />
        </AuthLayoutTemplate>
    );
}
