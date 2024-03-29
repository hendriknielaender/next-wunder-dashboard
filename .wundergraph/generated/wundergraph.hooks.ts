// Code generated by wunderctl. DO NOT EDIT.

import {
	DragonsResponse,
	NewNoteResponse,
	NewNoteInput,
	NewNoteInputInternal,
	NewNoteInputInjected,
	NoteByIDResponse,
	NoteByIDInput,
	NoteByIDInputInternal,
	NoteByIDInputInjected,
} from "./models";
import type {
	BaseRequestContext,
	HooksConfiguration,
	PreUploadHookRequest,
	PreUploadHookResponse,
	PostUploadHookRequest,
	PostUploadHookResponse,
	QueryHook,
	QueryHookWithoutInput,
	MutationHook,
	MutationHookWithoutInput,
	SubscriptionHook,
	SubscriptionHookWithoutInput,
} from "@wundergraph/sdk/server";
import type { User } from "./wundergraph.server";
import { InternalOperationsClient } from "./wundergraph.internal.operations.client";

export type DATA_SOURCES = "spacex" | "weather" | "countries" | "notes" | "notes_2";

export interface HookContext<TCustomContext = any>
	extends BaseRequestContext<User, InternalOperationsClient, TCustomContext> {}

export type HooksConfig<TCustomContext = any> = HooksConfiguration<
	QueryHooks<TCustomContext>,
	MutationHooks<TCustomContext>,
	SubscriptionHooks<TCustomContext>,
	UploadHooks<TCustomContext>,
	DATA_SOURCES,
	HookContext<TCustomContext>
>;

export type QueryHooks<TCustomContext = any> = {
	Dragons?: QueryHookWithoutInput<DragonsResponse, HookContext<TCustomContext>>;
	NoteByID?: QueryHook<NoteByIDInputInjected, NoteByIDResponse, HookContext<TCustomContext>>;
};

export type MutationHooks<TCustomContext = any> = {
	NewNote?: MutationHook<NewNoteInputInjected, NewNoteResponse, HookContext<TCustomContext>>;
};

export type SubscriptionHooks<TCustomContext = any> = {};

export interface UploadHooks<TCustomContext = any> {}
