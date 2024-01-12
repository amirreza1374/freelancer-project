import React from "react";
import ProposalTable from "../features/proposals/ProposalTable";


function Proposals() {
  return (
    <div>
      <h1 className=" font-bold text-secondary-700 text-xl mb-8">
        لیست درخواست ها
      </h1>
      <ProposalTable />
    </div>
  );
}

export default Proposals;
