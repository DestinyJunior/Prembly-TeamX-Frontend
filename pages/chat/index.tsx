import { chats } from "@/data/chats";
import {
  ActionIcon,
  Avatar,
  Box,
  Center,
  Flex,
  Grid,
  Group,
  Paper,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import {
  IconBell,
  IconMicrophone,
  IconPhone,
  IconPlus,
  IconScreenShare,
  IconSearch,
  IconSend,
  IconWorld,
} from "@tabler/icons";
import { useState } from "react";
import { DashboardLayout } from "../../src/components/layout/DashboardLayout";

const ChattingsPage = () => {
  const chats_list = chats.profile.friends;
  const [chatId, setChatId] = useState<number | null>(null);
  const single_chat = chats.profile;
  const single_chat_log = chats.friends.find(
    (friend) => friend.id === Number(chatId)
  );
  const theme = useMantineTheme();
  console.log(single_chat);
  return (
    <Box>
      <Flex justify="space-between" align="center" pb={20} pt={10}>
        <Box>
          <Text size={25} weight="bold">
            Messages
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
      <Grid gutter={30}>
        <Grid.Col span={5}>
          <Paper
            p="md"
            radius="lg"
            sx={{ background: "transparent", height: "90vh" }}
            component={ScrollArea}
          >
            <Stack spacing={5}>
              <TextInput
                placeholder="search messages"
                icon={<IconSearch size={14} stroke={1.5} />}
                size="sm"
                radius="xl"
              />
              {chats_list.map(
                ({ name, picture, lastChat, latest_timestamp, id }) => {
                  return (
                    <Group
                      position="apart"
                      sx={{
                        borderBottom: "1px solid #eaeaea",
                        padding: "0.875rem",
                        background: chatId !== id ? "transparent" : "#fff",
                        ":hover": {
                          background: theme.white,
                          boxShadow: theme.shadows.sm,
                          transition: "all 500ms ease",
                        },
                      }}
                      noWrap
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                        role="button"
                        onClick={() => setChatId(id)}
                      >
                        <Avatar src={picture} radius="xl" />
                        <Box>
                          <Text size={12} weight="bold">
                            {name}
                          </Text>{" "}
                          <Text size={12}>
                            {lastChat.slice(0, 30).concat("...")}
                          </Text>
                        </Box>
                      </Box>
                      <Stack align="center" spacing={5}>
                        <Text size={12}>{latest_timestamp}</Text>
                        <Text
                          sx={{
                            background: theme.colors.brand[3],
                            height: 15,
                            width: 15,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                          }}
                          size={10}
                        >
                          2
                        </Text>
                      </Stack>
                    </Group>
                  );
                }
              )}
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={7}>
          <Paper
            shadow="md"
            p="md"
            radius="lg"
            sx={{
              height: "90vh",
            }}
            component={ScrollArea}
          >
            {chatId === null ? (
              <Center sx={{ height: "80vh" }}>
                <Title order={3} align="center">
                  Select a conversation
                </Title>
              </Center>
            ) : (
              <Stack spacing={5}>
                <Group
                  sx={{
                    borderBottom: "2px solid  #eaeaea",
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    background: theme.white,
                  }}
                  position="apart"
                  py={14}
                >
                  <Group>
                    <Avatar src={single_chat_log?.picture} radius="xl" />
                    <Stack spacing={2}>
                      <Title order={6}>{single_chat_log?.name}</Title>
                      <Text size={10} color="brand.4">
                        Last seen yesterday
                      </Text>
                    </Stack>
                  </Group>
                  <Group>
                    <ActionIcon color="brand.4">
                      <IconPhone size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                      color="brand.4"
                      component={NextLink}
                      href="/chat/live"
                    >
                      <IconScreenShare size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon color="brand.4">
                      <IconWorld size={18} stroke={1.5} />
                    </ActionIcon>
                  </Group>
                </Group>

                <Stack spacing={35} py="md">
                  {single_chat_log?.chatlog.length !== 0 ? (
                    single_chat_log?.chatlog.map(
                      ({ text, timestamp, side }) => {
                        return (
                          <>
                            <Group
                              position="apart"
                              sx={{ width: "100%" }}
                              noWrap
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "start",
                                  gap: "1rem",
                                }}
                              >
                                <Avatar
                                  src={single_chat_log.picture}
                                  radius="xl"
                                  size="sm"
                                />

                                <Box
                                  sx={{
                                    background:
                                      side !== "left"
                                        ? "white"
                                        : theme.colors.brand[3],
                                    color: side !== "left" ? "black" : "white",
                                    padding: "0.5rem",
                                    borderTopLeftRadius:
                                      side !== "left" ? "1rem" : "0",
                                    borderTopRightRadius: "1rem",
                                    borderBottomRightRadius: "1rem",
                                    borderBottomLeftRadius: "1rem",
                                  }}
                                >
                                  <Text size={12} weight="bold">
                                    {single_chat_log.name}
                                  </Text>{" "}
                                  <Text size={12}>{text}</Text>
                                </Box>
                              </Box>
                            </Group>
                            <Group position="right" sx={{ width: "100%" }}>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "start",
                                  flexDirection: "row-reverse",
                                  gap: "1rem",
                                }}
                              >
                                <Avatar
                                  src={single_chat.picture}
                                  radius="xl"
                                  size="sm"
                                />

                                <Box
                                  sx={{
                                    background: theme.colors.brand[1],
                                    color: "black",
                                    padding: "0.5rem",
                                    borderTopLeftRadius: "1rem",
                                    borderTopRightRadius: "0",
                                    borderBottomRightRadius: "1rem",
                                    borderBottomLeftRadius: "1rem",
                                  }}
                                >
                                  <Text size={12}>
                                    hello again, it's me again
                                    {single_chat.name}
                                  </Text>
                                </Box>
                              </Box>
                            </Group>
                          </>
                        );
                      }
                    )
                  ) : (
                    <Center sx={{ minHeight: "60vh" }}>
                      <Title order={3} align="center" color="brand.3">
                        No messages yet
                      </Title>
                    </Center>
                  )}
                </Stack>
                <Paper
                  sx={{
                    position: "sticky",
                    bottom: "0%",
                    width: "100%",
                    zIndex: 1,
                    backgroundColor: "white",
                    padding: "1rem",
                  }}
                >
                  <Group position="apart" sx={{ width: "100%" }} noWrap>
                    <ActionIcon color="brand.3" variant="filled" radius={100}>
                      <IconPlus stroke={1.5} color={theme.white} size={14} />
                    </ActionIcon>
                    <TextInput
                      sx={{ width: "100%" }}
                      radius="xl"
                      placeholder="Type a message"
                      styles={(theme) => ({
                        input: {
                          border: "none",
                          backgroundColor: theme.fn.lighten(
                            theme.colors.brand[2],
                            0.9
                          ),
                        },
                      })}
                      rightSection={
                        <ActionIcon color="brand.3" radius={100}>
                          <IconMicrophone />
                        </ActionIcon>
                      }
                    />
                    <ActionIcon
                      color="brand.3"
                      variant="filled"
                      radius={100}
                      size="md"
                    >
                      <IconSend size={14} />
                    </ActionIcon>
                  </Group>
                </Paper>
              </Stack>
            )}
          </Paper>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default ChattingsPage;
ChattingsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
