import {
  Box,
  Button,
  Checkbox,
  createStyles,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
  Timeline,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { VerificationLayout } from "../../src/components/layout/layout";
import { CaptureModal } from "../../src/components/modals/CaptureModal";

const HEADER_HEIGHT = 67;

const useStyles = createStyles((theme) => ({
  text_input: {
    borderColor: theme.colors.brand[3],
  },
  form_wrapper: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    width: "70%",
    marginTop: HEADER_HEIGHT,
  },
}));

const DetailsPage = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [openedCapModal, handlerCapModal] = useDisclosure(true);
  const router = useRouter();

  return (
    <>
      <VerificationLayout
        sideContent={
          <>
            <Box py={20}>
              <Text size={35} weight="bolder" align="center">
                Let’s Get Started
              </Text>
              <Text align="center" size="sm">
                To create ID and verify your identity in order to use this
                service you need to do these simple steps
              </Text>
            </Box>
            <Paper radius="sm" shadow="xs" p={40}>
              <Timeline
                active={0}
                bulletSize={14}
                lineWidth={2}
                color="brand.3"
              >
                <Timeline.Item
                  title={
                    <Text size={14} weight="normal">
                      Verify your identity
                    </Text>
                  }
                />
                <Timeline.Item
                  title={
                    <Text size={14} weight="normal">
                      Facial Verification
                    </Text>
                  }
                />
              </Timeline>
            </Paper>
          </>
        }
      >
        <form>
          <Stack justify="center" className={classes.form_wrapper}>
            <Text weight="bolder" size="xl">
              Verify Your Identity
            </Text>
            <Text size="sm">
              Fill in the details below. All fields in these sections are
              required, do well to provide your correct details.
            </Text>
            <Stack>
              <TextInput
                radius="xl"
                color="brand.3"
                label={<Text color="brand.4">Phone Number</Text>}
                placeholder="Enter your Phone Number"
              />
              <Select
                label={<Text color="brand.4">Choose Identity Type</Text>}
                data={[
                  { label: "National ID", value: "national_id" },
                  {
                    label: "International Passport",
                    value: "international_passport",
                  },
                  { label: "Driver's License", value: "driver_license" },
                ]}
                placeholder="Choose Identity Type"
                styles={{
                  input: {
                    color: theme.colors.brand[3],
                    borderRadius: theme.radius.xl,
                  },
                }}
                className={classes.text_input}
              />
              <TextInput
                radius="xl"
                color="brand.3"
                label={<Text color="brand.4">Identification Number</Text>}
                placeholder="Enter your Digit"
              />
              <Checkbox
                label={
                  <Text color="brand.4" span>
                    I agree to the terms and conditions
                  </Text>
                }
              />
              <Button
                color="brand.3"
                px={80}
                radius="xl"
                onClick={() => router.push("/verification")}
              >
                Continue
              </Button>
            </Stack>
          </Stack>
        </form>
      </VerificationLayout>
      <CaptureModal
        openedCapModal={openedCapModal}
        handlerCapModal={handlerCapModal}
      />
    </>
  );
};

export default DetailsPage;
