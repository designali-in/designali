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

import {siteConfig} from "@/config/site";

interface MagicLinkEmailProps {
  loginUrl: string;
  email: string;
}

export default function MagicLinkEmail({ loginUrl }: MagicLinkEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Sign in to {siteConfig.name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Text style={paragraph}>Hi,</Text>
            <Text style={paragraph}>
              Click the link below to sign in to your account at {siteConfig.name}.
            </Text>
            <Button style={button} href={loginUrl}>
              Sign In
            </Button>
            <Text style={paragraph}>
              Or copy and paste this URL into your browser:
              <br />
              {loginUrl}
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              If you didn&apos;t request this email, you can safely ignore it.
              <br />
              This link is valid for 24 hours.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

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
  padding: "12px",
  marginTop: "25px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  marginTop: "25px",
};
