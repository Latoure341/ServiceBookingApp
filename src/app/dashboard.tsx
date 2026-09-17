import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import '../../global.css';

const categories = [
  { label: 'Plumber', icon: 'wrench-outline' },
  { label: 'Electric', icon: 'lightning-bolt-outline' },
  { label: 'Cleaner', icon: 'home-outline' },
  { label: 'Auto', icon: 'car-outline' },
] as const;

const providers = [
  { initials: 'MJ', name: 'Mike Johnson', trade: 'Master Plumber', price: 'R85/hr', rating: '4.9', distance: '0.8 mi' },
  { initials: 'SD', name: 'Sarah Davis', trade: 'Electrician', price: 'R65/hr', rating: '4.8', distance: '1.2 mi' },
] as const;

function ProviderRow({ initials, name, trade, price, rating, distance }: (typeof providers)[number]) {
  return (
    <View className="mb-2 flex-row items-center rounded-xl border border-emerald-100 bg-white px-2.5 py-2.5">
      <View className="h-9 w-9 items-center justify-center rounded-full bg-mint">
        <Text className="text-[10px] font-bold text-leaf">{initials}</Text>
        <View className="absolute -bottom-0.5 -right-0.5 h-3 w-3 items-center justify-center rounded-full border-2 border-white bg-leaf">
          <MaterialCommunityIcons name="check" size={7} color="white" />
        </View>
      </View>
      <View className="ml-2.5 flex-1">
        <Text className="text-[10px] font-bold text-ink">{name}</Text>
        <Text className="mt-0.5 text-[8px] text-slate-400">{trade}</Text>
        <View className="mt-1 flex-row items-center">
          <MaterialCommunityIcons name="star" size={9} color="#F5B82E" />
          <Text className="ml-1 text-[8px] font-semibold text-slate-500">{rating} (128)</Text>
          <Text className="mx-1 text-[8px] text-slate-300">•</Text>
          <Text className="text-[8px] text-slate-400">{distance}</Text>
        </View>
      </View>
      <View className="items-end">
        <Text className="text-[10px] font-bold text-leaf">{price}</Text>
        <Pressable className="mt-1 rounded-full bg-mint px-3 py-1 active:opacity-70">
          <Text className="text-[8px] font-bold text-leaf">Book</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function DashboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cloud" edges={['top']}>
      <StatusBar style="light" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="overflow-hidden rounded-b-[30px] bg-forest px-5 pb-5 pt-2">
          <View className="absolute -right-24 -top-28 h-64 w-64 rounded-full border border-white/10" />
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-[9px] text-emerald-100">Good morning,</Text>
              <Text className="mt-0.5 text-[13px] font-bold text-white">John Doe <Text className="text-[12px]">👋</Text></Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Pressable className="h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/15" accessibilityLabel="Notifications">
                <MaterialCommunityIcons name="bell-outline" size={16} color="white" />
              </Pressable>
              <View className="h-8 w-8 items-center justify-center rounded-full bg-leaf">
                <Text className="text-[10px] font-bold text-white">JD</Text>
              </View>
            </View>
          </View>
          <Pressable className="mt-3 flex-row items-center self-start rounded-full border border-white/20 bg-white/10 px-2.5 py-1.5">
            <MaterialCommunityIcons name="map-marker-outline" size={12} color="#D8F6E1" />
            <Text className="ml-1 text-[9px] text-white">San Francisco, CA</Text>
            <MaterialCommunityIcons name="chevron-down" size={12} color="#D8F6E1" style={{ marginLeft: 3 }} />
          </Pressable>
          <View className="mt-3 h-11 flex-row items-center rounded-xl bg-white px-3">
            <MaterialCommunityIcons name="magnify" size={18} color="#91A49A" />
            <TextInput className="ml-2 flex-1 text-xs text-ink" placeholder="What service do you need?" placeholderTextColor="#91A49A" />
          </View>
          <View className="mt-4 flex-row justify-between">
            {categories.map(({ label, icon }) => (
              <Pressable key={label} className="h-12 w-[23%] items-center justify-center rounded-xl bg-white/15 active:opacity-70">
                <MaterialCommunityIcons name={icon} size={17} color="white" />
                <Text className="mt-1 text-[8px] font-semibold text-white">{label}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="px-5 pb-6 pt-4">
          <View className="rounded-2xl bg-[#078B43] p-3.5">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <MaterialCommunityIcons name="wrench-outline" size={17} color="white" />
                </View>
                <View className="ml-2.5">
                  <Text className="text-[8px] font-semibold uppercase tracking-wide text-emerald-100">Upcoming</Text>
                  <Text className="mt-0.5 text-[11px] font-bold text-white">Plumbing Service</Text>
                </View>
              </View>
              <Text className="text-[13px] font-bold text-white">R650</Text>
            </View>
            <View className="mt-2 flex-row items-center">
              <MaterialCommunityIcons name="calendar-outline" size={11} color="#D8F6E1" />
              <Text className="ml-1 text-[8px] text-emerald-100">May 22, 10:00 AM</Text>
              <MaterialCommunityIcons name="account-outline" size={11} color="#D8F6E1" style={{ marginLeft: 10 }} />
              <Text className="ml-1 text-[8px] text-emerald-100">Mike J.</Text>
            </View>
            <View className="mt-3 flex-row gap-2">
              <Pressable className="h-8 flex-1 items-center justify-center rounded-full border border-white/40 active:opacity-70"><Text className="text-[9px] font-semibold text-white">Reschedule</Text></Pressable>
              <Pressable className="h-8 flex-1 items-center justify-center rounded-full bg-white active:opacity-70"><Text className="text-[9px] font-semibold text-leaf">View Details</Text></Pressable>
            </View>
          </View>

          <View className="mt-4 flex-row items-center justify-between">
            <Text className="text-[11px] font-bold text-ink">Categories</Text>
            <Text className="text-[9px] font-bold text-leaf">See all</Text>
          </View>
          <ScrollView className="mt-2" horizontal showsHorizontalScrollIndicator={false}>
            {['All', 'Plumbing', 'Electric', 'Cleaning'].map((label, index) => (
              <Pressable key={label} className={`mr-2 flex-row items-center rounded-full border px-3 py-1.5 ${index === 0 ? 'border-leaf bg-leaf' : 'border-emerald-100 bg-white'}`}>
                {index > 0 ? <MaterialCommunityIcons name="wrench-outline" size={10} color="#91A49A" /> : null}
                <Text className={`text-[8px] font-semibold ${index === 0 ? 'text-white' : 'text-slate-500'}`}>{label}</Text>
              </Pressable>
            ))}
          </ScrollView>

          <View className="mt-5 flex-row items-center justify-between">
            <Text className="text-[11px] font-bold text-ink">Nearby Providers</Text>
            <Text className="text-[9px] font-bold text-leaf">See all</Text>
          </View>
          <View className="mt-2">{providers.map((provider) => <ProviderRow key={provider.name} {...provider} />)}</View>
        </View>
      </ScrollView>
      <View className="h-16 flex-row items-center justify-around border-t border-emerald-100 bg-white px-4">
        {[
          ['home', 'Home'],
          ['calendar-blank-outline', 'Bookings'],
          ['heart-outline', 'Saved'],
          ['account-outline', 'Profile'],
        ].map(([icon, label], index) => (
          <Pressable key={label} className="items-center" onPress={() => index === 3 && router.push('/signup')}>
            <MaterialCommunityIcons name={icon as React.ComponentProps<typeof MaterialCommunityIcons>['name']} size={19} color={index === 0 ? '#149447' : '#9AAEA2'} />
            <Text className={`mt-1 text-[8px] font-semibold ${index === 0 ? 'text-leaf' : 'text-slate-400'}`}>{label}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}
