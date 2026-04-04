
import {  View ,Text, FlatList } from "react-native";
import { ListHeroCard } from "@/components/lists/ListHeroCard";
import { useGroceryStore } from "@/store/grocery-store";
import PendingItemCard from "@/components/lists/PendingItemCard";
import CompletedItems from "@/components/lists/CompletedItems";
import TabScreenBackground from "@/components/TabScreenBackground";


export default function ListScreen() {
  const { items } = useGroceryStore();
  const pendingItems = items.filter((items) => !items.purchased);

  return (
    

      <FlatList
        className="flex-1 bg-background"
        data={pendingItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PendingItemCard item={item} />}
        contentContainerStyle={{ padding: 20, gap: 14 }}
        contentInsetAdjustmentBehavior="automatic"
        ListHeaderComponent={
          <View style={{ gap: 14, paddingTop: 20 }}>
            <TabScreenBackground />
            <ListHeroCard />
            <View className="text-row items-center justify-between px-1">
              <Text className="text-sm font-semibold uppercase tracking=[1px] text-muted-foreground">
                Shopping Items
              </Text>
              <Text className="text-sm text-muted-foreground"></Text>
            </View>
          </View>
        }
        ListFooterComponent={<CompletedItems />}
        
      />
  );
}

//Before I using FlatList, I was using ScrollView to render the list of items. However, I noticed that when the list grows longer, it can lead to performance issues and increased memory usage. This is because ScrollView renders all its child components at once, which can be inefficient for large lists.

/*
<ScrollView
      className="flex bg-background py-4"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}
    >
      <TabScreenBackground />

      <ListHeroCard />

      <View className="flex-row items-center justify-between px-1">
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
          Shopping items
        </Text>
        <Text className="text-sm text-muted-foreground">
          {pendingItems.length} active
        </Text>
      </View>

      {pendingItems.map((item) => (
        <PendingItemCard key={item.id } item={item} />
      ))}

      <CompletedItems />
    </ScrollView>


*/