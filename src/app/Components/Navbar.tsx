import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="w-full max-w-5xl flex items-center justify-between gap-8 px-6 py-3 rounded-2xl border border-violet-500/20 shadow-[0_8px_32px_rgba(109,40,217,0.25)]">

        <span className="text-2xl font-black tracking-[0.2em] bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent select-none shrink-0">
          AUREL
        </span>

        <ul className="flex items-center gap-1">
          {["New In", "Collections", "Women", "Men", "About"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200 rounded-lg hover:bg-violet-500/10 group block"
              >
                {item}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-violet-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 shrink-0">
          <button className="relative p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-black/60 hover:text-black hover:bg-violet-500/20 hover:border-violet-400/40 transition-all duration-200 hover:scale-105 active:scale-95">
            <ShoppingCartIcon className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] flex items-center justify-center text-[10px] font-bold rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-400 text-white shadow-[0_2px_8px_rgba(139,92,246,0.6)]">
              3
            </span>
          </button>

          <button className="px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:from-violet-500 hover:to-cyan-400 shadow-[0_4px_16px_rgba(109,40,217,0.4)] hover:shadow-[0_4px_24px_rgba(109,40,217,0.6)] transition-all duration-200 hover:scale-[1.03] active:scale-95">
            Shop Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

