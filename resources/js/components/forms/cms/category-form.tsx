import { ButtonComponent } from '@/components/partials/button-component';
import {
    InputTextAreaComponent,
    InputTextComponent,
} from '@/components/partials/input-component';
import { SelectComponent } from '@/components/partials/select-component';
import categories from '@/routes/admin/cms/categories';
import { useForm, usePage } from '@inertiajs/react';
import { SaveIcon } from 'lucide-react';
import { FormEvent } from 'react';

export const CategoryForm = ({ dataId }: { dataId?: number }) => {
    const { category, categories: categoriesList } = usePage<any>().props;

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
        name: category?.name || '',
        description: category?.description || '',
        parent_id: category?.parent_id.toString() || null,
    });

    // transformData
    transform((data: any) => ({
        ...data,
    }));

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (dataId) {
            put(categories.update(dataId), {});
        } else {
            post(categories.store(), {});
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
                <SelectComponent
                    label="Parent Category"
                    data={[{ value: '0', label: 'Parent' }].concat(
                        categoriesList.map((item: any) => ({
                            value: item.id,
                            label: item.name,
                        })),
                    )}
                    dataSelected={data.parent_id}
                    handleOnChange={(value: any) => setData('parent_id', value)}
                    errors={errors.parent_id && errors.parent_id}
                    helperText={errors.parent_id && errors.parent_id}
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
