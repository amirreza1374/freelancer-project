import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";
function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div>
      <div className="sm:max-w-sm flex justify-center pt-10">
        <div>
          <h1 className="text-xl font-bold text-secondary-700 mb-8">
            صفحه ای که دنبالش بودید پیدا نشد
          </h1>
          <button onClick={moveBack} className="flex items-center gap-x-1">
            <HiArrowRight className="size-5 text-primary-900" />
            <span>برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
