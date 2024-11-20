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
export declare const ResourceILoqDataSchema: {
    readonly title: "ResourceILoqData";
    readonly type: "object";
    readonly required: readonly ["calendar_id", "network_module"];
    readonly properties: {
        readonly calendar_id: {
            readonly type: "string";
            readonly description: "refers to ILoq /api/v2/CalendarDataTitle";
        };
        readonly network_module: {
            readonly type: "object";
            readonly required: readonly ["id", "device_id", "relay_id"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "refers to ILoq /api/v2/NetworkModule";
                };
                readonly device_id: {
                    readonly type: "string";
                    readonly description: "refers to ILoq /api/v2/NetworkModuleDevice";
                };
                readonly relay_id: {
                    readonly type: "string";
                    readonly description: "refers to ILoq /api/v2/NetworkModuleRelay";
                };
            };
        };
    };
};
export declare const ResourceILoqSchema: {
    readonly title: "ResourceILoq";
    readonly type: "object";
    readonly required: readonly ["type", "data"];
    readonly properties: {
        readonly type: {
            readonly type: "string";
            readonly enum: readonly ["iloq"];
        };
        readonly data: {
            readonly $ref: "#/components/schemas/ResourceILoqData";
        };
    };
};
export declare const ResourceCreateRequestSchema: {
    readonly title: "ResourceCreateRequest";
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
            readonly description: "24h time of day without seconds, i.e \"HH:mm\".\nhours > 24 allowed for timeslots that span\nacross midnight into the next day.\n";
            readonly example: "04:00";
        };
        readonly to: {
            readonly type: "string";
            readonly description: "24h time of day without seconds, i.e \"HH:mm\".\nhours > 24 allowed for timeslots that span\nacross midnight into the next day.\n";
            readonly example: "06:00";
        };
    };
};
export declare const SchemaRuleDailySchema: {
    readonly title: "SchemaRuleDaily";
    readonly type: "object";
    readonly required: readonly ["type", "slots"];
    readonly properties: {
        readonly type: {
            readonly type: "string";
            readonly enum: readonly ["daily"];
        };
        readonly slots: {
            readonly type: "array";
            readonly minItems: 1;
            readonly maxItems: 1;
            readonly items: {
                readonly type: "array";
                readonly items: {
                    readonly $ref: "#/components/schemas/SchemaSlot";
                };
            };
        };
    };
};
export declare const SchemaRuleWeeklySchema: {
    readonly title: "SchemaRuleDaily";
    readonly type: "object";
    readonly required: readonly ["type", "slots"];
    readonly properties: {
        readonly type: {
            readonly type: "string";
            readonly enum: readonly ["weekly"];
        };
        readonly slots: {
            readonly type: "array";
            readonly minItems: 7;
            readonly maxItems: 7;
            readonly items: {
                readonly type: "array";
                readonly items: {
                    readonly $ref: "#/components/schemas/SchemaSlot";
                };
            };
        };
    };
};
export declare const SchemaDataSchema: {
    readonly title: "SchemaData";
    readonly oneOf: readonly [{
        readonly $ref: "#/components/schemas/SchemaRuleDaily";
    }, {
        readonly $ref: "#/components/schemas/SchemaRuleWeekly";
    }];
    readonly discriminator: {
        readonly propertyName: "type";
        readonly mapping: {
            readonly daily: "#/components/schemas/SchemaRuleDaily";
            readonly weekly: "#/components/schemas/SchemaRuleWeekly";
        };
    };
};
export declare const SchemaCreateRequestSchema: {
    readonly title: "SchemaCreateRequest";
    readonly type: "object";
    readonly required: readonly ["name", "data"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly example: "Tvättstugor";
        };
        readonly data: {
            readonly type: "object";
            readonly $ref: "#/components/schemas/SchemaData";
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
    readonly required: readonly ["resource_id", "booked_from", "booked_to", "booked_by", "type"];
    readonly properties: {
        readonly resource_id: {
            readonly type: "string";
            readonly format: "uuid";
            readonly description: "The booked resource";
        };
        readonly booked_from: {
            readonly type: "string";
            readonly description: "24h time of day, i.e. \"HH:mm\".\nhours > 24 are allowed to indicate that a time slot spans\nacross midnight and into the next day\n";
            readonly example: "04:00";
        };
        readonly booked_to: {
            readonly type: "string";
            readonly pattern: "^\\d{2}:\\d{2}$";
            readonly description: "24h time of day, i.e. \"HH:mm\".\nhours > 24 are allowed to indicate that a time slot spans\nacross midnight and into the next day\n";
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
