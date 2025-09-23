import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    React.createElement(ToastProvider, null,
      toasts.map(function ({ id, title, description, action, ...props }) {
        return React.createElement(Toast, { key: id, ...props },
          React.createElement("div", { className: "grid gap-1" }, [
            title && React.createElement(ToastTitle, { key: "title" }, title),
            description && React.createElement(ToastDescription, { key: "description" }, description)
          ]),
          action,
          React.createElement(ToastClose)
        );
      }),
      React.createElement(ToastViewport)
    )
  );
}