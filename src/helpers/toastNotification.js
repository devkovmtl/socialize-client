import { toast } from 'react-hot-toast';

const options = {
  position: 'bottom-center',
  duration: 1500,
};

export const notifyError = (message) => toast.error(message, options);

export const notifySuccess = (message) => toast.success(message, options);
