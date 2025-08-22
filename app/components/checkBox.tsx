import Image from 'next/image';

type CheckBoxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export default function CheckBox({ label, checked, onChange }: CheckBoxProps) {
  return (
    <div className="flex items-center">
      <button
        type="button"
        className={`w-5 h-5 border-2 mr-4 cursor-pointer grid place-content-center ${
          checked
            ? 'bg-[var(--cust-green-200)] border-[var(--cust-green-200)]'
            : 'border-[var(--foreground)] hover:border-[var(--cust-green-200)]'
        }`}
        onClick={onChange}
      >
        {' '}
        {checked && (
          <Image src="/icon-check.svg" alt="" width={14} height={12} />
        )}
      </button>
      <h3 className="preset-3">Include {label}</h3>
    </div>
  );
}
