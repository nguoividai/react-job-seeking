import React, { useEffect, useState } from 'react';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import { useLocation } from 'react-router-dom';

type ModalOverPageProps = {
  trigger?: React.ReactNode;
  title?: string | React.ReactNode;
  children?: React.ReactNode;
} & ModalProps;

const ModalOverPage: React.FC<ModalOverPageProps> = ({
  trigger,
  title,
  children,
  ...modalProps
}) => {
  const [show, setShow] = useState(modalProps?.show ?? false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(modalProps?.show ?? false);
  }, [modalProps.show]);

  useEffect(() => {
    setShow(false);
  }, [location.pathname]);

  return (
    <>
      <span onClick={handleShow}>{trigger}</span>

      <Modal backdrop="static" show={show} onHide={handleClose} {...modalProps}>
        <Modal.Header closeButton>{title && <Modal.Title>{title}</Modal.Title>}</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default React.memo(ModalOverPage);
