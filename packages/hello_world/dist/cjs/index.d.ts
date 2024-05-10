import { SorobanRpc } from '@stellar/stellar-sdk';
export * from '@stellar/stellar-sdk';
export declare const networks: {
    readonly standalone: {
        readonly networkPassphrase: "Standalone Network ; February 2017";
        readonly contractId: "CBHI4YIHVLLQJC2CNRSH4XI7HJLKWOYSQUTS3PK44ABZDRWPY3PUT62R";
    };
};
export declare const Errors: {};
export interface Client {
    /**
     * Construct and simulate a hello transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
     */
    hello: ({ to }: {
        to: string;
    }, options?: {
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
    }) => Promise<SorobanRpc.ContractClient.AssembledTransaction<Array<string>>>;
}
export declare class Client extends SorobanRpc.ContractClient.ContractClient {
    readonly options: SorobanRpc.ContractClient.ContractClientOptions;
    constructor(options: SorobanRpc.ContractClient.ContractClientOptions);
    readonly fromJSON: {
        hello: (json: string) => SorobanRpc.ContractClient.AssembledTransaction<string[]>;
    };
}
