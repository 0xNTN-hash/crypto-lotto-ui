import { useReadContract } from 'wagmi';
import { wagmiContractConfig } from '../contracts/contracts';
import { useEffect, useState } from 'react';
import CountdownTimer from './CountDownTimer';

const NextDrawSection = () => {
  const { data: lastDrawTimestamp } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'getLastDrawTimestamp',
  });

  const { data: drawInterval } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'getIntervalBetweenDraws',
  });

  const [nextDrawTime, setNextDrawTime] = useState<bigint>();

  useEffect(() => {
    if (lastDrawTimestamp && drawInterval) {
      console.log((lastDrawTimestamp + drawInterval).toString());
      setNextDrawTime(lastDrawTimestamp + drawInterval);
    }
  }, [lastDrawTimestamp, drawInterval]);

  return (
    <div className="mb-10 rounded-xl bg-slate-700 px-10 py-5">
      {nextDrawTime && (
        <>
          <p className="text-center text-2xl font-bold text-slate-200 uppercase">Next draw in</p>
          <p className="mt-4 text-center text-lg font-bold text-green-600">
            <CountdownTimer targetTimestamp={nextDrawTime.toString()} />
          </p>
        </>
      )}
    </div>
  );
};

export default NextDrawSection;
