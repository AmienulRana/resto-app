import { useState } from "react";
import { Layout } from "@/components/common/layout";
import { EmptyTransaction, ExistsTransaction } from "@/components/pages/transaction";

const Transaction = () => {
  const [transactions, setTransactions] = useState(['tes']);
  return (
    <Layout>
      {transactions.length === 0 ? <EmptyTransaction /> : <ExistsTransaction />}
    </Layout>
  );
};

export default Transaction;
