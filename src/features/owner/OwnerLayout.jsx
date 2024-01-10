import React from "react";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import CustomNavlink from "../../ui/CustomNavlink";
import { HiCollection, HiHome } from "react-icons/hi";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavlink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavlink>

        <CustomNavlink to="projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavlink>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
