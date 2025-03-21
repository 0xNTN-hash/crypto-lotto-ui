import React from 'react';
import { wagmiContractConfig } from '../contracts/contracts';
import { useReadContract, useAccount } from 'wagmi';
import Ticket from '../components/Ticket';

const TicketsPage = () => {
  const { address } = useAccount();
  const { data: ticket } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'getTicket',
    args: [address as `0x${string}`],
  });

  console.log('ticket', ticket);

  return (
    <div className="mx-10 mt-10 flex flex-col">
      <h1 className="mb-5 text-center text-3xl font-bold text-slate-200">Your Tickets</h1>
      <div className="mx-10 mt-10 flex flex-col items-start">
        {ticket && ticket.numbers && <Ticket numbers={ticket.numbers} />}
      </div>
    </div>
  );
};

export default TicketsPage;
