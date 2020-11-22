import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../Hooks/toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { id, type, title, description } = message;
  const { removeToast } = useToast();

  return (
    <Container type={type} hasDescription={!!description}>
      <FiAlertCircle size={20} />

      <div>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </div>

      <button onClick={() => removeToast(id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
