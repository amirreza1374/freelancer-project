import { HiCheckCircle, HiCurrencyDollar } from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import { HiComputerDesktop } from "react-icons/hi2";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiComputerDesktop className="size-16" />}
      />
      <Stat
        title="درخواست های تایید شده"
        value={acceptedProposals.length}
        icon={<HiCheckCircle className="size-20 text-green-600 " />}
      />
      <Stat
        color="yellow"
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiCurrencyDollar className="size-20" />}
      />
    </div>
  );
}

export default Stats;
