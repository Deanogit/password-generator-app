import Image from 'next/image';
import { useState } from 'react';

export default function CheckBox() {
  const [click, setClick] = useState(false);

  function handleClick(e) {
    if (!click) {
      setClick(true);
      e.currentTarget.classList.toggle('bg-[var(--cust-green-200)]');
      e.currentTarget.classList.remove('border-[var(--foreground)]');
      e.currentTarget.classList.add('border-[var(--cust-green-200)]');
    } else {
      setClick(false);
      e.currentTarget.classList.toggle('bg-[var(--cust-green-200)]');
      e.currentTarget.classList.remove('border-[var(--cust-green-200)]');
      e.currentTarget.classList.add('border-[var(--foreground)]');
    }
  }

  return (
    <>
      {' '}
      <button
        type="button"
        className="w-5 h-5 border-2 border-[var(--foreground)]] mr-4 cursor-pointer hover:border-[var(--cust-green-200) grid place-content-center"
        onClick={handleClick}
      >
        <Image src="/icon-check.svg" alt="" width={14} height={12} />
      </button>
    </>
  );
}
