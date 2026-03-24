import type { JSX } from 'react';

function Navbar(): JSX.Element {
  return (
    <nav className="w-full h-16 p-2 border border-gray-200 flex">
      <div
        className="h-full md:w-[40%] lg:w-[30%] flex justify-between
        items-center"
      >
        <img src="/logo.svg" alt="Kwo's logo" className="h-full w-auto" />
        <ul
          className="tracking-wide w-[70%] hidden md:flex justify-around text-sm
          font-semibold"
        >
          <li className="hover:text-warm-orange duration-75 ease-in">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-warm-orange duration-75 ease-in">
            <a href="#">Decks</a>
          </li>
          <li className="hover:text-warm-orange duration-75 ease-in">
            <a href="#">Progress</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full h-fit px-4 py-5 text-gray-500 flex flex-col md:flex-row justify-between text-sm
      items-center border-t border-t-gray-200 mt-1"
    >
      <span className="italic">
        &copy;{currentYear} Kwo Language learning. All rights reserved.
      </span>
      <span className="capitalize">
        <a href="#" className="mr-4">
          Help center
        </a>
        <a href="#" className="mr-4">
          Privacy policy
        </a>
        <a href="#" className="mr-4">
          Terms of service
        </a>
      </span>
    </footer>
  );
}

function App() {
  return (
    <main className="text-navy-blue">
      <Navbar />
      <Footer />
    </main>
  );
}

export default App;
