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
import React from "react";
import hero1 from "../../src/assets/images/hero1.png";
import { VerificationLayout } from "../../src/components/layout/layout";

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
  active: {
    borderColor: theme.colors.brand[3],
    backgroundColor: theme.colors.brand[3],
    color: "#fff",
  },
}));

export default function HomePage() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const router = useRouter();
  const [hover, setHover] = React.useState({
    airbnb: false,
    bank: false,
    shopping: false,
    ecommerce: false,
  });
  const [selectedService, setSelectedService] = React.useState("");
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
            className={cx(classes.service_card, [
              selectedService === "bank" && classes.active,
            ])}
            p={20}
            onMouseEnter={() => setHover({ ...hover, bank: true })}
            onMouseLeave={() => setHover({ ...hover, bank: false })}
            onClick={() => setSelectedService("bank")}
          >
            <Stack align="center" spacing={5}>
              <IconBuildingBank
                stroke={1.5}
                size={50}
                color={hover.bank ? "white" : theme.colors.brand[3]}
              />
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
            p={20}
            className={cx(classes.service_card, [
              selectedService === "airbnb" && classes.active,
            ])}
            onMouseEnter={() => setHover({ ...hover, airbnb: true })}
            onMouseLeave={() => setHover({ ...hover, airbnb: false })}
            onClick={() => setSelectedService("airbnb")}
          >
            <Stack align="center" spacing={5}>
              <IconBrandAirbnb
                stroke={1.5}
                size={50}
                color={hover.airbnb ? "white" : theme.colors.brand[3]}
              />
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
            p={20}
            className={cx(classes.service_card, [
              selectedService === "shopping" && classes.active,
            ])}
            onMouseEnter={() => setHover({ ...hover, shopping: true })}
            onMouseLeave={() => setHover({ ...hover, shopping: false })}
            onClick={() => setSelectedService("shopping")}
          >
            <Stack align="center" spacing={5}>
              <IconShoppingCart
                stroke={1.5}
                size={50}
                color={hover.shopping ? "white" : theme.colors.brand[3]}
              />
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
            p={20}
            className={cx(classes.service_card, [
              selectedService === "ecommerce" && classes.active,
            ])}
            onMouseEnter={() => setHover({ ...hover, ecommerce: true })}
            onMouseLeave={() => setHover({ ...hover, ecommerce: false })}
            onClick={() => setSelectedService("ecommerce")}
          >
            <Stack align="center" spacing={5}>
              <IconShoppingCart
                stroke={1.5}
                size={50}
                color={hover.ecommerce ? "white" : theme.colors.brand[3]}
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
        <Button
          color="brand.3"
          px={80}
          radius="xl"
          onClick={() => router.push("/select-service/details")}
        >
          Continue
        </Button>
      </Stack>
    </VerificationLayout>
  );
}
