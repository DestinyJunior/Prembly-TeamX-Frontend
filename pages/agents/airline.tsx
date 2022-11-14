import { DashboardLayout } from "../../src/components/layout/DashboardLayout";

const Airline = () => {
  return <div> Airline</div>;
};

export default Airline;
Airline.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
