import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Grid,
  Group,
  Paper,
  Text,
  useMantineTheme,
} from "@mantine/core";
import {
  IconCapture,
  IconChevronLeft,
  IconMessage,
  IconMicrophone,
  IconPlayerRecord,
  IconPlus,
  IconScreenShare,
  IconVideoOff,
  IconWaveSawTool,
} from "@tabler/icons";
import Head from "next/head";

const LiveChat = () => {
  const theme = useMantineTheme();
  return (
    <Box>
      <Box sx={{ borderBottom: `solid 2px ${theme.colors.gray[2]}` }} py={10}>
        <Group>
          <IconChevronLeft stroke={1.5} />
          <Text size="xl">Live Chat</Text>
        </Group>
      </Box>
      <Group position="right" my={10}>
        <Button
          leftIcon={<IconPlus stroke={1.5} color="black" />}
          radius="xl"
          color="brand.1"
        >
          <Text size="xs" color="black">
            {" "}
            Add People
          </Text>
        </Button>
      </Group>
      <Paper
        shadow="xs"
        sx={{
          minHeight: "30rem",
          maxHeight: "30rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Paper
          sx={{
            background: theme.white,
            height: "13rem",
            maxHeight: "13rem",
            minHeight: "13rem",
            width: "13rem",
            borderRadius: "50%",
            outline: "solid 2px " + theme.colors.brand[3],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              background: theme.colors.brand[3],
              height: "10rem",
              maxHeight: "10rem",
              minHeight: "10rem",
              width: "10rem",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text size={70} color="white">
              AE
            </Text>
          </Paper>
        </Paper>

        {/* mini top-right card */}
        <Paper
          sx={{
            maxHeight: "10rem",
            minHeight: "10rem",
            width: "7rem",
            position: "absolute",
            background: theme.colors.brand[3],
            top: "1%",
            right: "1%",
            padding: "0.5rem",
          }}
        >
          <Group position="right">
            <ActionIcon color="red" variant="filled" radius="xl" size="sm">
              <IconMicrophone stroke={1.5} color="white" />
            </ActionIcon>
          </Group>
          <Center my={8}>
            <Paper
              sx={{
                background: theme.colors.brand[3],
                height: "5rem",
                maxHeight: "5rem",
                minHeight: "5rem",
                width: "5rem",
                borderRadius: "50%",
                outline: "solid 1px " + theme.white,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                sx={{
                  background: theme.white,
                  height: "4rem",
                  maxHeight: "4rem",
                  minHeight: "4rem",
                  width: "4rem",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text size={30} color="brand.3">
                  AE
                </Text>
              </Paper>
            </Paper>
          </Center>
          <Text size="sm" color="white" weight="bold">
            Aisha E.
          </Text>
        </Paper>
        <Group
          position="apart"
          sx={{ width: "100%", position: "absolute", bottom: "0" }}
          p="lg"
        >
          <Text color="brand.4" size="lg">
            You
          </Text>
          <ActionIcon color={theme.colors.brand[3]} radius="xl">
            <IconWaveSawTool stroke={1.5} />
          </ActionIcon>
        </Group>
      </Paper>
      <Box p="lg" sx={{ background: "#F7FAFB" }}>
        <Grid>
          <Grid.Col span={3}></Grid.Col>
          <Grid.Col span={6}>
            <Group position="center">
              <ActionIcon
                color="brand.2"
                radius="xl"
                variant="filled"
                size="lg"
              >
                <IconMicrophone stroke={1.5} color="white" />
              </ActionIcon>
              <ActionIcon
                color="brand.2"
                radius="xl"
                variant="filled"
                size="lg"
              >
                <IconVideoOff stroke={1.5} color="white" />
              </ActionIcon>
              <ActionIcon
                color="brand.2"
                radius="xl"
                variant="filled"
                size="lg"
              >
                <IconScreenShare stroke={1.5} color="white" />
              </ActionIcon>
              <ActionIcon
                color="brand.2"
                radius="xl"
                variant="filled"
                size="lg"
              >
                <IconPlayerRecord stroke={1.5} color="white" />
              </ActionIcon>
              <ActionIcon
                color="brand.2"
                radius="xl"
                variant="filled"
                size="lg"
              >
                <IconCapture stroke={1.5} color="white" />
              </ActionIcon>
            </Group>
          </Grid.Col>
          <Grid.Col span={3}>
            <Group position="right">
              <ActionIcon
                color="brand.2"
                radius="xl"
                variant="filled"
                size="lg"
              >
                <IconMessage stroke={1.5} color="white" />
              </ActionIcon>
            </Group>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
};

export default LiveChat;
LiveChat.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DashboardLayout>
      <Head>
        <title>LiveChat</title>
      </Head>
      {page}
    </DashboardLayout>
  );
};
