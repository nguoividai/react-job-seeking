import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

const SkillInput = () => {
  const [singleSelections, setSingleSelections] = useState<string | Record<string, any>>();
  const options: string[] = ['Cắt cỏ', 'Phục vụ quán ăn', 'phục vụ quán trà sữa', 'bưng vác'];

  return (
    <Row>
      <Col xs="10">
        <Typeahead
          id="skill-input"
          labelKey="name"
          onChange={(selected: string | Record<string, any>) => {
            setSingleSelections(selected);
          }}
          options={options || []}
          placeholder="Enter your skill"
        />
      </Col>
      <Col xs="2" className="d-flex justify-content-end">
        <Button variant="main-action">Add skill</Button>
      </Col>
    </Row>
  );
};

export default React.memo(SkillInput);
