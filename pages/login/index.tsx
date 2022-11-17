import { HEADER_HEIGHT, VerificationLayout } from "@/components/layout/layout";
import {
  Box,
  Button,
  createStyles,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
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
const LoginPage = () => {
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
            Login
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
              placeholder="Phone Number"
            />

            <Button
              color="brand.3"
              px={80}
              radius="xl"
              onClick={() => router.push("/otp-verification")}
            >
              Continue
            </Button>
          </Stack>
        </Stack>
      </form>
    </VerificationLayout>
  );
};

export default LoginPage;
