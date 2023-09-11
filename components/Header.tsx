"use client";
import Image from "next/image";
import { trello } from "@/assets";
import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { useBoardStore } from "@/store/BoardStore";
import { useModalStore } from "@/store/ModalStore";
export default function Header() {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);
  const openModal = useModalStore((state) => state.openModal);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-600/10">
        {/* This is one way to create the background gradient  */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-tl from-slate-500 to-rose-200 rounded-md filter blur-3xl z-[-1] opacity-50" />
        <Image
          src={trello}
          alt="Trello Logo"
          width={250}
          height={100}
          className="w-44 md:56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search Box */}

          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              className="flex-1 outline-none p-2"
              placeholder="Search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center py-2 px-5 md:py-5 ">
        <button onClick={openModal}>
          <p className="flex items-center text-sm font-light p-5 pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl">
            <PlusCircleIcon className="h-10 w-10 text-green-500 hover:text-green-600" />
            Click Here To Add Task
          </p>
        </button>
      </div>
    </header>
  );
}
