import { DashboardLayout } from "../../src/components/layout/DashboardLayout";

const SettingsPage = () => {
  return <div>SettingsPage</div>;
};

export default SettingsPage;
SettingsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
