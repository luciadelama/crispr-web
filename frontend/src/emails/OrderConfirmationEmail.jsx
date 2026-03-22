import * as React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

export default function OrderConfirmationEmail({ firstName, trackingId }) {
  const logoUrl = "https://via.placeholder.com/180x50?text=Variant+to+Treatment";
  const betaLogoUrl = "https://via.placeholder.com/120x40?text=BETA.HEALTH";
  const regionLogoUrl = "https://via.placeholder.com/120x40?text=Region";

  const trackOrderUrl = "https://example.com/track-order";
  const contactEmail = "your@email.com";
  const contactPhone = "+4512345678";

  return (
    <Html>
      <Head />
      <Preview>Your submission has been received successfully.</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={topBar} />

          <Section style={heroSection}>
            <Text style={eyebrow}>Order Confirmation</Text>
            <Text style={heroTitle}>
              Thanks for submitting your variant</Text>

            <Text style={heroText}>Hi {firstName},</Text>
            <Text style={heroText}>
              We have received your submission successfully, our team is preparing everything carefully.
              You can check its status anytime on our website using your tracking ID below.
            </Text>

            <Section style={infoCard}>
              <Row>
                <Column style={trackingColumn}>
                  <Text style={infoLabel}>Tracking ID</Text>
                  <Text style={infoValue}>{trackingId}</Text>
                </Column>

                <Column style={buttonColumn}>
                  <Button href={trackOrderUrl} style={button}>
                    Check Status
                  </Button>
                </Column>
              </Row>
            </Section>

            <Text style={supportText}>
              Need help? Contact us anytime and we will be happy to assist you.
            </Text>
          </Section>

          <Hr style={divider} />

          <Section style={footer}>
            <Row>
              <Column style={footerCol}>
                <Text style={footerHeading}>MDxCore Department</Text>
                <Text style={footerText}>Rigshospitalet</Text>
                <Text style={footerText}>Copenhagen, Denmark</Text>
              </Column>

              <Column style={footerCol}>
                <Text style={footerHeading}>Contact Us</Text>
                <Text style={footerText}>
                  Email{" "}
                  <Link href={`mailto:${contactEmail}`} style={footerLink}>
                    {contactEmail}
                  </Link>
                </Text>
                <Text style={footerText}>
                  Tel{" "}
                  <Link href={`tel:${contactPhone}`} style={footerLink}>
                    +45 12 34 56 78
                  </Link>
                </Text>
              </Column>

              <Column style={heroLogoColumn}>
                <Img
                  src={logoUrl}
                  alt="Variant to Treatment logo"
                  width="180"
                  height="50"
                  style={logo}
                />
              </Column>
            </Row>

            <Hr style={footerDivider} />

            <Row style={fundingBlock}>
              <Column style={fundingTextColumn}>
                <Text style={footerNote}>
                  The service is currently being rolled out as a pilot model, funded by
                  BETA.HEALTH under the project name: “Variant to Treatment”.
                </Text>
              </Column>

              <Column style={fundingLogoColumn}>
                <Row>
                  <Column style={fundingLogoItem}>
                    <Img
                      src={betaLogoUrl}
                      alt="Funding partner 1"
                      width="120"
                      height="40"
                      style={fundingLogo}
                    />
                  </Column>
                  <Column style={fundingLogoItem}>
                    <Img
                      src={regionLogoUrl}
                      alt="Funding partner 2"
                      width="120"
                      height="40"
                      style={fundingLogo}
                    />
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  margin: 0,
  padding: "32px 16px",
  backgroundColor: "#eef6f7",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const container = {
  width: "100%",
  maxWidth: "720px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "20px",
  overflow: "hidden",
  border: "1px solid #d9ece7",
};

const topBar = {
  backgroundColor: "#0A6CB4",
  padding: "6px 32px",
};

const logo = {
  display: "block",
  marginLeft: "auto",
};

const heroSection = {
  padding: "44px 40px 36px",
  backgroundColor: "#ffffff",
};

const heroTextColumn = {
  width: "60%",
  verticalAlign: "middle",
};

const heroLogoColumn = {
  width: "40%",
  textAlign: "right",
  verticalAlign: "middle",
};

const eyebrow = {
  margin: "0 0 10px",
  fontSize: "12px",
  lineHeight: "18px",
  textTransform: "uppercase",
  letterSpacing: "1.2px",
  color: "#169c84",
  fontWeight: "700",
};

const heroTitle = {
  fontSize: "32px",
  lineHeight: "38px",
  fontWeight: "700",
  color: "#0A6CB4",
  margin: "10px 0 20px",
};

const heroText = {
  margin: "0 0 16px",
  fontSize: "16px",
  lineHeight: "26px",
  color: "#28424f",
};

const infoCard = {
  marginTop: "28px",
  marginBottom: "28px",
  padding: "24px",
  backgroundColor: "#f2fbf8",
  border: "1px solid #cfeee5",
  borderRadius: "14px",
};

const infoLabel = {
  margin: "0 0 4px",
  fontSize: "13px",
  lineHeight: "18px",
  color: "#4d6a75",
  fontWeight: "600",
};

const infoValue = {
  margin: "0",
  fontSize: "18px",
  lineHeight: "24px",
  color: "#0f4c81",
  fontWeight: "700",
};

const trackingColumn = {
  width: "55%",
  verticalAlign: "middle",
};

const buttonColumn = {
  width: "45%",
  textAlign: "right",
  verticalAlign: "middle",
};

const button = {
  backgroundColor: "#169c84",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "700",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "10px",
  display: "inline-block",
};

const supportText = {
  margin: 0,
  fontSize: "14px",
  lineHeight: "22px",
  color: "#5a717a",
};

const divider = {
  margin: 0,
  borderColor: "#e3efed",
};

const footer = {
  padding: "32px 40px 36px",
  backgroundColor: "#fbfefe",
};

const footerCol = {
  width: "40%",
  verticalAlign: "top",
};

const footerHeading = {
  margin: "0 0 10px",
  fontSize: "16px",
  lineHeight: "22px",
  fontWeight: "700",
  color: "#0f4c81",
};

const footerText = {
  margin: "0 0 8px",
  fontSize: "14px",
  lineHeight: "22px",
  color: "#47606b",
};

const footerLink = {
  color: "#169c84",
  textDecoration: "underline",
};

const footerNote = {
  margin: "0 0 18px",
  fontSize: "13px",
  lineHeight: "22px",
  color: "#6c7f87",
};

const footerDivider = {
  margin: "20px 0 20px",
  borderColor: "#e3efed",
};

const fundingBlock = {
  width: "100%",
};

const fundingTextColumn = {
  width: "70%",
  verticalAlign: "middle",
  paddingRight: "16px",
};

const fundingLogoColumn = {
  width: "30%",
  verticalAlign: "middle",
};

const fundingLogoItem = {
  width: "50%",
  textAlign: "center",
  verticalAlign: "middle",
};

const fundingLogo = {
  display: "block",
  margin: "0 auto",
};