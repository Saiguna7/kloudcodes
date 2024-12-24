"use server";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
type ContactFormEmailProps = {
  name: string;
  email: string;
  message: string;
  subject: string;
};
const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
  subject,
}) => (
  <Html lang="en">
    <Head />
    <Preview>New message from your kloudcode site</Preview>
    <Tailwind>
      <Body className="bg-gray-100 text-black">
        <Container>
          <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
            <img
              src="https://www.kloudcodes.com/_next/image?url=%2Fimages%2Flogo.png&w=256&q=100"
              width={150}
              height={50}
              alt="Kloudcode"
              style={{ margin: "0 250px", marginBottom: "30px" }}
            />
            <Heading className="leading-tight">{subject}</Heading>
            <p className="text-center">
              This is from <strong>kloudcode</strong> contact form
            </p>
            <Text className="font-semibold"> From: {name}</Text>
            <Text>
              <strong>message:</strong> {message}
            </Text>
            <Hr />
            <Text className="text-center">
              The sender&apos;s email is :{email}
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
export default ContactFormEmail;
