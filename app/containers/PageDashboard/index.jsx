import React from "react";

import Body from "@/components/Body/index";

import PageLayout from "../PageLayout";

function Dashboard() {
  React.useEffect(() => {
    window.document.title = "Dashboard-Al Jamiatul Ashrafia";
    return () => {
      window.document.title = "Al Jamiatul Ashrafia";
    };
  }, []);
  return (
    <PageLayout title="Dashboard">
      <Body />

      {/* <Statuses />
      <GridClaim /> */}
    </PageLayout>
  );
}

export default Dashboard;
