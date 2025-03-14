import React from 'react';
import { useReadContract } from 'wagmi';
import { wagmiContractConfig } from '../contracts/contracts';
import { formatUnits } from 'viem';

const JackpotSection = () => {
  const { data: totalJackpot } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'getTotalJackpot',
  });

  return (
    <div className="mb-10 rounded-xl bg-slate-700 px-10 py-5">
      <p className="text-center text-2xl font-bold text-slate-200 uppercase">Total jackpot</p>
      <p className="mt-4 text-center text-lg font-bold text-green-600">
        {`${totalJackpot && <>{formatUnits(totalJackpot, 18)} </>} USDC`}
      </p>
    </div>
  );
};

export default JackpotSection;
