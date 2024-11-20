export type Booking = Model & BookingCreateRequest;
export type BookingCreateRequest = {
    /**
     * The booked resource
     */
    resource_id: string;
    /**
     * 24h time of day, i.e. "HH:mm".
     * hours > 24 are allowed to indicate that a time slot spans
     * across midnight and into the next day
     *
     */
    booked_from: string;
    /**
     * 24h time of day, i.e. "HH:mm".
     * hours > 24 are allowed to indicate that a time slot spans
     * across midnight and into the next day
     *
     */
    booked_to: string;
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
export type ResourceCreateRequest = ResourceILoq;
export type ResourceILoq = {
    type: 'iloq';
    data: ResourceILoqData;
};
export type ResourceILoqData = {
    /**
     * refers to ILoq /api/v2/CalendarDataTitle
     */
    calendar_id: string;
    network_module: {
        /**
         * refers to ILoq /api/v2/NetworkModule
         */
        id: string;
        /**
         * refers to ILoq /api/v2/NetworkModuleDevice
         */
        device_id: string;
        /**
         * refers to ILoq /api/v2/NetworkModuleRelay
         */
        relay_id: string;
    };
};
export type Schema = Model & SchemaCreateRequest;
export type SchemaCreateRequest = {
    name: string;
    data: SchemaData;
};
export type SchemaData = SchemaRuleDaily | SchemaRuleWeekly;
export type SchemaRuleDaily = {
    type: 'daily';
    slots: [
        Array<SchemaSlot>
    ];
};
export type SchemaRuleWeekly = {
    type: 'weekly';
    slots: [
        Array<SchemaSlot>,
        Array<SchemaSlot>,
        Array<SchemaSlot>,
        Array<SchemaSlot>,
        Array<SchemaSlot>,
        Array<SchemaSlot>,
        Array<SchemaSlot>
    ];
};
export type SchemaSlot = {
    /**
     * 24h time of day without seconds, i.e "HH:mm".
     * hours > 24 allowed for timeslots that span
     * across midnight into the next day.
     *
     */
    from: string;
    /**
     * 24h time of day without seconds, i.e "HH:mm".
     * hours > 24 allowed for timeslots that span
     * across midnight into the next day.
     *
     */
    to: string;
};
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
export type DeleteSchemaData = {
    path: {
        id: string;
    };
};
export type DeleteSchemaResponse = (void);
export type DeleteSchemaError = (Error);
export type ListBookingsResponse = (Array<Booking>);
export type ListBookingsError = (Error);
export type CreateBookingData = {
    body: BookingCreateRequest;
};
export type CreateBookingResponse = (Booking);
export type CreateBookingError = (Error);
