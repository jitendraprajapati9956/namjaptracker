import React from "react";
import EntryForm from "./EntryForm";
import EntryList from "./EntryList";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <DashboardLayout>
      <EntryForm />
      <EntryList />
    </DashboardLayout>
  );
}

export default App;