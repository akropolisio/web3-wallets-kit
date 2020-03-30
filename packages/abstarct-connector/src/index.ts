import { Connector, DefaultConnectionPayload } from '@web3-wallets-kit/types';
import { getAccount, getChainId, SendingInterface } from '@web3-wallets-kit/utils';

export abstract class AbstractConnector<P extends DefaultConnectionPayload>
  implements Connector<P> {
  protected payload: P | null = null;
  private sendingInterface: SendingInterface = 'EIP 1193';

  public abstract async connect(): Promise<P>;

  public async disconnect() {
    this.payload = null;
  }

  public async getAccount(): Promise<string | null> {
    if (!this.payload) {
      return null;
    }

    const { account, sendingInterface } = await getAccount(
      this.payload.provider,
      this.sendingInterface,
    );

    this.sendingInterface = sendingInterface;

    return account;
  }

  public async getChainId(): Promise<number | null> {
    if (!this.payload) {
      return null;
    }

    const { chainId, sendingInterface } = await getChainId(
      this.payload.provider,
      this.sendingInterface,
    );

    this.sendingInterface = sendingInterface;

    return chainId;
  }

  public getConnectionPayload() {
    return this.payload;
  }
}
