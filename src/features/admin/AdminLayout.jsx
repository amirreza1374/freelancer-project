import AppLayout from "../../ui/AppLayout";

import Sidebar from "../../ui/Sidebar";
import CustomNavlink from "../../ui/CustomNavlink";
import { HiCollection, HiHome, HiUser } from "react-icons/hi";
import { HiComputerDesktop } from "react-icons/hi2";

function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavlink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavlink>
        <CustomNavlink to="users">
          <HiUser />
          <span>کاربرها</span>
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
  );
}

export default AdminLayout;
