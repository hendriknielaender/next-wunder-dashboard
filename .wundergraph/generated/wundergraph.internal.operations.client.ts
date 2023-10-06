// Code generated by wunderctl. DO NOT EDIT.

import type { OperationsClient, InternalOperationsDefinition } from "@wundergraph/sdk/server";
import type { ClientOperationErrors } from "@wundergraph/sdk/client";
import type { OperationErrors } from "./ts-operation-errors";
import {
	DragonsResponse,
	DragonsResponseData,
	NewNoteResponse,
	NewNoteInput,
	NewNoteInputInternal,
	NewNoteInputInjected,
	NewNoteResponseData,
	NoteByIDResponse,
	NoteByIDInput,
	NoteByIDInputInternal,
	NoteByIDInputInjected,
	NoteByIDResponseData,
	UsersGetResponse,
	UsersGetInput,
	UsersGetInputInternal,
	UsersGetResponseData,
	UsersSubscribeResponse,
	UsersSubscribeInput,
	UsersSubscribeInputInternal,
	UsersSubscribeResponseData,
	UsersUpdateResponse,
	UsersUpdateInput,
	UsersUpdateInputInternal,
	UsersUpdateResponseData,
} from "./models";

export type Queries = {
	Dragons: {
		input: undefined;
		response: { data?: DragonsResponse["data"]; error?: ClientOperationErrors };
	};
	NoteByID: {
		input: NoteByIDInputInternal;
		response: { data?: NoteByIDResponse["data"]; error?: ClientOperationErrors };
	};
	"users/get": {
		input: UsersGetInputInternal;
		response: { data?: UsersGetResponseData; error?: OperationErrors["users/get"] };
	};
};

export type Mutations = {
	NewNote: {
		input: NewNoteInputInternal;
		response: { data?: NewNoteResponse["data"]; error?: ClientOperationErrors };
	};
	"users/update": {
		input: UsersUpdateInputInternal;
		response: { data?: UsersUpdateResponseData; error?: OperationErrors["users/update"] };
	};
};

export type Subscriptions = {
	"users/subscribe": {
		input: UsersSubscribeInputInternal;
		response: { data?: UsersSubscribeResponseData; error?: OperationErrors["users/subscribe"] };
	};
};

export type InternalOperations = InternalOperationsDefinition<Queries, Mutations, Subscriptions>;

export type InternalOperationsClient = OperationsClient<InternalOperations>;