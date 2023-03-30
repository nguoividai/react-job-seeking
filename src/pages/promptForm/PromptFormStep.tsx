import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Steps from 'src/components/steps/Steps';
import useGender from 'src/features/promptForm/hooks/useGender';
import { onChangePromptForm } from 'src/features/promptForm/store/action';
import { PromptForm, PromptFormBody } from 'src/features/promptForm/types/store.type';
import { useAppDispatch, useAppSelector } from 'src/services/redux';
import ConfirmForm from '../../features/promptForm/components/ConfirmForm';
import Form from '../../features/promptForm/components/InformationForm';
import LanguageForm from '../../features/promptForm/components/LanguageForm';
import SalaryDesiredForm from '../../features/promptForm/components/SalaryDesiredForm';
import ShortDescriptionForm from '../../features/promptForm/components/ShortDescriptionForm';
import SkillForm from '../../features/promptForm/components/SkillForm';
import TypeWork from '../../features/promptForm/components/TypeWork';

const PromptFormStep = () => {
  const [step, setStep] = useState<number>(0);
  const { genders, loading } = useGender();
  const { form } = useAppSelector((s) => s.promptForm);
  const dispatch = useAppDispatch();

  const increase = () => {
    if (step !== 0) {
      setStep(step + 1);
    }
  };

  const increaseFirstStep = (bool: boolean) => {
    if (step === 0 && bool) {
      setStep(step + 1);
    }
  };

  const decrease = () => {
    setStep(step - 1);
  };

  const onChangeForm = (newItem: PromptFormBody) => {
    dispatch(onChangePromptForm(newItem));
  };

  return (
    <>
      {JSON.stringify(form)}
      <div className="container prompt-form-container p-5">
        <Steps step={step} increase={increase} decrease={decrease}>
          <Steps.Item
            stepKey={0}
            stepTitle="Please fill with your details"
            nextBtn={
              <Button type="submit" form="form-information" variant="seeking-primary">
                Next <i className="icofont-thin-double-right"></i>
              </Button>
            }
          >
            <Form
              genders={genders}
              increaseFirstStep={increaseFirstStep}
              onChangeForm={onChangeForm}
              form={form}
            />
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

export default React.memo(PromptFormStep);
