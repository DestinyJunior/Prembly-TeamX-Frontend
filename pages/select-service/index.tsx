import {
  Box,
  Button,
  createStyles,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import hero1 from "../../src/assets/images/hero1.png";
import { VerificationLayout } from "../../src/components/layout/layout";
import {
  IconBuildingBank,
  IconShoppingCart,
  IconBrandAirbnb,
} from "@tabler/icons";

const HEADER_HEIGHT = 67;

const useStyles = createStyles((theme) => ({
  service_card: {
    ":hover": {
      borderColor: theme.colors.brand[3],
      backgroundColor: theme.colors.brand[3],
      transition: "200ms",
      color: "#fff",
      svg: {
        color: "#fff !important",
      },
    },
    borderColor: theme.colors.brand[3],
  },
}));

export default function HomePage() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <VerificationLayout
      sideContent={
        <Box mt={HEADER_HEIGHT}>
          <Text size={35} weight="bolder" align="center">
            Optimizing digital communication with{" "}
            <Text span color="brand.4">
              customers
            </Text>
          </Text>

          <Image src={hero1} layout="fixed" width={500} height={500} />
        </Box>
      }
    >
      <Stack align="center" justify="center" pt={HEADER_HEIGHT + 40}>
        <SimpleGrid cols={2} sx={{ justifyContent: "center" }}>
          <Paper withBorder className={classes.service_card} p={20}>
            <Stack align="center" spacing={5}>
              <IconBuildingBank
                stroke={1.5}
                size={50}
                color={theme.colors.brand[3]}
              />
              <Text size="xl" align="center">
                Bank
              </Text>
              <Text align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
          <Paper withBorder p={20} className={classes.service_card}>
            <Stack align="center" spacing={5}>
              <IconBrandAirbnb
                stroke={1.5}
                size={50}
                color={theme.colors.brand[3]}
              />
              <Text size="xl" align="center">
                AirBnB
              </Text>
              <Text align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
          <Paper withBorder p={20} className={classes.service_card}>
            <Stack align="center" spacing={5}>
              <IconShoppingCart
                stroke={1.5}
                size={50}
                color={theme.colors.brand[3]}
              />
              <Text size="xl" align="center">
                E-commerce
              </Text>
              <Text align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
          <Paper withBorder p={20} className={classes.service_card}>
            <Stack align="center" spacing={5}>
              <IconShoppingCart
                stroke={1.5}
                size={50}
                color={theme.colors.brand[3]}
              />
              <Text size="xl" align="center">
                E-commerce
              </Text>
              <Text align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
        </SimpleGrid>
        <Button color="brand.3" px={80} radius="xl">
          Continue
        </Button>
      </Stack>
    </VerificationLayout>
  );
}
