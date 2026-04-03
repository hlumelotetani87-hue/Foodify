import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import TabScreenBackground from '@/components/TabScreenBackground'
import UserProfile from '@/components/Insights/UserProfile'
import InsightStatsSection from '@/components/Insights/InsightStatsSection'
import InsightsCategorySection from '@/components/Insights/InsightsCategorySection'
import InsightsPrioritySection from '@/components/Insights/InsightsPrioritySection'
import ClearCompletedButton from '@/components/Insights/ClearCompletedButton'

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
}

export default InsightsScreen