import React from "react";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import CustomNavlink from "../../ui/CustomNavlink";
import { HiCollection, HiHome } from "react-icons/hi";
import { HiComputerDesktop } from "react-icons/hi2";

function FreelancerLayout() {
  return (
    <div>
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

          <CustomNavlink to="proposals">
            <HiComputerDesktop />
            <span>درخواست ها</span>
          </CustomNavlink>
        </Sidebar>
      </AppLayout>
    </div>
  );
}

export default FreelancerLayout;
