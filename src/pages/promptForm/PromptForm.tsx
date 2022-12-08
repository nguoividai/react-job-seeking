import React from 'react';
import Steps from 'src/components/steps/Steps';
import ConfirmForm from './ConfirmForm';
import Form from './Form';
import LanguageForm from './LanguageForm';
import SalaryDesiredForm from './SalaryDesiredForm';
import ShortDescriptionForm from './ShortDescriptionForm';
import SkillForm from './SkillForm';
import TypeWork from './TypeWork';

const PromptForm = () => {
  return (
    <>
      <div className="container prompt-form-container p-5">
        <Steps>
          <Steps.Item stepKey={0} stepTitle="Please fill with your details">
            <Form />
          </Steps.Item>
          <Steps.Item stepKey={1} stepTitle="What is your languages?">
            <LanguageForm />
          </Steps.Item>
          <Steps.Item stepKey={2} stepTitle="What is your skills?">
            <SkillForm />
          </Steps.Item>
          <Steps.Item
            stepKey={3}
            stepTitle="Do you want to be part-time / full-time / temporary / contract work?"
          >
            <TypeWork />
          </Steps.Item>
          <Steps.Item stepKey={4} stepTitle="What is the desired salary?">
            <SalaryDesiredForm />
          </Steps.Item>
          <Steps.Item stepKey={5} stepTitle="Short description">
            <ShortDescriptionForm />
          </Steps.Item>
          <Steps.Item stepKey={6} stepTitle="Confirm">
            <ConfirmForm />
          </Steps.Item>
        </Steps>
      </div>
    </>
  );
};

export default React.memo(PromptForm);
