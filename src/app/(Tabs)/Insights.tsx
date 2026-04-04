import React from "react";
import { ScrollView } from "react-native";
import ClearCompletedButton from "@/components/Insights/ClearCompletedButton";
import InsightsCategorySection from "@/components/Insights/InsightsCategorySection";
import InsightStatsSection from "@/components/Insights/InsightStatsSection";
import InsightsPrioritySection from "@/components/Insights/InsightsPrioritySection";
import UserProfile from "@/components/Insights/UserProfile";
import TabScreenBackground from "@/components/TabScreenBackground";

const InsightsScreen = () => {
  return (
    <ScrollView
      className="flex-1 bg-background py-4"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}
      contentInsetAdjustmentBehavior="automatic"
    >
      <TabScreenBackground />
      <UserProfile />
      <InsightStatsSection />
      <InsightsCategorySection />
      <InsightsPrioritySection />
      <ClearCompletedButton />
    </ScrollView>
  );
};

export default InsightsScreen;
