import React from 'react';
import { PulseLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div className="min-h-[40vh] flex justify-center items-center gap-4">
      <PulseLoader
        color={"#28266F"}
        size={20}
      />
    </div>
  );
}
