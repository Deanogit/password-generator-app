'use client';

import { useState } from 'react';

export default function Slider() {
  const [range, setRange] = useState('0');

  function handleRange(e) {
    setRange(e.currentTarget.value);
  }

  return (
    <>
      <div className="py-4">
        <label
          htmlFor="range"
          className="preset-4 flex justify-between items-center"
        >
          Character Length
          <span className="preset-2 text-[var(--cust-green-200)] mr-3">
            {range ? range : '0'}
          </span>
        </label>
        <input
          type="range"
          min={0}
          value={range}
          max={20}
          className="w-full bg-[var(--background)] appearance-none h-2 cursor-pointer accent-[var(--foreground)] hover:accent-[var(--cust-green-200)] "
          onChange={handleRange}
        />
      </div>
    </>
  );
}
