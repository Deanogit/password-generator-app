import Image from 'next/image';

export default function SubmitBtn() {
  return (
    <>
      <button
        type="button"
        className="p-4 w-full bg-[var(--cust-green-200)] text-[var(--cust-grey-800)] uppercase preset-4 flex items-center justify-center gap-4"
      >
        Generate
        <Image
          src="/icon-arrow-right.svg"
          alt=""
          width={21}
          height={24}
          className="w-3 h-3"
        />
      </button>
    </>
  );
}
