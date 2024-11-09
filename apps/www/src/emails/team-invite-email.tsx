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
import { siteConfig } from "@/config/site";
import * as React from "react";

interface TeamInviteEmailProps {
  teamName: string;
  inviterName: string;
  inviteUrl: string;
  expiresIn: string;
}

export default function TeamInviteEmail({
  teamName,
  inviterName,
  inviteUrl,
  expiresIn,
}: TeamInviteEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Join {teamName} on {siteConfig.name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Text style={paragraph}>
              Hi there,
            </Text>
            <Text style={paragraph}>
              {inviterName} has invited you to join their team <strong>{teamName}</strong> on {siteConfig.name}.
            </Text>
            <Button style={button} href={inviteUrl}>
              Join Team
            </Button>
            <Text style={paragraph}>
              This invitation link will expire in {expiresIn}.
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              If you weren&apos;t expecting this invitation, you can safely ignore this email.
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
