import React from "react";
import { Button } from "@/Button";

interface AlertProps {
  children: React.ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div>
      <h2>Alert</h2>
      <div>{children}</div>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default Alert;
