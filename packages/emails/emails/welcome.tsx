import { Body, Head, Html, Link, Preview } from "@react-email/components";

const WelcomeEmail = () => {
  return (
    <Html>
      <Head>
        <title>Welcome to Designali!</title>
        <Preview>Take the most of your Designali Designs</Preview>
        <Body>
          Hi there, 👋
          <br />
          <br />
          I'm Ali, the founder and CEO of{" "}
          <a href="https://www.designali.in">Designali</a>.
          <br />
          <br /> We’re thrilled to have you with us! At Designali, we’re
          dedicated to providing top-notch digital design services tailored to
          meet your needs.
          <br />
          <br />
          Here’s what you can do with Designali:
          <br />
          Choose from a variety of design{" "}
          <a href="https://www.designali.in">services</a> to suit your specific
          requirements.
          <br />
          If you have any questions or need assistance, feel free to reach out
          to me anytime. You can also book a call with me{" "}
          <a href="https://instagram.com/designali.in/">here</a>.
          <br />
          Thank you for choosing Designali. We look forward to working with you!
          <br />
          Best regards,
          <br />
          Ali Imam
          <br />
          ♥️ DM me on <Link href="instagram.com/designali.in">Instagram</Link>
          <br />
          🚀 Visit our website{" "}
          <Link href="https://www.designali.in">Designali</Link>
        </Body>
      </Head>
    </Html>
  );
};

export { WelcomeEmail };
