import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { UsersIcon } from "@/components/svg/UsersIcon";
import { banks, users } from "@/data";
import {
  Avatar,
  Badge,
  Box,
  Button,
  createStyles,
  Divider,
  Flex,
  Group,
  Image,
  Pagination,
  Paper,
  Stack,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { IconBell, IconSearch } from "@tabler/icons";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const useStyles = createStyles((theme) => ({
  stat_card: {
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

const SingleAgentPage = () => {
  const { classes, theme } = useStyles();
  const router = useRouter();
  const bank = banks[Number(router.query?.slug)];
  const [page, setPage] = React.useState(1);
  const PAGE_SIZE = 10;

  const firstPage = users.slice(page, PAGE_SIZE);
  const lastPage = users.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const paginatedUsers = useMemo(
    () => users.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE),
    [page]
  );

  return (
    <Stack>
      <Flex justify="space-between" align="center">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Image
            src={bank?.image.src}
            alt={bank?.image.name}
            width={50}
            height={50}
          />
          <Text size={25} weight="bold">
            {bank?.name}
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
        <Flex justify="space-between">
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
          <Divider variant="solid" color="white" orientation="vertical" />
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
            Customer Service Agents
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

        <Table my={15} striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user, index) => (
              <tr key={index}>
                <td>
                  <Flex align="center" gap={10}>
                    <Text size="sm">{user.name}</Text>
                  </Flex>
                </td>
                <td>
                  <Text size="sm">{user.bank}</Text>
                </td>
                <td>
                  {user.status === "active" ? (
                    <Badge color="green" size="sm" radius={0}>
                      {user.status}
                    </Badge>
                  ) : (
                    <Badge color="red" size="sm" radius={0}>
                      {user.status}
                    </Badge>
                  )}
                </td>
                <td>
                  <Button
                    variant="outline"
                    color="brand.3"
                    onClick={() => router.push(`/chat`)}
                    size="sm"
                  >
                    Chat
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Group position="right" my={20}>
          <Pagination
            total={users.length / PAGE_SIZE}
            page={page}
            onChange={setPage}
            size="sm"
            color="brand.3"
          />
        </Group>
      </Paper>
    </Stack>
  );
};

export default SingleAgentPage;
SingleAgentPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
