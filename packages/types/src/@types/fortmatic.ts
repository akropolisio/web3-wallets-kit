/* eslint-disable import/no-default-export */
declare module 'fortmatic' {
  import { Provider } from '@web3-wallets-kit/for-third-library-definitions';

  export interface FortmaticProvider extends Provider {
    enable(): Promise<void>;
  }

  export interface User {
    login(): Promise<void>;
    logout(): void;
    getUser: unknown;
    getBalances: unknown;
    getTransactions: unknown;
    isLoggedIn: unknown;
    settings: unknown;
    deposit: unknown;
  }

  class Fortmatic {
    user: User;

    constructor(apiKey: string, network?: 'rinkeby' | 'kovan' | 'ropsten' | 'mainnet');

    getProvider(): FortmaticProvider;
  }

  export default Fortmatic;
}
