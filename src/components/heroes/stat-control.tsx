"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface Props {
  label: string;
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  canIncrease: boolean;
  canDecrease: boolean;
}

const StatControl = ({
  label,
  value,
  onIncrease,
  onDecrease,
  canIncrease,
  canDecrease,
}: Props) => {
  return (
    <div className="flex items-center gap-4">
      <p className="w-10 text-right text-lg font-bold">{label.toUpperCase()}</p>
      <Button
        size="icon"
        variant="outline"
        onClick={onIncrease}
        disabled={!canIncrease}
      >
        <Plus className="size-4" />
      </Button>
      <p className="w-5 text-2xl text-center font-bold">{value}</p>
      <Button
        size="icon"
        variant="outline"
        onClick={onDecrease}
        disabled={!canDecrease}
      >
        <Minus className="size-4" />
      </Button>
    </div>
  );
};

export default StatControl;
