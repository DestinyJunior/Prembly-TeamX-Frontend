import { createStyles, Group, Navbar, ScrollArea } from "@mantine/core";
import {
  IconLogout,
  IconMessageChatbot,
  IconSettings,
  IconUsers,
} from "@tabler/icons";
import Logo from "../../svg/Logo";
import { LinksGroup } from "./LinkGroup";

const mockdata = [
  {
    label: "Agents",
    icon: IconUsers,
    initiallyOpened: true,
    link: "/agents",
    links: [
      { label: "Bank", link: "/agents/banks" },
      { label: "Airline", link: "/agents/airline" },
      { label: "Ecommerce", link: "/agents/ecommerce" },
    ],
  },
  {
    label: "Chat",
    link: "/chat",
    icon: IconMessageChatbot,
  },
  {
    label: "Settings",
    link: "/settings",
    icon: IconSettings,
  },
  {
    label: "Logout",

    icon: IconLogout,
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

export function CustomNavbar() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar width={{ sm: 250 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="center" py={5}>
          <Logo />
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
