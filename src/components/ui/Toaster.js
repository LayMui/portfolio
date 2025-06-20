// src/components/ui/Toaster.js
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

export const Toaster = () => {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: "Toaster is working!",
      description: "You can trigger Chakra toasts like this.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom-right",
    });
  }, [toast]);

  return null; // no visible UI needed for Chakra toasts
};
