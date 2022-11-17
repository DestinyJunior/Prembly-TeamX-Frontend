import { Box, Text, useMantineTheme } from "@mantine/core";
import { IconCheck } from "@tabler/icons";

export const NumberMenu = ({
  number = 1,
  isActive,
}: {
  number: number;
  isActive: boolean;
}) => {
  const theme = useMantineTheme();
  return isActive ? (
    <Box
      sx={{
        height: "2rem",
        width: "2rem",
        borderRadius: "50%",
        background: theme.colors.brand[3],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 1px " + theme.colors.brand[3],
      }}
    >
      <IconCheck color="white" />
    </Box>
  ) : (
    <Box
      sx={{
        height: "2rem",
        width: "2rem",
        borderRadius: "50%",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 1px " + theme.colors.brand[3],
      }}
    >
      <Text color="brand.4">{number}</Text>
    </Box>
  );
};
