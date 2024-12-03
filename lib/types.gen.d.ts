export type Booking = Model & BookingCreateRequest;
export type BookingCreateRequest = {
    /**
     * The booked resource
     */
    resource_id: string;
    /**
     * ISO Date
     */
    date: string;
    /**
     * 24 hour time specifier
     *
     */
    slot: string;
    /**
     * the party claiming the resource.
     * format may vary depending on resource type.
     *
     */
    booked_by: string;
    type: 'user' | 'service-window';
};
export type type = 'user' | 'service-window';
export type Error = {
    message: string;
    description?: string;
    request_id: string;
};
export type Model = {
    id: string;
    tenant_id: string;
    created_at: string;
    updated_at: string;
};
export type Resource = Model & ResourceCreateRequest;
export type ResourceCreateRequest = {
    data: ResourceData;
};
export type ResourceData = ResourceILoq;
export type ResourceILoq = {
    type: 'iloq';
    /**
     * refers to ILoq /api/v2/CalendarDataTitle
     */
    calendar_id: string;
    /**
     * refers to ILoq /api/v2/NetworkModule
     */
    network_module_id: string;
    /**
     * refers to ILoq /api/v2/NetworkModuleRelay
     */
    network_relay_id?: string;
};
export type ResourceSchema = Model & ResourceSchemaCreateRequest & {
    valid_to?: string;
};
export type ResourceSchemaCreateRequest = {
    schema_id: string;
    resource_id: string;
    valid_from: string;
};
export type Schema = Model & SchemaCreateRequest;
export type SchemaCreateRequest = {
    name: string;
    type: 'daily' | 'weekly';
    slots: SchemaSlots;
};
export type type2 = 'daily' | 'weekly';
export type SchemaSlot = {
    /**
     * 24 hour time.
     *
     */
    from: string;
    /**
     * 24 hour time.
     * hours > 24 are allowed.
     *
     */
    to: string;
};
export type SchemaSlots = Array<Array<SchemaSlot>>;
export type Tenant = {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    config: TenantConfig;
};
export type TenantConfig = {
    [key: string]: unknown;
};
export type HealthCheckResponse = ({
    status: string;
    database_version?: string;
});
export type HealthCheckError = ({
    status: string;
    database_version?: string;
});
export type ReadinessCheckResponse = ({
    status: string;
    database_version?: string;
});
export type ReadinessCheckError = ({
    status: string;
    database_version?: string;
});
export type ListResourcesResponse = (Array<Resource>);
export type ListResourcesError = (Error);
export type CreateResourceData = {
    body: ResourceCreateRequest;
};
export type CreateResourceResponse = (Resource);
export type CreateResourceError = (Error);
export type ListSchemasResponse = (Array<Schema>);
export type ListSchemasError = (Error);
export type CreateSchemaData = {
    body: SchemaCreateRequest;
};
export type CreateSchemaResponse = (Schema);
export type CreateSchemaError = (Error);
export type ListBookingsData = {
    query: {
        date_end: string;
        date_start: string;
        resource_id: string;
    };
};
export type ListBookingsResponse = (Array<Booking>);
export type ListBookingsError = (Error);
export type CreateBookingData = {
    body: BookingCreateRequest;
};
export type CreateBookingResponse = (Booking);
export type CreateBookingError = (Error);
export type ListResourceSchemasData = {
    query?: {
        resource_id?: string;
        schema_id?: string;
    };
};
export type ListResourceSchemasResponse = (Array<ResourceSchema>);
export type ListResourceSchemasError = (Error);
export type CreateResourceSchemaData = {
    body: ResourceSchemaCreateRequest;
};
export type CreateResourceSchemaResponse = (ResourceSchema);
export type CreateResourceSchemaError = (Error);
