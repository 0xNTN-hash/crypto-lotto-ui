'use client';
import React, { Fragment, useState } from 'react';
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { wagmiContractConfig } from '../contracts/contracts';
import { parseEther } from 'viem';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Modal from '../components/Modal';
import Link from 'next/link';
import Ticket from '../components/Ticket';

const LottoPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { isConnected } = useAccount();

  const { data: hash, isPending, writeContract, error } = useWriteContract();
  const { isLoading: isConfirming } = useWaitForTransactionReceipt({
    hash,
  });

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
    setModalVisible(true);
    writeContract({
      ...wagmiContractConfig,
      functionName: 'enterLotto',
      args: [selectedNumbers],
      value: parseEther('1'),
    });
  };

  const LoadingMessage = () => (
    <div className="flex flex-col items-center justify-center">
      <div className="size-10 animate-spin rounded-full border-6 border-dotted border-amber-400" />
      <h2 className="my-4 text-lg font-bold capitalize">Waiting for confirmation...</h2>
      <p className="mb-2 font-bold">Your numbers are: {selectedNumbers.join(', ')}</p>
      <p>Confirm this transaction in your wallet</p>
    </div>
  );

  const ErrorMessage = ({ error }: { error: any }) => (
    <h2 className="my-4 text-lg font-bold text-red-500 capitalize">
      {error.shortMessage || error.message}
    </h2>
  );

  const ConfirmationMessage = () => (
    <div className="flex flex-col items-center justify-center">
      <h2 className="my-4 text-lg font-bold capitalize">Transaction complete</h2>
      <Link
        href="/tickets"
        className="rounded-xl bg-green-700 px-10 py-5 text-xl font-medium text-white not-disabled:hover:cursor-pointer not-disabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 focus:outline-none disabled:opacity-50 dark:bg-green-600 dark:focus:ring-green-800"
      >
        View your ticket
      </Link>
    </div>
  );

  const ProcessingMessage = () => (
    <div className="flex flex-col items-center justify-center">
      <div className="size-10 animate-spin rounded-full border-6 border-dotted border-amber-400" />
      <h2 className="my-4 text-center text-lg font-bold capitalize">
        Waiting for your ticket to be processed...
      </h2>
    </div>
  );

  return (
    <>
      <Fragment>
        <div className="flex flex-col items-center">
          <div className="mt-10 flex flex-row items-center gap-20">
            <div>
              <h1 className="mb-5 text-3xl font-bold text-slate-200">
                Select Your 6 Lotto Numbers:{' '}
              </h1>
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
            </div>

            <div className="flex flex-col items-center">
              <div className="my-10">
                <Ticket numbers={selectedNumbers} />
              </div>
              {!isConnected ? (
                <ConnectButton label="Connect to Buy a Ticket" />
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={selectedNumbers.includes(0) || isPending}
                  type="button"
                  className="me-2 mb-2 rounded-xl bg-green-700 px-10 py-5 text-xl font-medium text-white not-disabled:hover:cursor-pointer not-disabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 focus:outline-none disabled:opacity-50 dark:bg-green-600 dark:focus:ring-green-800"
                >
                  {isPending
                    ? 'Buying...'
                    : selectedNumbers.includes(0)
                      ? 'Select 6 numbers to buy a ticket'
                      : 'Buy your ticket (1 ETH)'}
                </button>
              )}
            </div>
          </div>
        </div>
      </Fragment>

      <Modal isVisible={modalVisible} onClose={() => setModalVisible(false)}>
        <div className="flex flex-col items-center justify-center">
          {isPending && !error ? (
            <LoadingMessage />
          ) : (
            <div className="flex flex-col items-center justify-center">
              {error ? (
                <ErrorMessage error={error} />
              ) : isConfirming ? (
                <ProcessingMessage />
              ) : (
                <ConfirmationMessage />
              )}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default LottoPage;
