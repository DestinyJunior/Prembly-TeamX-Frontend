import { HEADER_HEIGHT, VerificationLayout } from "@/components/layout/layout";
import { Box, Button, createStyles, Stack, Text } from "@mantine/core";
import { PinInput } from "@mantine/labs";
import { useRouter } from "next/router";

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
const OTPVerificationPage = () => {
  const { classes, theme } = useStyles();
  const router = useRouter();
  return (
    <VerificationLayout
      sideContent={
        <>
          <Box py={20}>
            <Text size={35} weight="bolder" align="center">
              Let’s Get Started
            </Text>
            <Text align="center" size="sm">
              To create ID and verify your identity in order to use this service
              you need to do these simple steps
            </Text>
          </Box>
        </>
      }
    >
      <form>
        <Stack justify="center" className={classes.form_wrapper}>
          <Text weight="bolder" size="xl" pt={10}>
            One Time Password
          </Text>
          <Text size="sm">
            We’ve sent a 6 digit code to the mobile number provided. Enter the
            code in the message to continue.
          </Text>
          <Stack align="center" my={20} spacing="lg">
            <PinInput
              mask
              length={6}
              placeholder=""
              radius="sm"
              onChange={(value) => console.log(value)}
              color="brand.2"
              sx={{
                "& input": {
                  fontSize: "2rem",
                  borderColor: theme.colors.brand[2],
                },
              }}
            />
            <Button
              color="brand.3"
              px={80}
              radius="xl"
              onClick={() => router.push("/agents")}
            >
              Continue
            </Button>
            <Text size="md">Didn’t receive the code? </Text>{" "}
            <Text weight="bolder" color="brand.3">
              Resend it?
            </Text>
          </Stack>
        </Stack>
      </form>
    </VerificationLayout>
  );
};

export default OTPVerificationPage;
