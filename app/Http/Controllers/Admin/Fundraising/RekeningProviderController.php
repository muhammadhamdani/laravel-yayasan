<?php

namespace App\Http\Controllers\Admin\Fundraising;

use Inertia\Inertia;
use App\Traits\LogActivity;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Fundraising\RekeningProvider;
use App\Http\Requests\Fundraising\StoreRekeningProviderRequest;
use App\Http\Requests\Fundraising\UpdateRekeningProviderRequest;

class RekeningProviderController extends Controller
{
    use LogActivity;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->authorize('viewAny', RekeningProvider::class);

        $data = [];

        return Inertia::render('admin/fundraising/provider/list', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->authorize('create', RekeningProvider::class);

        $data = [];

        return Inertia::render('admin/fundraising/provider/create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRekeningProviderRequest $request)
    {
        $this->authorize('create', RekeningProvider::class);

        $rekening_provider = RekeningProvider::create([
            'name' => $request->name,
            'api_key' => $request->api_key,
        ]);

        if ($rekening_provider) {
            $this->logSuccess('create-provider', "Created Rekening Provider: {$rekening_provider->name}", [
                'provider_id' => $rekening_provider->id,
                'new_data' => $rekening_provider->toArray(),
            ]);
        } else {
            $this->logError('create-provider', "Failed to create Rekening Provider: {$rekening_provider->name}", [
                'provider_id' => $rekening_provider->id,
                'new_data' => $rekening_provider->toArray(),
            ]);
        }

        return redirect()->route('admin.fundraising.rekening-providers.index')->with('success', 'Provider created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(RekeningProvider $rekening_provider)
    {
        $this->authorize('view', $rekening_provider);

        $findData = RekeningProvider::find($rekening_provider->id);

        $data = [
            'rekening_provider' => $findData,
        ];

        return Inertia::render('admin/fundraising/provider/show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RekeningProvider $rekening_provider)
    {
        $this->authorize('update', $rekening_provider);

        $findData = RekeningProvider::find($rekening_provider->id);

        $data = [
            'rekening_provider' => $findData,
        ];

        return Inertia::render('admin/fundraising/provider/edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRekeningProviderRequest $request, RekeningProvider $rekening_provider)
    {
        $this->authorize('update', $rekening_provider);

        $oldData = $rekening_provider->replicate();

        $rekening_provider->update([
            'name' => $request->name,
            'api_key' => $request->api_key,
        ]);

        if ($rekening_provider) {
            $this->logSuccess('update-provider', "Update RekeningProvider: {$rekening_provider->name}", [
                'provider_id' => $rekening_provider->id,
                'old_data' => $oldData->toArray(),
                'new_data' => $rekening_provider->toArray(),
            ]);
        } else {
            $this->logError('update-provider', "Failed to update RekeningProvider: {$rekening_provider->name}", [
                'provider_id' => $rekening_provider->id,
                'old_data' => $oldData->toArray(),
                'new_data' => $rekening_provider->toArray(),
            ]);
        }

        return redirect()->route('admin.fundraising.rekening-providers.index')->with('success', 'Provider updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RekeningProvider $rekening_provider)
    {
        $this->authorize('delete', $rekening_provider);

        $rekening_provider->delete();

        return redirect()->route('admin.fundraising.rekening-providers.index')->with('success', 'Provider deleted successfully');
    }

    public function getData(Request $request)
    {
        $this->authorize('data-rekening-provider', RekeningProvider::class);

        $perPage = $request->input('perPage', null);
        $page = $request->input('page', null);
        $globalSearch = $request->input('globalSearch', '');
        $orderDirection = $request->input('orderDirection', 'desc');
        $orderBy = $request->input('orderBy', 'id');

        $query = RekeningProvider::query()
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
