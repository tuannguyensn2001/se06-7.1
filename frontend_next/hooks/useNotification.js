import { toast, useToast } from '@chakra-ui/react';

function render(type, message, description) {
  return notification[type]({
    message,
    description,
  });
}

export default function useNotification() {
  const toast = useToast();

  return {
    success(message, description = '') {
      return toast({
        title: message,
        description,
        status: 'success',
      });
    },
    error(message, description = '') {
      return render('error', message, description);
    },
  };
}
