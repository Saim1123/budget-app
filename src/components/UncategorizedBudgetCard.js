import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetContext";
import BudgetCard from "./BudgetCard";

const UncategorizedBudgetCard = (props) => {
  const { getBudgetExpenses } = useBudgets();
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );

  if (amount === 0) return null;
  return <BudgetCard amount={amount} gray name="Uncategorized" {...props} />;
};

export default UncategorizedBudgetCard;
