import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import React from 'react';
import HomeIcon from '../assets/icons/HomeIcon';
import CupIcon from '../assets/icons/CupIcon';
import TicketIcon from '../assets/icons/TicketIcon';
import ClockIcon from '../assets/icons/ClockIcon';

const Header = () => {
  return (
    <header className="fixed flex w-full items-center justify-between bg-slate-900 p-4">
      <h2 className="text-white">Crypto Lotto</h2>
      <nav className="flex items-center gap-10">
        <Link href="/" className="flex gap-2 text-slate-200 hover:text-amber-400">
          <HomeIcon />
          Home
        </Link>
        <Link href="/lotto" className="flex gap-2 text-slate-200 hover:text-amber-400">
          <CupIcon />
          Lotto
        </Link>
        <Link href="/tickets" className="flex gap-2 text-slate-200 hover:text-amber-400">
          <TicketIcon />
          My Tickets
        </Link>
        <Link href="/past_draws" className="flex gap-2 text-slate-200 hover:text-amber-400">
          <ClockIcon />
          Past Draws
        </Link>
      </nav>
      <ConnectButton />
    </header>
  );
};

export default Header;
