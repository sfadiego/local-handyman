"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultForm?: "login" | "register";
}

export function AuthModal({ open, onOpenChange, defaultForm = "login" }: AuthModalProps) {
  const [currentForm, setCurrentForm] = useState<"login" | "register">(defaultForm);

  const toggleForm = () => {
    setCurrentForm(currentForm === "login" ? "register" : "login");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        {currentForm === "login" ? (
          <LoginForm onToggleForm={toggleForm} onClose={() => onOpenChange(false)} />
        ) : (
          <RegisterForm onToggleForm={toggleForm} onClose={() => onOpenChange(false)} />
        )}
      </DialogContent>
    </Dialog>
  );
}