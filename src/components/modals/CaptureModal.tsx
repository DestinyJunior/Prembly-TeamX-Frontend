import {
  ActionIcon,
  Box,
  Group,
  Image,
  Modal,
  Paper,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconCamera, IconFile, IconPhoto } from "@tabler/icons";
import DriversLicense from "../../../src/assets/images/drivers-license.png";
import { ImageCaptureArea } from "../svg/ImageCaptureArea";

interface CaptureModalProps {
  openedCapModal: boolean;
  handlerCapModal: {
    open: () => void;
    close: () => void;
  };
}

export const CaptureModal = ({
  openedCapModal,
  handlerCapModal,
}: CaptureModalProps) => {
  const theme = useMantineTheme();
  return (
    <Modal
      opened={openedCapModal}
      onClose={() => handlerCapModal.close()}
      withCloseButton={false}
      size="lg"
      styles={{
        modal: {
          background: "transparent",
        },
      }}
      closeOnEscape
    >
      <Paper radius="lg" shadow="xl" p={20}>
        <Stack align="center">
          <Text weight="bold" size="xl">
            Driver's License
          </Text>
          <Text>Please point the camera at the ID card</Text>
          <Text>
            <Box sx={{ position: "relative" }}>
              <ImageCaptureArea />
              <Image
                src={DriversLicense.src}
                width={250}
                sx={{
                  position: "absolute",
                  top: "9%",
                  left: "0",
                  bottom: "0",
                  right: "0",
                  margin: "auto",
                }}
              />
            </Box>
          </Text>
          <Group>
            <ActionIcon
              radius={100}
              color="brand.1"
              size={40}
              variant="filled"
              role="button"
            >
              <IconPhoto stroke={1.5} color={theme.colors.brand[3]} size={20} />
            </ActionIcon>
            <ActionIcon radius={100} color="brand.3" size={50} variant="filled">
              <IconCamera
                stroke={1.5}
                // color={theme.colors.brand[3]}
                size={20}
              />
            </ActionIcon>
            <ActionIcon radius={100} color="brand.1" size={40} variant="filled">
              <IconFile stroke={1.5} color={theme.colors.brand[3]} size={20} />
            </ActionIcon>
          </Group>
        </Stack>
      </Paper>
    </Modal>
  );
};
