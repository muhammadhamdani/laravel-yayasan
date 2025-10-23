import { ButtonComponent } from '@/components/partials/button-component';
import { EditorComponent } from '@/components/partials/editor-component';
import { InputTextComponent } from '@/components/partials/input-component';
import { SelectComponent } from '@/components/partials/select-component';
import { Label } from '@/components/ui/label';
import {
    Dropzone,
    DropzoneContent,
    DropzoneEmptyState,
} from '@/components/ui/shadcn-io/dropzone';
import pages from '@/routes/admin/cms/pages';
import { useForm, usePage } from '@inertiajs/react';
import { SaveIcon } from 'lucide-react';
import moment from 'moment-timezone';
import { FormEvent, useState } from 'react';

export const PageForm = ({ dataId }: { dataId?: number }) => {
    const { page } = usePage<any>().props;

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
        name: page?.name || '',
        description: page?.description || '',
        status: page?.status || null,
        date_release:
            moment(page?.date_release).format('DD MMMM YYYY - hh:mm:ss') ||
            moment().format('YYYY-MM-DD'),
        image: null,
        previewImage: page?.image ? `/storage/${page.image}` : null,
        _method: dataId ? 'PUT' : 'POST',
    });

    const [files, setFiles] = useState<File[]>([]);

    // transformData
    // transform((data: any) => ({
    //     ...data,
    // }));

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (dataId) {
            post(pages.update(dataId), {
                forceFormData: true,
            });
        } else {
            post(pages.store(), {
                forceFormData: true,
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="flex flex-col space-y-4"
        >
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 flex flex-col space-y-6 rounded p-4 md:col-span-9">
                    <InputTextComponent
                        type="text"
                        label="Title"
                        name="title"
                        value={data.name}
                        handleOnChange={(value: string) =>
                            setData('name', value)
                        }
                        errors={errors?.name}
                        helperText={errors?.name}
                    />
                    <EditorComponent
                        label="Description"
                        value={data.description}
                        handleOnChange={(value: string) =>
                            setData('description', value)
                        }
                        errors={errors?.description}
                        helperText={errors?.description}
                    />
                </div>
                <div className="col-span-12 flex flex-col space-y-4 rounded p-4 md:col-span-3">
                    <div className="flex flex-col space-y-2 rounded border p-4">
                        <div className="flex flex-col space-y-4">
                            <InputTextComponent
                                label="Date Release"
                                readOnly={true}
                                value={data.date_release}
                                handleOnChange={(value: string) =>
                                    console.log(value)
                                }
                            />
                            <SelectComponent
                                label="Status"
                                data={[
                                    { label: 'Published', value: 'PUBLISHED' },
                                    { label: 'Draft', value: 'DRAFT' },
                                ]}
                                dataSelected={data.status}
                                handleOnChange={(value: any) =>
                                    setData('status', value)
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
                    </div>
                    <div className="flex flex-col space-y-6 rounded border p-4">
                        <Label>Feature Image</Label>
                        <Dropzone
                            accept={{ 'image/*': [] }}
                            onDrop={(acceptedFiles: File[]) => {
                                setFiles(acceptedFiles);
                                setData('image', acceptedFiles[0]);
                                setData(
                                    'previewImage',
                                    URL.createObjectURL(acceptedFiles[0]),
                                );
                            }}
                            onError={console.error}
                        >
                            <DropzoneEmptyState />
                            <DropzoneContent />
                        </Dropzone>

                        {data.previewImage && (
                            <img
                                src={data.previewImage}
                                alt="Preview"
                                className="w-full rounded"
                            />
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
};
