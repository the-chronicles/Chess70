import React, { useState } from "react";

function QuickPairing() {
  const [activeTab, setActiveTab] = useState("quick-pairing");

  return (
    // min-h-screen
    // <div className="flex items-center justify-center">
    <div className=" flex items-center justify-center">
      <div className="mb-96 flex">
        <button className="h-32 w-96 rounded-md bg-[#2a2724] px-6 py-4 text-left text-[#7f7e7d]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A cumque
          dolorum magnam rerum odit! Rerum dolor adipisci beatae,
        </button>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="mb-4 flex justify-center space-x-4">
          <button
            className={`px-4 py-2 text-white ${
              activeTab === "quick-pairing"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "border-orange-500 hover:border-b-2"
            }`}
            onClick={() => setActiveTab("quick-pairing")}
          >
            Quick pairing
          </button>
          <button
            className={`px-4 py-2 text-white ${
              activeTab === "lobby"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "border-orange-500 hover:border-b-2"
            }`}
            onClick={() => setActiveTab("lobby")}
          >
            Lobby
          </button>
          <button
            className={`px-4 py-2 text-white ${
              activeTab === "correspondence"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "border-orange-500 hover:border-b-2"
            }`}
            onClick={() => setActiveTab("correspondence")}
          >
            Correspondence
          </button>
        </div>
        {/* <div className="flex items-center"> */}
        <div className="grid grid-cols-3 gap-4 p-4">
          {activeTab === "quick-pairing" && (
            <>
              <button className="h-36 w-56 rounded-md bg-[#2a2724] p-4 text-[#7f7e7d] hover:bg-[#d7aca6]">
                <div className="text-2xl">1+0</div>
                <div className="text-lg">Bullet</div>
              </button>
              <button className="rounded-md bg-[#2a2724] p-4 text-[#7f7e7d] hover:bg-[#d7aca6]">
                <div className="text-2xl">2+1</div>
                <div className="text-lg">Bullet</div>
              </button>
              <button className="rounded-md bg-[#2a2724] p-4 text-[#7f7e7d] hover:bg-[#d7aca6]">
                <div className="text-2xl">3+0</div>
                <div className="text-lg">Blitz</div>
              </button>
              <button className="h-36 w-56 rounded-md bg-[#2a2724] p-4 text-[#7f7e7d] hover:bg-[#d7aca6]">
                <div className="text-2xl">3+2</div>
                <div className="text-lg">Blitz</div>
              </button>
              <button className="rounded-md bg-[#2a2724] p-4 text-[#7f7e7d] hover:bg-[#d7aca6]">
                <div className="text-2xl">5+0</div>
                <div className="text-lg">Blitz</div>
              </button>
              <button className="rounded-md bg-[#2a2724] p-4 text-[#7f7e7d] hover:bg-[#d7aca6]">
                <div className="text-2xl">5+3</div>
                <div className="text-lg">Blitz</div>
              </button>
              <button className="hover:bg-[#d7aca6]w-72 h-32 rounded-md bg-[#2a2724] p-4 text-[#7f7e7d]">
                <div className="text-2xl">10+0</div>
                <div className="text-lg">Rapid</div>
              </button>
              <button className="rounded-md bg-[#2a2724] p-4 text-[#7f7e7d] hover:bg-[#d7aca6]">
                <div className="text-2xl">10+5</div>
                <div className="text-lg">Rapid</div>
              </button>
              <button className="rounded-md bg-[#2a2724] p-4 text-[#7f7e7d] hover:bg-[#d7aca6]">
                <div className="text-2xl">15+10</div>
                <div className="text-lg">Rapid</div>
              </button>
              <button className="h-36 w-56 rounded-md bg-[#2a2724] p-4 text-[#7f7e7d] hover:bg-[#d7aca6]">
                <div className="text-2xl">30+0</div>
                <div className="text-lg">Classical</div>
              </button>
              <button className="rounded-md bg-[#2a2724] p-4 text-[#7f7e7d] hover:bg-[#d7aca6]">
                <div className="text-2xl">30+20</div>
                <div className="text-lg">Classical</div>
              </button>
              <button className="rounded-md bg-[#2a2724] p-4 text-[#7f7e7d] hover:bg-[#d7aca6]">
                <div className="text-2xl">Custom</div>
              </button>
            </>
          )}

          {activeTab === "lobby" && (
            <div className="text-white">
              <h2>Lobby Content</h2>
              {/* Add your Lobby content here */}
            </div>
          )}
          {activeTab === "correspondence" && (
            <div className="text-white">
              <h2>Correspondence Content</h2>
              {/* Add your Correspondence content here */}
            </div>
          )}
        </div>
      </div>
      <div className="flex w-80 flex-col space-y-11 p-3">
        <button className="rounded-md bg-[#2a2724] px-6 py-4 text-[#7f7e7d]">
          CREATE A GAME
        </button>
        <button className="rounded-md bg-[#2a2724] px-6 py-4 text-[#7f7e7d]">
          PLAY WITH A FRIEND
        </button>
        <button className="rounded-md bg-[#2a2724] px-6 py-4 text-[#7f7e7d]">
          PLAY WITH THE COMPUTER
        </button>
      </div>
    </div>
  );
}

export default QuickPairing;
