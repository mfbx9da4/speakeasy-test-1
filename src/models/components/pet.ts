/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Pet = {
    id: number;
    name: string;
    tag?: string | undefined;
};

/** @internal */
export namespace Pet$ {
    export type Inbound = {
        id: number;
        name: string;
        tag?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Pet, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.number().int(),
            name: z.string(),
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });

    export type Outbound = {
        id: number;
        name: string;
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Pet> = z
        .object({
            id: z.number().int(),
            name: z.string(),
            tag: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
                ...(v.tag === undefined ? null : { tag: v.tag }),
            };
        });
}
