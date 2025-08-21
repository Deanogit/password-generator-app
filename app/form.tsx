'use client';

import Slider from './components/slider';
import CheckList from './components/checkList';
import Rating from './components/rating';
import SubmitBtn from './components/submitBtn';
import FormHeader from './components/formHeader';
import Password from './components/password';

export default function Form() {
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <FormHeader />
      <Password />
      <div className="bg-[var(--cust-grey-800)] p-4">
        <Slider />
        <CheckList />
        <Rating />
        <SubmitBtn />
      </div>
    </form>
  );
}
