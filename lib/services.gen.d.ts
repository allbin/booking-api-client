import { type Options } from '@hey-api/client-fetch';
import type { HealthCheckError, HealthCheckResponse, ReadinessCheckError, ReadinessCheckResponse, ListResourcesResponse, CreateResourceData, ListSchemasResponse, CreateSchemaData, DeleteSchemaData, ListBookingsResponse, CreateBookingData } from './types.gen';
export declare const client: import("@hey-api/client-fetch").Client<Request, Response, unknown, import("@hey-api/client-fetch").RequestOptionsBase<false> & import("@hey-api/client-fetch").Config<false> & {
    headers: Headers;
}>;
/**
 * Health check
 */
export declare const healthCheck: <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<HealthCheckResponse, HealthCheckError, ThrowOnError>;
/**
 * Readiness Check
 */
export declare const readinessCheck: <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<ReadinessCheckResponse, ReadinessCheckError, ThrowOnError>;
/**
 * List Resources
 */
export declare const listResources: <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<ListResourcesResponse, import("./types.gen").Error, ThrowOnError>;
/**
 * Create resource
 */
export declare const createResource: <ThrowOnError extends boolean = false>(options: Options<CreateResourceData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Resource, import("./types.gen").Error, ThrowOnError>;
/**
 * List Schemas
 */
export declare const listSchemas: <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<ListSchemasResponse, import("./types.gen").Error, ThrowOnError>;
/**
 * Create schema
 */
export declare const createSchema: <ThrowOnError extends boolean = false>(options: Options<CreateSchemaData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Schema, import("./types.gen").Error, ThrowOnError>;
/**
 * Delete schema
 */
export declare const deleteSchema: <ThrowOnError extends boolean = false>(options: Options<DeleteSchemaData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, import("./types.gen").Error, ThrowOnError>;
/**
 * List Bookings
 */
export declare const listBookings: <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<ListBookingsResponse, import("./types.gen").Error, ThrowOnError>;
/**
 * Create Booking
 */
export declare const createBooking: <ThrowOnError extends boolean = false>(options: Options<CreateBookingData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Booking, import("./types.gen").Error, ThrowOnError>;
