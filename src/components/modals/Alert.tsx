import { Button, Modal, Stack, Text, useMantineTheme } from "@mantine/core";
import { useRouter } from "next/router";
import { AlertErrorIcon } from "../svg/AlertErrorIcon";
import { AlertSuccessIcon } from "../svg/AlertSuccessIcon";

interface AlertProps {
  openedAlert: boolean;
  handlerAlert: {
    open: () => void;
    close: () => void;
  };
  title: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
}
export const Alert = ({
  title,
  type,
  message,
  openedAlert,
  handlerAlert,
}: AlertProps) => {
  const router = useRouter();
  const theme = useMantineTheme();
  console.log("openedAlert", theme.colors);
  const icon =
    type === "success" ? (
      <AlertSuccessIcon />
    ) : type === "error" ? (
      <AlertErrorIcon />
    ) : null;
  return (
    <Modal
      opened={openedAlert}
      onClose={() => {
        handlerAlert.close();
      }}
      withCloseButton={false}
      radius="md"
      centered
    >
      <Stack align="center" sx={{ width: "350px", margin: "auto" }}>
        {icon}
        <Text align="center">{title}</Text>
        <Text align="center">{message}</Text>
        <Button
          onClick={() => {
            router.push("/login");
            handlerAlert.close();
          }}
          radius="xl"
          color="brand.3"
          px={40}
        >
          Continue
        </Button>
      </Stack>
    </Modal>
  );
};
