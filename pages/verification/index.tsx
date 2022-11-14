import {
  Box,
  Button,
  createStyles,
  Grid,
  Group,
  Header,
  Paper,
  Stack,
  Stepper,
  Text,
  Timeline,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconCamera } from "@tabler/icons";
import { useRouter } from "next/router";
import {
  HEADER_HEIGHT,
  VerificationLayout,
} from "../../src/components/layout/layout";
import { ImageCaptureAreaMini } from "../../src/components/svg/ImageCaptureMini";

const useStyles = createStyles((theme) => ({
  wrapper: {
    overflow: "hidden",
    paddingTop: HEADER_HEIGHT,
    maxWidth: "313px",
  },
}));

const VerificationPage = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const router = useRouter();
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
          <Title order={2} pb="xl">
            Facial Verification
          </Title>
          <Box
            py={15}
            sx={{
              position: "relative",
            }}
          >
            <ImageCaptureAreaMini />
            <IconCamera
              stroke={1.5}
              size={90}
              style={{
                position: "absolute",
                top: "35%",
                left: "30%",
              }}
            />
          </Box>
          <Text size="xl" color="dimmed" sx={{ width: 313 }}>
            Please grant camera access to complete this process.
          </Text>
          <Button
            color="brand.3"
            radius={70}
            size="lg"
            mt="xl"
            onClick={() => router.push("/verification/verify")}
          >
            Scan Face
          </Button>
        </Stack>
      </Box>
    </VerificationLayout>
  );
};

export default VerificationPage;
