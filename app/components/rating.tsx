export default function Rating() {
  return (
    <>
      <div className="flex mb-4">
        <div className="flex bg-[var(--cust-grey-850)] p-4 items-center w-full justify-between">
          <h3 className="uppercase text-[var(--cust-grey-600)] preset-4">
            Strength
          </h3>
          <div className="flex gap-2">
            <div className="h-[28px] w-[10px] border-2 border-[var(--foreground)]"></div>
            <div className="h-[28px] w-[10px] border-2 border-[var(--foreground)]"></div>
            <div className="h-[28px] w-[10px] border-2 border-[var(--foreground)]"></div>
            <div className="h-[28px] w-[10px] border-2 border-[var(--foreground)]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
