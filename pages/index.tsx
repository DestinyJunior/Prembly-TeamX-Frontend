import {
  Box,
  Button,
  createStyles,
  Grid,
  Group,
  Header,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import hero1 from "../src/assets/images/hero1.png";

const HEADER_HEIGHT = 67;

const useStyles = createStyles((theme) => ({
  wrapper: {
    background: "rgba(236, 236, 253, 0.5)",
    height: "90vh",
    overflow: "hidden",
    padding: "30px",
  },
  service_card: {
    ":hover": {
      borderColor: theme.colors.brand[3],
    },
  },
  side_one: {
    background: "rgba(236, 236, 253, 0.5)",
    height: "90vh",
    overflow: "hidden",
    padding: "30px",
  },
  side_two: {
    maxWidth: "40rem",
    height: "90vh",
    margin: "auto",
  },
}));

export default function HomePage() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Header p="md" height={HEADER_HEIGHT}>
        <Group position="right">
          <Text>
            Having problems?{" "}
            <Text span color="brand.4">
              {" "}
              Get help and support
            </Text>
          </Text>
        </Group>
      </Header>
      <Box>
        <Grid>
          <Grid.Col lg={5}></Grid.Col>
          <Grid.Col lg={7}>
            <Stack align="center" justify="center" className={classes.side_two}>
              <SimpleGrid cols={2} sx={{ justifyContent: "center" }}>
                <Paper withBorder className={classes.service_card} p={40}>
                  <Stack>
                    <Text size="xl" align="center">
                      Bank
                    </Text>
                    <Text align="center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </Stack>
                </Paper>
                <Paper withBorder p={40} className={classes.service_card}>
                  <Stack>
                    <Text size="xl" align="center">
                      AirBnB
                    </Text>
                    <Text align="center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </Stack>
                </Paper>
                <Paper withBorder p={40} className={classes.service_card}>
                  <Stack>
                    <Text size="xl" align="center">
                      E-commerce
                    </Text>
                    <Text align="center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </Stack>
                </Paper>
                <Paper withBorder p={40} className={classes.service_card}>
                  <Stack>
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
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
}
