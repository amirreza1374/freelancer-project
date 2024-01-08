import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";
function Logout() {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loading />
  ) : (
    <button>
      <HiArrowRightOnRectangle className="size-5 text-secondary-500 hover:text-error" />
    </button>
  );
}

export default Logout;
