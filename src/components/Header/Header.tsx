import {TonConnect, TonConnectButton} from "@tonconnect/ui-react";
import './header.scss';

export const Header = () => {

    const tonConnect = new TonConnect();

    const getWallets =  async () => {
        const wallets = await tonConnect.getWallets();
        console.log(wallets)
    }

    return <header>
        <span>My App with React UI</span>
        <TonConnectButton />
        <button onClick={getWallets}>Test</button>
    </header>
}
