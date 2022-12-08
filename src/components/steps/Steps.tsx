import React, { useState } from 'react';
import { Button, Tab, Tabs } from 'react-bootstrap';

type StepItemProps = {
  increase?: () => void;
  decrease?: () => void;
  stepKey: number;
  totalStep?: number;
  children?: React.ReactNode;
  stepTitle?: string;
};

type StepsProps = {
  children?: React.ReactNode;
};

const StepItem: React.FC<StepItemProps> = ({
  increase,
  decrease,
  stepKey,
  totalStep,
  children,
  stepTitle,
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
        {stepKey < (totalStep || 0) - 1 && (
          <Button variant="seeking-primary" onClick={increase}>
            Next <i className="icofont-thin-double-right"></i>
          </Button>
        )}
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

const Steps: React.FC<StepsProps> = ({ children }) => {
  const [key, setKey] = useState<number>(0);

  const increase = () => {
    setKey(key + 1);
  };

  const decrease = () => {
    setKey(key - 1);
  };

  return (
    <Tabs className="mb-3 job-seeking-steps" activeKey={key}>
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
