import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

const Header = () => {
  return (
    <header className="fixed flex w-full items-center justify-end bg-slate-900 p-4">
      <h2 className="mr-auto text-white">Crypto Lotto</h2>
      <ConnectButton />
    </header>
  );
};

export default Header;
