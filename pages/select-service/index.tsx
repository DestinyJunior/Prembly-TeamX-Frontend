import {
  Box,
  Button,
  createStyles,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import {
  IconBrandAirbnb,
  IconBuildingBank,
  IconShoppingCart,
} from "@tabler/icons";
// import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import hero1 from "../../src/assets/images/hero1.png";
import { VerificationLayout } from "../../src/components/layout/layout";

const HEADER_HEIGHT = 67;

const useStyles = createStyles((theme) => ({
  service_card: {
    width: "18rem",
    fontSize: "0.875rem",
    svg: {
      color: theme.colors.brand[3],
    },
    ":hover": {
      borderColor: theme.colors.brand[3],
      backgroundColor: theme.colors.brand[3],
      transition: "200ms",
      color: "#fff",
      svg: {
        color: "#ffffff !important",
      },
    },
    borderColor: theme.colors.brand[3],
  },
  active: {
    borderColor: theme.colors.brand[3],
    backgroundColor: theme.colors.brand[3],
    color: "#fff",
    svg: {
      color: "#ffffff !important",
    },
  },
}));

export default function HomePage() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const router = useRouter();

  const [services, setServices] = useState({
    airbnb: false,
    bank: false,
    shopping: false,
    ecommerce: false,
  });

  const selectedAServices = Object.values(services).filter((s) => s)[0];
  return (
    <VerificationLayout
      sideContent={
        <Box mt={HEADER_HEIGHT}>
          <Text size={30} weight="bolder" align="center">
            Optimizing digital communication with{" "}
            <Text span color="brand.4">
              customers
            </Text>
          </Text>

          <Image src={hero1.src} fit="contain" width={400} height={500} />
        </Box>
      }
    >
      <Stack align="center" justify="center" pt={HEADER_HEIGHT + 40}>
        <SimpleGrid cols={2} sx={{ justifyContent: "center" }}>
          <Paper
            withBorder
            onClick={() => setServices({ ...services, bank: !services.bank })}
            className={cx(classes.service_card, [
              services.bank && classes.active,
            ])}
            p={20}
          >
            {" "}
            <Stack align="center" spacing={5}>
              <IconBuildingBank stroke={1.5} size={50} />
              <Text size="xl" align="center">
                Bank
              </Text>
              <Text align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
          <Paper
            withBorder
            onClick={() =>
              setServices({ ...services, airbnb: !services.airbnb })
            }
            p={20}
            className={cx(classes.service_card, [
              services.airbnb && classes.active,
            ])}
            id="airbnb"
          >
            <Stack align="center" spacing={5}>
              <IconBrandAirbnb stroke={1.5} size={50} />
              <Text size="xl" align="center">
                AirBnB
              </Text>
              <Text align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
          <Paper
            withBorder
            onClick={() =>
              setServices({ ...services, shopping: !services.shopping })
            }
            p={20}
            className={cx(classes.service_card, [
              services.shopping && classes.active,
            ])}
          >
            <Stack align="center" spacing={5}>
              <IconShoppingCart stroke={1.5} size={50} />
              <Text size="xl" align="center">
                Shopping
              </Text>
              <Text align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
          <Paper
            withBorder
            onClick={() =>
              setServices({ ...services, ecommerce: !services.ecommerce })
            }
            p={20}
            className={cx(classes.service_card, [
              services.ecommerce && classes.active,
            ])}
          >
            <Stack align="center" spacing={5}>
              <IconShoppingCart stroke={1.5} size={50} />
              <Text size="xl" align="center">
                E-commerce
              </Text>
              <Text align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
        </SimpleGrid>
        <Button
          color="brand.3"
          px={80}
          radius="xl"
          onClick={() => router.push("/select-service/details")}
          disabled={!selectedAServices}
        >
          Continue
        </Button>
      </Stack>
    </VerificationLayout>
  );
}
