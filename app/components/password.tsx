import Image from 'next/image';

export default function Password() {
  return (
    <>
      <h2 className="p-4 bg-[var(--cust-grey-800)] w-full preset-2 text-[var(--cust-grey-700)] mb-4 flex justify-between items-center">
        P4$5W0rD!
        <Image
          src="/icon-copy.svg"
          alt=""
          width={21}
          height={24}
          className="w-[17.5px] h-5 cursor-pointer"
        />
      </h2>
    </>
  );
}
