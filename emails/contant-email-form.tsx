
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
import Image from "next/image";
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
          
          <Image
            src="https://www.kloudcodes.com/images/logo.png"
            width={150}
            height={50}
            alt="Kloudcode"
            style={{margin:"0 250px",marginBottom:"30px"}}
            quality={100}
          />
            <Heading className="leading-tight">{subject}</Heading>
            <p className="text-center">
              This is from <strong>kloudcode</strong> contact form
            </p>
            <Text className="font-semibold"> From: {name}</Text>
            <Text>
              <strong>message:</strong> {message}
            </Text>
            <Hr/>
            <Text className="text-center">The sender&apos;s email is :{email}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
export default ContactFormEmail;
