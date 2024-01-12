import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals, users, projects }) {
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <Stat
        color="orange"
        title="کاربرها"
        value={users}
        icon={<HiUser className="size-16" />}
      />

      <Stat
        color="primary"
        title="کیف پول"
        value={proposals}
        icon={<HiOutlineViewGrid className="size-20" />}
      />
      <Stat
        color="green"
        title="پروژه ها"
        value={projects}
        icon={<HiCollection className="size-20 text-green-600 " />}
      />
    </div>
  );
}

export default Stats;
