import React from 'react';

const Ticket = ({
  numbers,
}: {
  numbers: readonly [number, number, number, number, number, number];
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-amber-500 p-6 pt-4">
      <h2 className="my-4 mb-10 text-5xl font-bold text-slate-200 uppercase">Crypto Lotto</h2>
      <h3 className="text-black-200 mb-2 w-full rounded-t-xl bg-slate-200 p-4 text-center text-4xl font-bold">
        Ticket
      </h3>

      <div className="flex gap-2 rounded-b-xl bg-slate-200 p-4">
        {numbers.map((n, i) => {
          return (
            <div
              key={i}
              className={`text-l m-2 flex size-10 items-center justify-center rounded-full bg-amber-800 text-slate-200 hover:bg-amber-600`}
            >
              {n !== 0 ? n : 'X'}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ticket;
