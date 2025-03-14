import React, { useState } from 'react';
import { useWriteContract } from 'wagmi';
import { wagmiContractConfig } from '../contracts/contracts';
import { parseEther, parseGwei } from 'viem';

const LottoPage = () => {
  const { data: hash, writeContract } = useWriteContract();
  const [selectedNumbers, setSelectedNumbers] = useState<
    [number, number, number, number, number, number]
  >([0, 0, 0, 0, 0, 0]);

  const handleNumberClick = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(
        selectedNumbers.map((n) => (n === number ? 0 : n)) as [
          number,
          number,
          number,
          number,
          number,
          number,
        ],
      );
    } else {
      const nextAvailableIndex = selectedNumbers.findIndex((n) => n === 0);
      if (nextAvailableIndex !== -1) {
        const newNumbers = [...selectedNumbers];
        newNumbers[nextAvailableIndex] = number;
        setSelectedNumbers(newNumbers as [number, number, number, number, number, number]);
      }
    }
  };

  const handleSubmit = () => {
    writeContract({
      ...wagmiContractConfig,
      functionName: 'enterLotto',
      args: [selectedNumbers],
      value: parseEther('1'),
      gas: parseGwei('0.02'),
    });
  };

  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold text-slate-200">Select Your Lotto Numbers</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '400px' }}>
        {Array.from({ length: 49 }, (_, index) => index + 1).map((number) => (
          <button
            className={`m-2 h-10 w-10 rounded-full bg-amber-400 text-white hover:bg-amber-600 ${selectedNumbers.includes(number) ? 'bg-amber-800' : ''}`}
            key={number}
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2 className="mb-5 text-3xl font-bold text-slate-200">
          Selected Numbers: {selectedNumbers.map((n) => (n !== 0 ? n : '__')).join(' , ')}
        </h2>
      </div>
      <button
        onClick={handleSubmit}
        type="button"
        className="me-2 mb-2 rounded-xl bg-green-700 px-10 py-5 text-xl font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 focus:outline-none dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Submit Selected Numbers
      </button>
    </div>
  );
};

export default LottoPage;
