import { ButtonComponent } from '@/components/partials/button-component';
import {
    InputTextAreaComponent,
    InputTextComponent,
} from '@/components/partials/input-component';
import tags from '@/routes/admin/cms/tags';
import { useForm, usePage } from '@inertiajs/react';
import { SaveIcon } from 'lucide-react';
import { FormEvent } from 'react';

export const TagForm = ({ dataId }: { dataId?: number }) => {
    const { tag } = usePage<any>().props;

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
        name: tag?.name || '',
        description: tag?.description || '',
    });

    // transformData
    transform((data: any) => ({
        ...data,
    }));

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (dataId) {
            put(tags.update(dataId), {});
        } else {
            post(tags.store(), {});
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
                <InputTextAreaComponent
                    label="Description"
                    name="description"
                    errors={errors.description && errors.description}
                    helperText={errors.description && errors.description}
                    value={data.description}
                    handleOnChange={(value: string) =>
                        setData('description', value)
                    }
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
