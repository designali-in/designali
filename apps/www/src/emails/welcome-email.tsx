import * as React from "react";
import { Button, Hr, Text } from "@react-email/components";

import site from "@/config/site";

import { BaseEmail } from "./components/base-email";

interface WelcomeEmailProps {
  name: string;
  verificationUrl?: string;
}

export default function WelcomeEmail({
  name,
  verificationUrl,
}: WelcomeEmailProps) {
  return (
    <BaseEmail preview={`Welcome to ${site.name}`}>
      <Text style={paragraph}>Hi {name},</Text>
      <Text style={paragraph}>
        Welcome to {site.name}! We&apos;re excited to have you on board.
      </Text>
      {verificationUrl && (
        <>
          <Text style={paragraph}>
            Please verify your email address by clicking the button below:
          </Text>
          <Button style={button} href={verificationUrl}>
            Verify Email
          </Button>
        </>
      )}
      <Hr style={hr} />
      <Text style={footer}>
        Best regards,
        <br />
        The {site.name} Team
      </Text>
    </BaseEmail>
  );
}

const paragraph = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const button = {
  backgroundColor: "#000000",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  marginTop: "25px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  marginTop: "25px",
};
