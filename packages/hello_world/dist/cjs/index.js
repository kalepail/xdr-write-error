"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.Errors = exports.networks = void 0;
const stellar_sdk_1 = require("@stellar/stellar-sdk");
const buffer_1 = require("buffer");
// const {
//   AssembledTransaction,
//   ContractClient,
//   ContractClientOptions,
// } = SorobanRpc.ContractClient // from SorobanRpc.ContractClient // '@stellar/stellar-sdk/lib/contract_client/index.js';
// const {
//   u32,
//   i32,
//   u64,
//   i64,
//   u128,
//   i128,
//   u256,
//   i256,
//   Option,
//   Typepoint,
//   Duration,
// } = SorobanRpc.ContractClient // from '@stellar/stellar-sdk/lib/contract_client';
// import { Result } from '@stellar/stellar-sdk/lib/rust_types/index.js';
__exportStar(require("@stellar/stellar-sdk"), exports);
// export * from '@stellar/stellar-sdk/lib/contract_client/index.js'
// export * from '@stellar/stellar-sdk/lib/rust_types/index.js'
if (typeof window !== 'undefined') {
    //@ts-ignore Buffer exists
    window.Buffer = window.Buffer || buffer_1.Buffer;
}
exports.networks = {
    standalone: {
        networkPassphrase: "Standalone Network ; February 2017",
        contractId: "CBHI4YIHVLLQJC2CNRSH4XI7HJLKWOYSQUTS3PK44ABZDRWPY3PUT62R",
    }
};
exports.Errors = {};
class Client extends stellar_sdk_1.SorobanRpc.ContractClient.ContractClient {
    options;
    constructor(options) {
        super(new stellar_sdk_1.ContractSpec(["AAAAAAAAAAAAAAAFaGVsbG8AAAAAAAABAAAAAAAAAAJ0bwAAAAAAEQAAAAEAAAPqAAAAEQ=="]), options);
        this.options = options;
    }
    fromJSON = {
        hello: (this.txFromJSON)
    };
}
exports.Client = Client;
