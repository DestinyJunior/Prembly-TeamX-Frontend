import { banks } from "@/data";
import { DashboardLayout } from "@components/layout/DashboardLayout";
import { UsersIcon } from "@components/svg/UsersIcon";
import {
  Avatar,
  Box,
  createStyles,
  Flex,
  Group,
  Image,
  Pagination,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import { IconBell, IconSearch } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  stat_card: {
    borderRight: `1px solid ${theme.colors.gray[3]}`,
    borderLeft: `1px solid ${theme.colors.gray[3]}`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
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

const Banks = () => {
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
                  Total Banks
                </Text>
                <Text color="white" size="xl" weight="bolder">
                  50
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
                  1,100
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
                  1000
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
            Available Banks
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
          {banks.map((bank) => (
            <Paper
              withBorder
              p={20}
              className={classes.service_card}
              key={bank.id}
            >
              <Stack align="center" spacing={5}>
                <Image src={bank.image.src} height={80} width={80} />
                <Text
                  size="sm"
                  align="center"
                  weight="bold"
                  component={NextLink}
                  href={`
                /agents/banks/${bank.id}
                `}
                >
                  {bank.name}
                </Text>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
        <Group position="right">
          <Pagination total={banks.length / 4} color="brand.3" />
        </Group>
      </Paper>
    </Stack>
  );
};

export default Banks;
Banks.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
