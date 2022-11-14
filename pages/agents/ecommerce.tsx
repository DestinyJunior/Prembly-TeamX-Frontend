import { DashboardLayout } from "../../src/components/layout/DashboardLayout";

const Ecommerce = () => {
  return <div>Ecommerce</div>;
};

export default Ecommerce;
Ecommerce.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
