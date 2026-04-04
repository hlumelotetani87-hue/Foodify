import React from "react";
import { Pressable, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useGroceryStore } from "@/store/grocery-store";

const CompletedItems = () => {
  const { removeItem, togglePurchased, items } = useGroceryStore();
  const completedItems = items.filter((item) => item.purchased);

  if (!completedItems.length) return null;

  return (
    <View className="mt-3 rounded-3xl border border-border bg-card p-4">
      <Text className="text-sm font-semibold uppercase tracking-[1px] text-secondary-foreground">
        Completed Items
      </Text>

      {completedItems.map((item) => (
        <View
          key={item.id}
          className="mt-3 flex-row items-center justify-between rounded-2xl border border-border bg-card px-4 py-2"
        >
          <View className="flex-row items-center gap-2">
            <Pressable
              className="h-6 w-6 items-center justify-center rounded-full bg-primary"
              onPress={() => togglePurchased(item.id)}
            >
              <FontAwesome6 name="check" size={12} color="#030303" />
            </Pressable>
            <Text className="text-base text-muted-foreground line-through">
              {item.name}
            </Text>
          </View>

          <Pressable
            className="h-8 w-8 items-center justify-center rounded-xl bg-destructive"
            onPress={() => removeItem(item.id)}
          >
            <FontAwesome6 name="trash" size={14} color="#d45f58" />
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default CompletedItems;
