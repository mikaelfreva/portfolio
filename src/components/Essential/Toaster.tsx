import { Toaster } from "react-hot-toast";

export default function ToasterFC() {
    return (
        <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
          
        }}
      />
      );
  }