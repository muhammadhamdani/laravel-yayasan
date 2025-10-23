import { ButtonComponent } from '@/components/partials/button-component';
import {
    InputFileComponent,
    InputTextComponent,
} from '@/components/partials/input-component';
import { SelectComponent } from '@/components/partials/select-component';
import rekenings from '@/routes/admin/fundraising/rekenings';
import { useForm, usePage } from '@inertiajs/react';
import { SaveIcon } from 'lucide-react';
import { FormEvent } from 'react';

export const RekeningForm = ({ dataId }: { dataId?: number }) => {
    const { rekening, providers } = usePage<any>().props;

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
        provider_id: rekening?.provider_id || '',
        name: rekening?.name || '',
        number: rekening?.number || '',
        group: rekening?.group || '',
        token: rekening?.token || '',
        icon: null,
        _method: dataId ? 'PUT' : 'POST',
    });

    // transformData
    // transform((data: any) => ({
    //     ...data,
    // }));

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (dataId) {
            post(rekenings.update(dataId), {
                forceFormData: true,
            });
        } else {
            post(rekenings.store(), {
                forceFormData: true,
            });
        }
    };

    const rekeningGroup = [
        {
            id: 'bank_transfer',
            name: 'Bank Transfer',
        },
        {
            id: 'e_money',
            name: 'E Money',
        },
        {
            id: 'direct_debit',
            name: 'Direct Debit',
        },
        {
            id: 'convenience_store',
            name: 'Convenience Store',
        },
        {
            id: 'cardless_credit',
            name: 'Cardless Credit',
        },
    ];

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
                    label="Number"
                    name="number"
                    value={data.number}
                    handleOnChange={(value: string) => setData('number', value)}
                    errors={errors.number && errors.number}
                    helperText={errors.number && errors.number}
                />
                <SelectComponent
                    label="Provider"
                    data={providers?.map((item: any) => ({
                        value: item.id,
                        label: item.name,
                    }))}
                    dataSelected={data.provider_id}
                    handleOnChange={(value: any) =>
                        setData('provider_id', value)
                    }
                    errors={errors.provider && errors.provider}
                    helperText={errors.provider && errors.provider}
                />
                <SelectComponent
                    label="Group"
                    data={rekeningGroup.map((item: any) => ({
                        value: item.id,
                        label: item.name,
                    }))}
                    dataSelected={data.group}
                    handleOnChange={(value: any) => setData('group', value)}
                    errors={errors.group && errors.group}
                    helperText={errors.group && errors.group}
                />
                <InputTextComponent
                    type="text"
                    label="Channel Token"
                    name="token"
                    value={data.token}
                    handleOnChange={(value: string) => setData('token', value)}
                    errors={errors.token && errors.token}
                    helperText={errors.token && errors.token}
                />
                <InputFileComponent
                    type="file"
                    label="Icon"
                    name="icon"
                    handleOnChange={(value: any) => setData('icon', value)}
                    errors={errors.icon && errors.icon}
                    helperText={errors.icon && errors.icon}
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
