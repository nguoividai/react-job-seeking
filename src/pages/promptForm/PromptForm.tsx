import React from 'react';
import Steps from 'src/components/steps/Steps';
import Form from './Form';

const PromptForm = () => {
  return (
    <>
      <div className="container prompt-form-container p-5">
        <Steps>
          <Steps.Item stepKey={0} stepTitle="Please fill with your details">
            <Form />
          </Steps.Item>
          <Steps.Item
            stepKey={1}
            stepTitle="How do rate your overall satisfaction about the service provided?"
          >
            1
          </Steps.Item>
          <Steps.Item stepKey={1} stepTitle="How did you hear about our company?">
            1
          </Steps.Item>
          <Steps.Item
            stepKey={1}
            stepTitle="Do you think to suggest our company to a friend or parent?"
          >
            1
          </Steps.Item>
          <Steps.Item stepKey={1} stepTitle="Summary">
            1
          </Steps.Item>
        </Steps>
      </div>
    </>
  );
};

export default React.memo(PromptForm);
