import { ButtonComponent } from '@/components/partials/button-component';
import { InputTextComponent } from '@/components/partials/input-component';
import rekeningProviders from '@/routes/admin/fundraising/rekening-providers';
import { useForm, usePage } from '@inertiajs/react';
import { SaveIcon } from 'lucide-react';
import { FormEvent } from 'react';

export const RekeningProviderForm = ({ dataId }: { dataId?: number }) => {
    const { rekening_provider } = usePage<any>().props;

    const {
        data,
        setData,
        post,
        put,
        processing,
        errors,
        reset,
        transform,
    }: any = useForm({
        saveBack: 'false',
        name: rekening_provider?.name || '',
        api_key: rekening_provider?.api_key || '',
    });

    // transformData
    transform((data: any) => ({
        ...data,
    }));

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (dataId) {
            put(rekeningProviders.update(dataId), {});
        } else {
            post(rekeningProviders.store(), {});
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="flex flex-col space-y-4"
        >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputTextComponent
                    type="text"
                    label="Name"
                    name="name"
                    value={data.name}
                    handleOnChange={(value: string) => setData('name', value)}
                    errors={errors.name && errors.name}
                    helperText={errors.name && errors.name}
                />
                <InputTextComponent
                    type="text"
                    label="API Key"
                    name="api_key"
                    value={data.api_key}
                    handleOnChange={(value: string) => setData('api_key', value)}
                    errors={errors.api_key && errors.api_key}
                    helperText={errors.api_key && errors.api_key}
                />
            </div>
            <div className="flex justify-end space-x-4">
                <ButtonComponent
                    buttonText="Save"
                    addonLeft={SaveIcon}
                    buttonType="submit"
                    isProcessing={processing}
                    onClick={() => setData('saveBack', 'true')}
                />
            </div>
        </form>
    );
};
