import { type OptionsLegacyParser } from '@hey-api/client-fetch';
import type { HealthCheckError, HealthCheckResponse, ReadinessCheckError, ReadinessCheckResponse, ListResourcesResponse, CreateResourceData, ListSchemasResponse, CreateSchemaData, ListBookingsData, ListBookingsResponse, CreateBookingData, ListResourceSchemasData, ListResourceSchemasResponse, CreateResourceSchemaData } from './types.gen';
export declare const client: import("@hey-api/client-fetch").Client<Request, Response, unknown, import("@hey-api/client-fetch").RequestOptionsBase<false, string> & import("@hey-api/client-fetch").Config<false> & {
    headers: Headers;
}>;
/**
 * Health check
 */
export declare const healthCheck: <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<HealthCheckResponse, HealthCheckError, ThrowOnError>;
/**
 * Readiness Check
 */
export declare const readinessCheck: <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<ReadinessCheckResponse, ReadinessCheckError, ThrowOnError>;
/**
 * List Resources
 */
export declare const listResources: <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<ListResourcesResponse, import("./types.gen").Error, ThrowOnError>;
/**
 * Create resource
 */
export declare const createResource: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateResourceData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Resource, import("./types.gen").Error, ThrowOnError>;
/**
 * List Schemas
 */
export declare const listSchemas: <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<ListSchemasResponse, import("./types.gen").Error, ThrowOnError>;
/**
 * Create schema
 */
export declare const createSchema: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateSchemaData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Schema, import("./types.gen").Error, ThrowOnError>;
/**
 * List Bookings
 */
export declare const listBookings: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<ListBookingsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<ListBookingsResponse, import("./types.gen").Error, ThrowOnError>;
/**
 * Create Booking
 */
export declare const createBooking: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateBookingData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Booking, import("./types.gen").Error, ThrowOnError>;
/**
 * List resource schemas
 */
export declare const listResourceSchemas: <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<ListResourceSchemasData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<ListResourceSchemasResponse, import("./types.gen").Error, ThrowOnError>;
/**
 * Create resource schema
 */
export declare const createResourceSchema: <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateResourceSchemaData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").ResourceSchema, import("./types.gen").Error, ThrowOnError>;
