import {
  Avatar,
  Box,
  createStyles,
  Flex,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconBell, IconBrandAirbnb, IconSearch } from "@tabler/icons";
import React from "react";
import { DashboardLayout } from "../../src/components/layout/DashboardLayout";
import { UsersIcon } from "../../src/components/svg/UsersIcon";

const useStyles = createStyles((theme) => ({
  stat_card: {
    borderRight: `1px solid ${theme.colors.gray[3]}`,
    borderLeft: `1px solid ${theme.colors.gray[3]}`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
  service_card: {
    svg: {
      color: theme.colors.brand[3],
    },
    "&:hover": {
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
const Agents = () => {
  const { classes, theme } = useStyles();
  return (
    <Stack>
      <Flex justify="space-between" align="center">
        <Box>
          <Text size={25} weight="bold">
            Hello Eniola 👋
          </Text>
        </Box>
        <Group>
          <IconBell stroke={1.5} color="#898ff6" />
          <Avatar
            src={"https://picsum.photos/seed/picsum/200/300"}
            radius={100}
          />
        </Group>
      </Flex>

      <Paper p="sm" radius="md" sx={{ background: theme.colors.brand[3] }}>
        <Flex justify="space-evenly">
          <Box>
            <Group>
              <UsersIcon />
              <Stack spacing={2}>
                <Text color="white" size="sm">
                  Agents
                </Text>
                <Text color="white" size="xl" weight="bolder">
                  100
                </Text>
              </Stack>
            </Group>
          </Box>
          <Box className={classes.stat_card}>
            <Group>
              <UsersIcon />
              <Stack spacing={2}>
                <Text color="white" size="sm">
                  Total Customers Service
                </Text>
                <Text color="white" size="xl" weight="bolder">
                  6,400
                </Text>
              </Stack>
            </Group>
          </Box>
          <Box>
            <Group>
              <UsersIcon />
              <Stack spacing={2}>
                <Text color="white" size="sm">
                  Active Now
                </Text>
                <Text color="white" size="xl" weight="bolder">
                  5000
                </Text>
              </Stack>
            </Group>
          </Box>
        </Flex>
      </Paper>

      <Paper p="lg" radius="md">
        <Group position="apart">
          {" "}
          <Text size="xl" weight="bolder">
            Agents
          </Text>
          <TextInput
            placeholder="Search"
            icon={<IconSearch stroke={1.5} color="gray" />}
            styles={(theme) => ({
              input: {
                border: "none",
                backgroundColor: theme.fn.lighten(theme.colors.brand[2], 0.9),
              },
            })}
          />
        </Group>
        <SimpleGrid cols={4} my={20}>
          <Paper withBorder p={20} className={classes.service_card}>
            <Stack align="center" spacing={5}>
              <IconBrandAirbnb stroke={1.5} size={50} />
              <Text size="xl" align="center">
                AirBnB
              </Text>
              <Text align="center" size="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
          <Paper withBorder p={20} className={classes.service_card}>
            <Stack align="center" spacing={5}>
              <IconBrandAirbnb stroke={1.5} size={50} />
              <Text size="xl" align="center">
                AirBnB
              </Text>
              <Text align="center" size="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
          <Paper withBorder p={20} className={classes.service_card}>
            <Stack align="center" spacing={5}>
              <IconBrandAirbnb stroke={1.5} size={50} />
              <Text size="xl" align="center">
                AirBnB
              </Text>
              <Text align="center" size="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
          <Paper withBorder p={20} className={classes.service_card}>
            <Stack align="center" spacing={5}>
              <IconBrandAirbnb stroke={1.5} size={50} />
              <Text size="xl" align="center">
                AirBnB
              </Text>
              <Text align="center" size="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
          <Paper withBorder p={20} className={classes.service_card}>
            <Stack align="center" spacing={5}>
              <IconBrandAirbnb stroke={1.5} size={50} />
              <Text size="xl" align="center">
                AirBnB
              </Text>
              <Text align="center" size="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
          <Paper withBorder p={20} className={classes.service_card}>
            <Stack align="center" spacing={5}>
              <IconBrandAirbnb stroke={1.5} size={50} />
              <Text size="xl" align="center">
                AirBnB
              </Text>
              <Text align="center" size="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
          <Paper withBorder p={20} className={classes.service_card}>
            <Stack align="center" spacing={5}>
              <IconBrandAirbnb stroke={1.5} size={50} />
              <Text size="xl" align="center">
                AirBnB
              </Text>
              <Text align="center" size="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Stack>
          </Paper>
        </SimpleGrid>
      </Paper>
    </Stack>
  );
};

export default Agents;

Agents.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
