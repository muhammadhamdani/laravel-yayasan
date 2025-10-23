<?php

namespace App\Http\Controllers\Admin\Fundraising;

use Inertia\Inertia;
use App\Traits\LogActivity;
use App\Traits\UploadFiles;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Fundraising\Rekening;
use App\Models\Fundraising\RekeningProvider;
use App\Http\Requests\Fundraising\StoreRekeningRequest;
use App\Http\Requests\Fundraising\UpdateRekeningRequest;

class RekeningController extends Controller
{
    use LogActivity, UploadFiles;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->authorize('viewAny', Rekening::class);

        $data = [];

        return Inertia::render('admin/fundraising/rekening/list', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->authorize('create', Rekening::class);

        $providers = RekeningProvider::get();

        $data = [
            'providers' => $providers,
        ];

        return Inertia::render('admin/fundraising/rekening/create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRekeningRequest $request)
    {
        $this->authorize('create', Rekening::class);

        $data = [
            'provider_id' => $request->provider_id,
            'name' => $request->name,
            'number' => $request->number,
            'group' => $request->group,
            'token' => $request->token,
        ];

        if ($request->hasFile('icon')) {
            $data['icon'] = $this->uploadFile(null, $request->file('icon'), 'uploads/rekenings');
        }

        $rekening = Rekening::create($data);

        if ($rekening) {
            $this->logSuccess('create-rekening', "Created Rekening: {$rekening->name}", [
                'rekening_id' => $rekening->id,
                'new_data' => $rekening->toArray(),
            ]);
        } else {
            $this->logError('create-rekening', "Failed to create Rekening: {$rekening->name}", [
                'rekening_id' => $rekening->id,
                'new_data' => $rekening->toArray(),
            ]);
        }

        return redirect()->route('admin.fundraising.rekenings.index')->with('success', 'Rekening created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Rekening $rekening)
    {
        $this->authorize('view', $rekening);

        $findData = Rekening::find($rekening->id);

        $data = [
            'rekening' => $findData,
        ];

        return Inertia::render('admin/fundraising/rekening/show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rekening $rekening)
    {
        $this->authorize('update', $rekening);

        $findData = Rekening::find($rekening->id);

        $providers = RekeningProvider::get();

        $data = [
            'rekening' => $findData,
            'providers' => $providers,
        ];

        return Inertia::render('admin/fundraising/rekening/edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRekeningRequest $request, Rekening $rekening)
    {
        $this->authorize('update', $rekening);

        $data = [
            'provider_id' => $request->provider_id,
            'name' => $request->name,
            'number' => $request->number,
            'group' => $request->group,
            'token' => $request->token,
        ];

        if ($request->hasFile('icon')) {
            $data['icon'] = $this->uploadFile(null, $request->file('icon'), 'uploads/rekenings');
        }

        $oldData = $rekening->replicate();

        $rekening->update($data);

        if ($rekening) {
            $this->logSuccess('update-rekening', "Update Rekening: {$rekening->name}", [
                'rekening_id' => $rekening->id,
                'old_data' => $oldData->toArray(),
                'new_data' => $rekening->toArray(),
            ]);
        } else {
            $this->logError('update-rekening', "Failed to update Rekening: {$rekening->name}", [
                'rekening_id' => $rekening->id,
                'old_data' => $oldData->toArray(),
                'new_data' => $rekening->toArray(),
            ]);
        }

        return redirect()->route('admin.fundraising.rekenings.index')->with('success', 'Rekening updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rekening $rekening)
    {
        $this->authorize('delete', $rekening);

        $rekening->delete();

        return redirect()->route('admin.fundraising.rekenings.index')->with('success', 'Rekening deleted successfully');
    }

    public function getData(Request $request)
    {
        $this->authorize('data-rekening', Rekening::class);

        $perPage = $request->input('perPage', null);
        $page = $request->input('page', null);
        $globalSearch = $request->input('globalSearch', '');
        $orderDirection = $request->input('orderDirection', 'desc');
        $orderBy = $request->input('orderBy', 'id');

        $query = Rekening::query()
            ->latest()
            ->when($globalSearch, function ($query, $search) {
                return $query->where('name', 'like', "%{$search}%");
            })
            ->orderBy('created_at', 'desc')
            ->orderBy($orderBy, $orderDirection);

        if ($perPage) {
            $data = $query->paginate($perPage, ['*'], 'page', $page);
        } else {
            $data = $query->get();
        }

        return response()->json($data);
    }
}
