import { ContractSpec, Address, SorobanRpc } from '@stellar/stellar-sdk';
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
export * from '@stellar/stellar-sdk'
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
} as const

export const Errors = {

}

export interface Client {
  /**
   * Construct and simulate a hello transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  hello: ({ to }: { to: string }, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<SorobanRpc.ContractClient.AssembledTransaction<Array<string>>>
}

export class Client extends SorobanRpc.ContractClient.ContractClient {
  constructor(public readonly options: SorobanRpc.ContractClient.ContractClientOptions) {
    super(
      new ContractSpec(["AAAAAAAAAAAAAAAFaGVsbG8AAAAAAAABAAAAAAAAAAJ0bwAAAAAAEQAAAAEAAAPqAAAAEQ=="]),
      options
    )
  }
  public readonly fromJSON = {
    hello: this.txFromJSON<Array<string>>
  }
}