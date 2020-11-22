import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../Hooks/toast';

import { Container, Toast } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map(({ id, type, title, description }) => (
        <Toast key={id} hasDescription={!!description} type={type}>
          <FiAlertCircle size={20} />

          <div>
            <strong>{title}</strong>
            {description && <p>{description}</p>}
          </div>

          <button onClick={() => removeToast(id)} type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
