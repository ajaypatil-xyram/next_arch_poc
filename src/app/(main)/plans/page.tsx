"use client";

import {
  getPlansService,
  submitPlanService,
} from "@/lib/services/users.service";
import { useEffect, useState } from "react";
import { X, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Plans() {
  const [plans, setPlans] = useState<string[]>([]);
  const [addedPlans, setAddedPlans] = useState<string[]>([]);

  async function getPlanList() {
    const planList = await getPlansService();
    setPlans(planList.plans);
  }

  useEffect(() => {
    getPlanList();
  }, []);

  const handleAddPlan = (plan: string) => {
    setAddedPlans([...addedPlans, plan]);
    setPlans(plans.filter((pn) => pn !== plan));
  };

  const removePlan = (plan: string) => {
    setPlans([...plans, plan]);
    setAddedPlans(addedPlans.filter((pn) => pn !== plan));
  };

  const handleSubmit = async () => {
    await submitPlanService(addedPlans);
  };

  return (
    <div className="dark:bg-gray-700 dark:text-white p-5">
      <h1 className="text-2xl font-bold">Plans</h1>
      <div className="border border-gray-500 rounded p-5 mt-3">
        <ul>
          {plans.map((plan, index) => (
            <li
              className="my-2 border-b-1 p-3 flex justify-between"
              key={`${index}-${plan}`}
            >
              {plan}
              <Button
                variant={"outline"}
                size={"icon"}
                className="ml-2"
                onClick={() => handleAddPlan(plan)}
              >
                <PlusIcon />
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <h1 className="text-2xl font-bold mt-3">Added Plans</h1>
      <div className="border border-gray-500 mt-3 p-5">
        <ul>
          {addedPlans.length === 0 && (
            <h1 className="text-1xl font-bold">No Plans added</h1>
          )}
          {addedPlans.map((plan, index) => (
            <li
              className="my-2 border-b-1 p-3 flex justify-between"
              key={`${plan}-${index}`}
            >
              {plan}
              <Button
                variant={"outline"}
                size={"icon"}
                className="ml-2"
                onClick={() => removePlan(plan)}
              >
                <X />
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end p-3">
        <Button
          variant={"outline"}
          className="bg-blue-500 dark:bg-blue-500"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
