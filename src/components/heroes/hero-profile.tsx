"use client";

import { queryKeys } from "@/api/query-keys";
import { saveStats } from "@/api/requests";
import { HeroProfileType } from "@/api/types";
import { Card } from "@/components/ui/card";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import StatControl from "./stat-control";

interface Props {
  id: string;
  data: HeroProfileType;
}

const HeroProfile = ({ id, data }: Props) => {
  const queryClient = useQueryClient();
  const [profile, setProfile] = useState(data);

  // 計算總點數
  const totalValue = Object.values(data).reduce((acc, value) => acc + value, 0);

  // 計算剩餘點數
  const remainingValue = Math.max(
    totalValue - Object.values(profile).reduce((acc, value) => acc + value, 0),
    0,
  );

  const handleChange = (key: keyof HeroProfileType, nextValue: number) => {
    setProfile((currentProfile) => {
      // 能力值不能小於零
      if (nextValue < 0) return currentProfile;

      return {
        ...currentProfile,
        [key]: nextValue,
      };
    });
  };

  const saveStatsMutation = useMutation({
    mutationFn: saveStats,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.HERO_PROFILE, { id }],
      });
      toast.success("能力值儲存成功", {
        position: "top-center",
      });
    },
    onError: () => {
      toast.error("能力值儲存失敗", {
        position: "top-center",
      });
    },
  });

  // 儲存點數
  const onSaveStats = () => {
    if (remainingValue !== 0) {
      toast.warning("還有點數可以分配喔！", {
        position: "top-center",
      });
    } else {
      saveStatsMutation.mutate({
        id,
        ...profile,
      });
    }
  };

  const onResetStats = () => {
    setProfile({ str: 0, int: 0, agi: 0, luk: 0 });
  };

  // 檢查是否有變更
  const hasChanges = Object.keys(profile).some(
    (key) =>
      profile[key as keyof HeroProfileType] !==
      data[key as keyof HeroProfileType],
  );

  return (
    <Card className="w-full max-w-200 p-8 rounded-lg">
      <p className="text-xl font-bold">剩餘能力值: {remainingValue}</p>
      {Object.entries(profile).map(([key, value]) => (
        <StatControl
          key={key}
          label={key}
          value={value}
          onIncrease={() =>
            handleChange(key as keyof HeroProfileType, value + 1)
          }
          onDecrease={() =>
            handleChange(key as keyof HeroProfileType, value - 1)
          }
          canIncrease={remainingValue > 0}
          canDecrease={value > 0}
        />
      ))}
      <div className="flex justify-end items-center gap-4">
        <Button
          size="lg"
          onClick={onResetStats}
          disabled={totalValue === remainingValue}
        >
          重新分配能力值
        </Button>
        <Button
          size="lg"
          onClick={onSaveStats}
          disabled={!hasChanges || saveStatsMutation.isPending}
        >
          儲存能力值
        </Button>
      </div>
    </Card>
  );
};

export default HeroProfile;
