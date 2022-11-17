import {
  Box,
  Button,
  createStyles,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Timeline,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import capture from "../../src/assets/images/capture.png";
import {
  HEADER_HEIGHT,
  VerificationLayout,
} from "../../src/components/layout/layout";
import { Alert } from "../../src/components/modals/Alert";

const useStyles = createStyles((theme) => ({
  wrapper: {
    overflow: "hidden",
    paddingTop: HEADER_HEIGHT,
    maxWidth: "350px",
  },
}));
const Verify = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const router = useRouter();
  const [opened, handler] = useDisclosure(false);
  return (
    <VerificationLayout
      sideContent={
        <>
          <Box py={20}>
            <Text size={35} weight="bolder" align="center">
              Pls take a portrait selfie
            </Text>
            <Text align="center" size="sm">
              We employ you to take a selfie for facial verification in order to
              verify your identity
            </Text>
          </Box>
          <Paper radius="sm" shadow="xs" p={40}>
            <Timeline active={0} bulletSize={14} lineWidth={2} color="brand.3">
              <Timeline.Item
                title={<Text size={14}>Make sure you’re well captured</Text>}
              />
              <Timeline.Item
                title={
                  <Text size={14} p={0} m={0}>
                    Show your face clearly{" "}
                  </Text>
                }
              />
              <Timeline.Item
                title={<Text size={14}>Look straight to the camera</Text>}
              />
            </Timeline>
          </Paper>
        </>
      }
    >
      <Box className={classes.wrapper}>
        <Stack align="left">
          <Title order={2}>Facial Verification</Title>
          <Text size="sm" color="dimmed">
            You are required to take a selfie of yourself. Please grant camera
            access to complete this process.
          </Text>
          <Image src={capture.src} height={300} fit="contain" />
          <Stack align="center">
            <Text size="xl" weight="bolder">
              100%
            </Text>
            <Text>Verifying your face</Text>
          </Stack>
          <Group position="center">
            <Button color="brand.3" radius={50} px={30}>
              Retake
            </Button>
            <Button
              color="brand.3"
              radius={50}
              px={30}
              onClick={() => handler.open()}
            >
              Verify
            </Button>
          </Group>
        </Stack>
        <Alert
          openedAlert={opened}
          title="Verification Successful"
          type="success"
          message="You have been verified successfully!
Pls continue the journey with a
seamless experience."
          handlerAlert={handler}
        />
      </Box>
    </VerificationLayout>
  );
};

export default Verify;
