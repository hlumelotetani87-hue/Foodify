import { FlatList, Text, View } from "react-native";
import { ListHeroCard } from "@/components/lists/ListHeroCard";
import { useGroceryStore } from "@/store/grocery-store";
import PendingItemCard from "@/components/lists/PendingItemCard";
import CompletedItems from "@/components/lists/CompletedItems";
import TabScreenBackground from "@/components/TabScreenBackground";

export default function ListScreen() {
  const { items } = useGroceryStore();
  const pendingItems = items.filter((item) => !item.purchased);

  return (
    <FlatList
      className="flex-1 bg-background"
      data={pendingItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PendingItemCard item={item} />}
      contentContainerStyle={{ padding: 20, gap: 14 }}
      contentInsetAdjustmentBehavior="automatic"
      ListHeaderComponent={
        <View style={{ gap: 14 }}>
          <TabScreenBackground />
          <ListHeroCard />
          <View className="flex-row items-center justify-between px-1">
            <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
              Shopping Items
            </Text>
            <Text className="text-sm text-muted-foreground">
              {pendingItems.length} active
            </Text>
          </View>
        </View>
      }
      ListFooterComponent={<CompletedItems />}
    />
  );
}
