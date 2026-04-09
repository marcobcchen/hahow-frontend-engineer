"use client";

import { queryKeys } from "@/api/query-keys";
import { saveStats } from "@/api/requests";
import { HeroProfileType } from "@/api/types";
import { Card } from "@/components/ui/card";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
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

  // 計算總能力值
  const totalValue = useMemo(
    () => Object.values(data).reduce((acc, value) => acc + value, 0),
    [data],
  );

  // 計算目前分配的能力值總和
  const currentTotalValue = useMemo(
    () => Object.values(profile).reduce((acc, value) => acc + value, 0),
    [profile],
  );

  // 計算剩餘能力值
  const remainingValue = useMemo(
    () => Math.max(totalValue - currentTotalValue, 0),
    [totalValue, currentTotalValue],
  );

  // 處理能力值變更
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

  // 儲存能力值的 mutation
  const saveStatsMutation = useMutation({
    mutationFn: saveStats,
    onSuccess: () => {
      // 重新取得英雄能力資料以更新畫面
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

  // 儲存能力值
  const onSaveStats = () => {
    if (remainingValue !== 0) {
      toast.warning("還有點數可以分配喔！", {
        position: "top-center",
      });
      return;
    }

    saveStatsMutation.mutate({
      id,
      ...profile,
    });
  };

  // 重新分配能力值
  const onResetStats = () => {
    setProfile({ str: 0, int: 0, agi: 0, luk: 0 });
  };

  // 檢查能力值是否有變更
  const hasChanges = useMemo(
    () =>
      Object.keys(profile).some(
        (key) =>
          profile[key as keyof HeroProfileType] !==
          data[key as keyof HeroProfileType],
      ),
    [profile, data],
  );

  return (
    <Card className="w-full max-w-200 p-8 rounded-lg">
      <p className="text-xl font-bold">剩餘能力值：{remainingValue}</p>
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
          {saveStatsMutation.isPending ? "儲存中..." : "儲存能力值"}
        </Button>
      </div>
    </Card>
  );
};

export default HeroProfile;
