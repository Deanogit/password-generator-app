import { useState } from 'react';

import CheckBox from './checkBox';

type CheckType =
  | 'Uppercase Letters'
  | 'Lowercase Letters'
  | 'Numbers'
  | 'Symbols';

export default function CheckList() {
  const [checkedItems, setCheckedItems] = useState<Record<CheckType, boolean>>({
    'Uppercase Letters': false,
    'Lowercase Letters': false,
    Numbers: false,
    Symbols: false,
  });

  const handleCheckChange = (label: CheckType, value: boolean) => {
    setCheckedItems((prev) => ({ ...prev, [label]: value }));
    console.log(checkedItems);
  };

  return (
    <>
      <div className="py-4">
        <ul className="flex gap-4 flex-col">
          {(Object.keys(checkedItems) as CheckType[]).map((cb) => (
            <li key={cb}>
              <CheckBox
                label={cb}
                checked={checkedItems[cb]}
                onChange={(val) => handleCheckChange(cb, val)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
