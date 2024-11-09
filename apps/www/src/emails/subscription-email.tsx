import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import site from "@/config/site";

interface SubscriptionEmailProps {
  name: string;
  type: "created" | "updated" | "cancelled";
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export const SubscriptionEmail = ({ name, type }: SubscriptionEmailProps) => {
  const subject = {
    created: "Welcome to Your Subscription!",
    updated: "Your Subscription Has Been Updated",
    cancelled: "Your Subscription Has Been Cancelled",
  }[type];

  const content = {
    created: `Thanks for subscribing to ${site.name}! We're excited to have you on board.`,
    updated: `Your subscription to ${site.name} has been updated.`,
    cancelled: `We're sorry to see you go. Your subscription to ${site.name} has been cancelled.`,
  }[type];

  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Text style={paragraph}>Hi {name},</Text>
            <Text style={paragraph}>{content}</Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              If you have any questions, please don&apos;t hesitate to reach
              out.
            </Text>
            <Button style={button} href={`${baseUrl}/dashboard`}>
              View Dashboard
            </Button>
            <Text style={footer}>
              Best regards,
              <br />
              The {site.name} Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SubscriptionEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

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

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  marginTop: "25px",
};
