import { AppShell, Container } from "@mantine/core";
import React from "react";
import { CustomNavbar } from "./navbar/CustomNavbar";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AppShell
      navbar={<CustomNavbar />}
      styles={(theme) => ({
        main: {
          backgroundColor: "#FAFAFF ",
        },
        navbar: {
          backgroundColor: theme.colors.white,
          borderRight: "none",
        },
      })}
    >
      <Container size="xl">{children}</Container>
    </AppShell>
  );
};
