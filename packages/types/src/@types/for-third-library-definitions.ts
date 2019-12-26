declare module '@web3-wallets-kit/for-third-library-definitions' {
  export interface JsonRpcPayload {
    jsonrpc: string;
    method: string;
    params: any[];
    id?: string | number;
  }

  export interface JsonRpcResponse {
    jsonrpc: string;
    id: number;
    result?: any;
    error?: string;
  }

  export class Provider {
    send(
      payload: JsonRpcPayload,
      callback: (error: Error | null, result?: JsonRpcResponse) => void,
    ): void;
  }
}
