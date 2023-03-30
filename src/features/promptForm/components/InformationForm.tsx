import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import LocationSelect from 'src/components/app/location/LocationSelect';
import { Gender } from '../types/gender.type';
import DatePicker from 'react-datepicker';
import { PromptFormBody } from '../types/store.type';

type InformationFormProps = {
  genders?: Gender[];
  increaseFirstStep?: (bool: boolean) => void;
  onChangeForm?: (item: PromptFormBody) => void;
  form?: PromptFormBody;
};

const InformationForm: React.FC<InformationFormProps> = ({
  genders,
  increaseFirstStep,
  onChangeForm,
  form,
}) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    const formCheck = event.currentTarget;
    increaseFirstStep?.(formCheck.checkValidity());
  };

  return (
    <>
      <div className="helper-step">
        <p>
          Dựa vào thông tin Email hay phone để xác định được người dùng đã sử dụng dịch vụ trước đây
          hay chưa?
        </p>
        <p>
          🧑‍🎓 Nếu đã có sử dụng trước đây sẽ có lưu thông tin, thay vì nhập lại thông tin đó thì bắt
          người dùng đăng nhập để lấy thông tin theo tài khoản
        </p>
        <p>🧑‍🎓 Nếu chưa có thông tin thì cho sang bước tiếp theo.</p>
      </div>
      <Form id="form-information" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>
              Your name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter name"
              defaultValue={form?.name}
              onChange={(e) => onChangeForm?.({ name: e.target.value })}
            />
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>
              Your phone <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter phone"
              defaultValue={form?.phone_number || undefined}
              onChange={(e) => onChangeForm?.({ phone_number: e.target.value })}
            />
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} controlId="validationCustomUsername">
            <Form.Label>Your email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              aria-describedby="inputGroupPrepend"
              defaultValue={form?.email || undefined}
              onChange={(e) => onChangeForm?.({ email: e.target.value })}
            />
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} controlId="validationCustomUsername">
            <Form.Label>Location</Form.Label>
            <LocationSelect
              defaultValue={form?.seeker?.location_seeker || undefined}
              onChange={(value) =>
                onChangeForm?.({
                  seeker: { ...form?.seeker, location_seeker: value, location_id: value?.id },
                })
              }
            />
          </Form.Group>
          <Form.Group as={Col} xs="3" controlId="validationCustom03">
            <Form.Label>Year of birth</Form.Label>
            <DatePicker
              className="form-control"
              placeholderText="Select Year"
              showYearPicker
              selected={form?.year_of_bird ? new Date(form.year_of_bird) : undefined}
              dateFormat="yyyy"
              onChange={(date) => onChangeForm?.({ year_of_bird: date?.toISOString() })}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            xs="4"
            className="d-flex align-items-end gap-3"
            controlId="validationCustom04"
          >
            {genders?.map((gender, index) => (
              <Form.Check
                key={gender.id}
                inline
                defaultChecked={index === 0}
                label={gender.title}
                value={gender.id}
                name="gender"
                type="radio"
                onChange={(e) => onChangeForm?.({ gender_id: e?.target?.checked ? gender.id : '' })}
              />
            ))}
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default React.memo(InformationForm);
