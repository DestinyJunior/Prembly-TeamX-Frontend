import { DashboardLayout } from "../../src/components/layout/DashboardLayout";

const Banks = () => {
  return <div>Banks</div>;
};

export default Banks;
Banks.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
