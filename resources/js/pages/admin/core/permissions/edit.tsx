import { PermissionForm } from '@/components/forms/core/permission-form';
import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { permission } = usePage<any>().props;

    return (
        <AppLayout>
            <Head title="Permission Edit" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 flex-col space-y-8 overflow-hidden rounded-xl border py-4 md:min-h-min md:py-6">
                    <div className="px-4 md:px-6">
                        <PermissionForm dataId={permission.id} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
