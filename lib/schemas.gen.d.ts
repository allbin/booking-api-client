export declare const ModelSchema: {
    readonly type: "object";
    readonly required: readonly ["id", "tenant_id", "created_at", "updated_at"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly tenant_id: {
            readonly type: "string";
            readonly example: "acme";
        };
        readonly created_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
        readonly updated_at: {
            readonly type: "string";
            readonly format: "date-time";
        };
    };
};
export declare const ResourceILoqSchema: {
    readonly title: "ResourceILoq";
    readonly type: "object";
    readonly required: readonly ["type", "calendar_id", "network_module_id"];
    readonly properties: {
        readonly type: {
            readonly type: "string";
            readonly enum: readonly ["iloq"];
        };
        readonly calendar_id: {
            readonly type: "string";
            readonly description: "refers to ILoq /api/v2/CalendarDataTitle";
        };
        readonly network_module_id: {
            readonly type: "string";
            readonly description: "refers to ILoq /api/v2/NetworkModule";
        };
        readonly network_relay_id: {
            readonly type: "string";
            readonly description: "refers to ILoq /api/v2/NetworkModuleRelay";
        };
    };
};
export declare const ResourceDataSchema: {
    readonly title: "ResourceData";
    readonly oneOf: readonly [{
        readonly $ref: "#/components/schemas/ResourceILoq";
    }];
    readonly discriminator: {
        readonly propertyName: "type";
        readonly mapping: {
            readonly iloq: "#/components/schemas/ResourceILoq";
        };
    };
};
export declare const ResourceCreateRequestSchema: {
    readonly title: "ResourceCreateRequest";
    readonly type: "object";
    readonly required: readonly ["data"];
    readonly properties: {
        readonly data: {
            readonly $ref: "#/components/schemas/ResourceData";
        };
    };
};
export declare const ResourceSchema: {
    readonly title: "Resource";
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Model";
    }, {
        readonly $ref: "#/components/schemas/ResourceCreateRequest";
    }];
};
export declare const ErrorSchema: {
    readonly title: "Error";
    readonly type: "object";
    readonly required: readonly ["message", "request_id"];
    readonly properties: {
        readonly message: {
            readonly type: "string";
            readonly example: "error message";
        };
        readonly description: {
            readonly type: "string";
            readonly example: "error description";
        };
        readonly request_id: {
            readonly type: "string";
            readonly example: "PbMtZxrFhLNciaVMndIZkdQMHyiKUerV";
        };
    };
};
export declare const SchemaSlotSchema: {
    readonly title: "SchemaSlot";
    readonly type: "object";
    readonly required: readonly ["from", "to"];
    readonly properties: {
        readonly from: {
            readonly type: "string";
            readonly pattern: "^\\d{2}:\\d{2}$";
            readonly description: "24 hour time.\n";
            readonly example: "22:00";
        };
        readonly to: {
            readonly type: "string";
            readonly pattern: "^\\d{2}:\\d{2}$";
            readonly description: "24 hour time.\nhours > 24 are allowed.\n";
            readonly example: "26:00";
        };
    };
};
export declare const SchemaSlotsSchema: {
    readonly title: "SchemaSlots";
    readonly type: "array";
    readonly oneOf: readonly [{
        readonly minItems: 1;
        readonly maxItems: 1;
    }, {
        readonly minItems: 7;
        readonly maxItems: 7;
    }];
    readonly items: {
        readonly type: "array";
        readonly items: {
            readonly $ref: "#/components/schemas/SchemaSlot";
        };
    };
};
export declare const SchemaCreateRequestSchema: {
    readonly title: "SchemaCreateRequest";
    readonly type: "object";
    readonly required: readonly ["name", "type", "slots"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly example: "Tvättstugor";
        };
        readonly type: {
            readonly type: "string";
            readonly enum: readonly ["daily", "weekly"];
        };
        readonly slots: {
            readonly $ref: "#/components/schemas/SchemaSlots";
        };
    };
};
export declare const SchemaSchema: {
    readonly title: "Schema";
    readonly type: "object";
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Model";
    }, {
        readonly $ref: "#/components/schemas/SchemaCreateRequest";
    }];
};
export declare const BookingCreateRequestSchema: {
    readonly title: "BookingCreateRequest";
    readonly type: "object";
    readonly required: readonly ["resource_id", "date", "slot", "booked_by", "type"];
    readonly properties: {
        readonly resource_id: {
            readonly type: "string";
            readonly format: "uuid";
            readonly description: "The booked resource";
        };
        readonly date: {
            readonly type: "string";
            readonly pattern: "^\\d{4}-\\d{2}-\\d{2}$";
            readonly description: "ISO Date";
            readonly example: "2024-01-01";
        };
        readonly slot: {
            readonly type: "string";
            readonly pattern: "^\\d{2}:\\d{2}$";
            readonly description: "24 hour time specifier\n";
            readonly example: "06:00";
        };
        readonly booked_by: {
            readonly type: "string";
            readonly description: "the party claiming the resource.\nformat may vary depending on resource type.\n";
        };
        readonly type: {
            readonly type: "string";
            readonly enum: readonly ["user", "service-window"];
        };
    };
};
export declare const BookingSchema: {
    readonly title: "Booking";
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Model";
    }, {
        readonly $ref: "#/components/schemas/BookingCreateRequest";
    }];
};
export declare const ResourceSchemaCreateRequestSchema: {
    readonly title: "ResourceSchemaCreateRequest";
    readonly type: "object";
    readonly required: readonly ["schema_id", "resource_id", "valid_from"];
    readonly properties: {
        readonly schema_id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly resource_id: {
            readonly type: "string";
            readonly format: "uuid";
        };
        readonly valid_from: {
            readonly type: "string";
            readonly format: "date-time";
        };
    };
};
export declare const ResourceSchemaSchema: {
    readonly title: "ResourceSchema";
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Model";
    }, {
        readonly $ref: "#/components/schemas/ResourceSchemaCreateRequest";
    }, {
        readonly type: "object";
        readonly properties: {
            readonly valid_to: {
                readonly type: "string";
                readonly format: "date-time";
            };
        };
    }];
};
export declare const TenantConfigSchema: {
    readonly title: "TenantConfig";
    readonly type: "object";
};
export declare const TenantSchema: {
    readonly title: "Tenant";
    readonly type: "object";
    readonly required: readonly ["id", "created_at", "updated_at", "name", "config"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly example: "kruthusen";
        };
        readonly created_at: {
            readonly type: "string";
            readonly format: "datetime";
        };
        readonly updated_at: {
            readonly type: "string";
            readonly format: "datetime";
        };
        readonly name: {
            readonly type: "string";
            readonly example: "ACME Inc.";
        };
        readonly config: {
            readonly $ref: "#/components/schemas/TenantConfig";
        };
    };
};
