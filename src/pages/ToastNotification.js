// pages/test-toast.tsx
import { useToast } from "@chakra-ui/react";
import Layout from "../components/ui/Layout";

const ToastNotification = () => {
  const toast = useToast();

  const showInfoToast = () => {
    toast({
      title: "Info Toast",
      description: "This is an info message!",
      status: "info",
      isClosable: true,
      duration: 3000,
      position: "bottom-right",
    });
  };

  const showSuccessToast = () => {
    toast({
      title: "Success!",
      description: "Operation completed successfully!",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "bottom-right",
    });
  };

  const showErrorToast = () => {
    toast({
      title: "Error",
      description: "Something went wrong!",
      status: "error",
      isClosable: true,
      duration: 5000,
      position: "bottom-right",
    });
  };

  const showWarningToast = () => {
    toast({
      title: "Warning",
      description: "Please be careful!",
      status: "warning",
      isClosable: true,
      duration: 4000,
      position: "bottom-right",
    });
  };

  const showLoadingToast = () => {
    toast({
      title: "Loading...",
      description: "Processing your request",
      status: "loading",
      isClosable: true,
      duration: 2000,
      position: "bottom-right",
    });
  };

  return (
    <Layout title="Test Toast | Chakra UI Example">
      <h1>Test Toast Messages</h1>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
        <button onClick={showInfoToast} style={buttonStyle("#3182ce")}>Show Info Toast</button>
        <button onClick={showSuccessToast} style={buttonStyle("#38a169")}>Show Success Toast</button>
        <button onClick={showErrorToast} style={buttonStyle("#e53e3e")}>Show Error Toast</button>
        <button onClick={showWarningToast} style={buttonStyle("#d69e2e")}>Show Warning Toast</button>
        <button onClick={showLoadingToast} style={buttonStyle("#6b46c1")}>Show Loading Toast</button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Instructions:</h2>
        <ol>
          <li>Click any button above to test different toast types</li>
          <li>Toasts should appear in the bottom-right corner</li>
        </ol>
      </div>
    </Layout>
  );
};

// Helper style function
const buttonStyle = (bgColor) => ({
  padding: '10px 15px',
  backgroundColor: bgColor,
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
});

export default ToastNotification;
