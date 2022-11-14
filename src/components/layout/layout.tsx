import { Box, createStyles, Grid, Group, Header, Text } from "@mantine/core";
import React from "react";

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
    height: "100vh",
    overflow: "hidden",
    paddingTop: "90px",
    paddingBottom: "90px",
    paddingLeft: "100px",
    paddingRight: "100px",
    width: "100%",
  },
  side_two: {
    maxWidth: "40rem",
    height: "90vh",
    margin: "auto",
  },
}));

export const HEADER_HEIGHT = 67;
export const VerificationLayout = ({
  children,
  sideContent,
}: {
  children: React.ReactNode;
  sideContent: React.ReactNode;
}) => {
  const { classes } = useStyles();
  return (
    <Box>
      <Header p="md" height={HEADER_HEIGHT} fixed>
        <Group position="apart" align="center">
          <Group>helld</Group>

          <Text>
            Having problems?{" "}
            <Text span color="brand.4">
              {" "}
              Get help and support
            </Text>
          </Text>
        </Group>
      </Header>
      <Grid align="center">
        <Grid.Col lg={5} md={5} sm={12} xs={12}>
          <Box className={classes.side_one}> {sideContent}</Box>
        </Grid.Col>
        <Grid.Col lg={7} md={7} sm={12} xs={12}>
          <Box className={classes.side_two}> {children}</Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
