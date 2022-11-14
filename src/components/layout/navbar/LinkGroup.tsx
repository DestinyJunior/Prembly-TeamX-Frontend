import {
  Box,
  Collapse,
  createStyles,
  Group,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import { IconChevronLeft, IconChevronRight, TablerIcon } from "@tabler/icons";
import { useRouter } from "next/router";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    "&:hover": {
      backgroundColor: theme.colors.gray[0],
      color: theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[6],
    transition: "all 100ms ease-in-out",
    borderRadius: theme.radius.sm,
    "&:hover": {
      backgroundColor: "#898ff6",
      color: theme.white,
    },
  },

  chevron: {
    transition: "transform 200ms ease",
  },
  active: {
    backgroundColor: "#898ff6",
    color: theme.white,
  },
}));

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  link?: string;
  links?: { label: string; link: string }[];
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  link,
  links,
}: LinksGroupProps) {
  const { classes, theme, cx } = useStyles();
  const _theme = useMantineTheme();
  const hasLinks = Array.isArray(links);
  const hasLink = link && link?.length > 0;
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((link) => (
    <Text
      component={NextLink}
      className={classes.link}
      href={link.link}
      key={link.label}
      color="dimmed"
      size="lg"
    >
      {link.label}
    </Text>
  ));
  const router = useRouter();
  const activeLink = router.pathname;

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={cx(classes.control, [
          activeLink === link ? classes.active : "",
        ])}
        my={15}
      >
        <Group position="apart" spacing={0} p="sm">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Icon
              size={20}
              stroke={1.5}
              color={activeLink === link ? "#fff" : "#333"}
            />
            {hasLink ? (
              <Text component={NextLink} href={link} ml="md">
                {label}
              </Text>
            ) : (
              <Box ml="md">{label}</Box>
            )}
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? (
        <Collapse in={opened} sx={{ border: "none" }}>
          {items}
        </Collapse>
      ) : null}
    </>
  );
}
