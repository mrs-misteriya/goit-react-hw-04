import { Toaster, ToastBar } from "react-hot-toast";

export default function ErrorMessage() {
  return (
    <div>
      <Toaster
        containerStyle={{
          top: 75,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        toastOptions={{
          duration: 800,
        }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible
                ? "custom-enter 1s ease"
                : "custom-exit 1s ease",
            }}
          />
        )}
      </Toaster>
    </div>
  );
}
