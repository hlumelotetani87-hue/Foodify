import { View, Text, Pressable } from 'react-native'
import { useGroceryStore } from '@/store/grocery-store';
import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react'

const CompletedItems = () => {
    const { removeItem, togglePurchased, items } = useGroceryStore();
    const completedItems = items.filter((items) => items.purchased);

    if(!completedItems.length) return null;

  return (
    <View className="mt-3 rounded-3xl border border-border bg-card p-4">
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-secondary-foreground">Completed Items
        </Text>

        {completedItems.map((item) => (
            <View key={item.id} 
            className="mt-3 flex-row items-center justify-between rounded-2xl border border-border bg-card px-4 py-2">
                <View className="flex-row items-center gap-2">
                    <Pressable 
                    className="h-6 w-6 items-center justify-center rounded-full bg-primary">
                        <FontAwesome6 name="check" size={12} color="#030303"
                        onPress={() => {togglePurchased(item.id)}} />
                    </Pressable>
                    <Text className="text-base text-muted-foreground line-through">{item.name}</Text>
                    <Pressable className="h-8w-8 items-center justify-center rounded-xl bg-destructive" 
                    onPress={() => {removeItem(item.id)}}>
                        <FontAwesome6 name="trash" size={14} color="#d45f58" />
                    </Pressable>
                </View>
            </View>
        ))}
    </View>
  )
}

export default CompletedItems