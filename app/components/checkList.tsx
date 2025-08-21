import CheckBox from './checkBox';

export default function CheckList() {
  return (
    <>
      <div className="py-4">
        <ul className="flex gap-4 flex-col">
          <li className="flex">
            <CheckBox />
            <h3>Include Uppercase Letters</h3>
          </li>
          <li className="flex">
            <CheckBox />

            <h3>Include Lowercase Letters</h3>
          </li>
          <li className="flex">
            <CheckBox />

            <h3>Include Numbers</h3>
          </li>
          <li className="flex">
            <CheckBox />

            <h3>Include Symbols</h3>
          </li>
        </ul>
      </div>
    </>
  );
}
