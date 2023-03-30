import React, { useState } from 'react';
import { Button, ButtonProps, Tab, Tabs } from 'react-bootstrap';

type StepItemProps = {
  increase?: () => void;
  decrease?: () => void;
  stepKey: number;
  totalStep?: number;
  children?: React.ReactNode;
  stepTitle?: string;
  nextBtnProps?: ButtonProps;
  nextBtn?: React.ReactNode;
};

type StepsProps = {
  children?: React.ReactNode;
  step: string | number;
  increase?: () => void;
  decrease?: () => void;
};

const StepItem: React.FC<StepItemProps> = ({
  increase,
  decrease,
  nextBtnProps,
  stepKey,
  totalStep,
  children,
  stepTitle,
  nextBtn,
}) => {
  return (
    <div className="step-body">
      <h3 className="step-number">
        {stepKey + 1}/{totalStep}
      </h3>
      <div className="step-title">{stepTitle}</div>
      <div className="step-content">{children}</div>
      <div className="step-action">
        {stepKey > 0 && (
          <Button onClick={decrease} variant="light">
            <i className="icofont-thin-double-left"></i> Back
          </Button>
        )}
        {stepKey < (totalStep || 0) - 1 &&
          (nextBtn ? (
            nextBtn
          ) : (
            <Button {...nextBtnProps} variant="seeking-primary" onClick={increase}>
              Next <i className="icofont-thin-double-right"></i>
            </Button>
          ))}
        {totalStep !== undefined && stepKey === totalStep - 1 && (
          <Button variant="seeking-primary">
            <i style={{ marginRight: 8 }} className="icofont-verification-check"></i>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

const Steps: React.FC<StepsProps> = ({ children, step, increase, decrease }) => {
  return (
    <Tabs className="mb-3 job-seeking-steps" activeKey={step}>
      {children &&
        Array.isArray(children) &&
        children?.map((e, idx) => {
          return (
            <Tab key={e.props.stepKey} eventKey={idx} title={idx}>
              <StepItem
                stepKey={idx}
                stepTitle={e.props.stepTitle}
                totalStep={children.length}
                increase={increase}
                decrease={decrease}
                {...e.props}
              >
                {e.props.children}
              </StepItem>
            </Tab>
          );
        })}
    </Tabs>
  );
};

export default Object.assign(Steps, { Item: StepItem });
