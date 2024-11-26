// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { HealthCheckError, HealthCheckResponse, ReadinessCheckError, ReadinessCheckResponse, ListResourcesError, ListResourcesResponse, CreateResourceData, CreateResourceError, CreateResourceResponse, ListSchemasError, ListSchemasResponse, CreateSchemaData, CreateSchemaError, CreateSchemaResponse, DeleteSchemaData, DeleteSchemaError, DeleteSchemaResponse, ListBookingsError, ListBookingsResponse, CreateBookingData, CreateBookingError, CreateBookingResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * Health check
 */
export const healthCheck = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<HealthCheckResponse, HealthCheckError, ThrowOnError>({
        ...options,
        url: '/health'
    });
};

/**
 * Readiness Check
 */
export const readinessCheck = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<ReadinessCheckResponse, ReadinessCheckError, ThrowOnError>({
        ...options,
        url: '/ready'
    });
};

/**
 * List Resources
 */
export const listResources = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<ListResourcesResponse, ListResourcesError, ThrowOnError>({
        ...options,
        url: '/resources'
    });
};

/**
 * Create resource
 */
export const createResource = <ThrowOnError extends boolean = false>(options: Options<CreateResourceData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateResourceResponse, CreateResourceError, ThrowOnError>({
        ...options,
        url: '/resources'
    });
};

/**
 * List Schemas
 */
export const listSchemas = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<ListSchemasResponse, ListSchemasError, ThrowOnError>({
        ...options,
        url: '/schemas'
    });
};

/**
 * Create schema
 */
export const createSchema = <ThrowOnError extends boolean = false>(options: Options<CreateSchemaData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateSchemaResponse, CreateSchemaError, ThrowOnError>({
        ...options,
        url: '/schemas'
    });
};

/**
 * Delete schema
 */
export const deleteSchema = <ThrowOnError extends boolean = false>(options: Options<DeleteSchemaData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteSchemaResponse, DeleteSchemaError, ThrowOnError>({
        ...options,
        url: '/schemas/{id}'
    });
};

/**
 * List Bookings
 */
export const listBookings = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<ListBookingsResponse, ListBookingsError, ThrowOnError>({
        ...options,
        url: '/bookings'
    });
};

/**
 * Create Booking
 */
export const createBooking = <ThrowOnError extends boolean = false>(options: Options<CreateBookingData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateBookingResponse, CreateBookingError, ThrowOnError>({
        ...options,
        url: '/bookings'
    });
};