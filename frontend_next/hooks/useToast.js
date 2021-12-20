import { useToast as useToastChakra } from "@chakra-ui/react";

export default function useToast() {
  const toast = useToastChakra();

  return {
    success(title, description = "") {
      return toast({
        title,
        status: "success",
        position: "top-right",
        isClosable: true,
      });
    },
    error(title, description = "") {
      return toast({
        title,
        status: "error",
        position: "top-right",
        isClosable: true,
      });
    },
  };
}