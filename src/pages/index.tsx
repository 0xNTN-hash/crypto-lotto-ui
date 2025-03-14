import type { NextPage } from 'next';

import NextDrawSection from '../components/NextDrawSection';
import JackpotSection from '../components/JackpotSection';
import router from 'next/router';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <section className="h-screen flex-1">
        <img src="/images/banner.png" alt="Vercel Logo" className="h-full w-full object-cover" />
      </section>

      <main className="flex-column flex h-screen flex-1 items-center justify-center bg-slate-800">
        <section className="flex flex-1 flex-col items-center text-white">
          <div className="flex items-center">
            <h1 className="text-5xl font-bold">Crypto Lotto</h1>
          </div>

          <div className="mt-20 flex w-full flex-1 justify-evenly">
            <JackpotSection />
            <NextDrawSection />
          </div>

          <button
            onClick={() => router.push('/lotto')}
            type="button"
            className="me-2 mb-2 rounded-xl bg-green-700 px-10 py-5 text-xl font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 focus:outline-none dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Enter Lotto
          </button>
        </section>
      </main>
    </div>
  );
};

export default Home;
