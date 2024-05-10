import { ContractSpec, SorobanRpc } from '@stellar/stellar-sdk';
import { Buffer } from "buffer";
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
export * from '@stellar/stellar-sdk';
// export * from '@stellar/stellar-sdk/lib/contract_client/index.js'
// export * from '@stellar/stellar-sdk/lib/rust_types/index.js'
if (typeof window !== 'undefined') {
    //@ts-ignore Buffer exists
    window.Buffer = window.Buffer || Buffer;
}
export const networks = {
    standalone: {
        networkPassphrase: "Standalone Network ; February 2017",
        contractId: "CBHI4YIHVLLQJC2CNRSH4XI7HJLKWOYSQUTS3PK44ABZDRWPY3PUT62R",
    }
};
export const Errors = {};
export class Client extends SorobanRpc.ContractClient.ContractClient {
    options;
    constructor(options) {
        super(new ContractSpec(["AAAAAAAAAAAAAAAFaGVsbG8AAAAAAAABAAAAAAAAAAJ0bwAAAAAAEQAAAAEAAAPqAAAAEQ=="]), options);
        this.options = options;
    }
    fromJSON = {
        hello: (this.txFromJSON)
    };
}
