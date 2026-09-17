import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import '../../global.css';

const services = [
  { label: 'Plumbing', icon: 'wrench-outline' },
  { label: 'Electrical', icon: 'lightning-bolt-outline' },
  { label: 'Cleaning', icon: 'home-outline' },
  { label: 'Auto', icon: 'car-outline' },
  { label: 'Beauty', icon: 'content-cut' },
  { label: 'IT Help', icon: 'laptop' },
] as const;

export default function ServicesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cloud" edges={['top', 'bottom']}>
      <StatusBar style="light" />
      <View className="h-[57%] overflow-hidden rounded-b-[48px] bg-[#087A3D]">
        <View className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full border border-white/10" />
        <View className="absolute -right-24 top-16 h-72 w-72 rounded-full border border-white/10" />
        <View className="absolute inset-0 opacity-20">
          <View className="absolute left-8 top-24 h-1 w-1 rounded-full bg-white" />
          <View className="absolute left-24 top-40 h-1 w-1 rounded-full bg-white" />
          <View className="absolute right-16 top-28 h-1 w-1 rounded-full bg-white" />
          <View className="absolute right-32 top-52 h-1 w-1 rounded-full bg-white" />
        </View>
        <View className="z-10 flex-row items-center justify-between px-6 pt-3">
          <Pressable className="h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 active:opacity-70" onPress={() => router.back()} accessibilityLabel="Go back">
            <MaterialCommunityIcons name="arrow-left" size={18} color="white" />
          </Pressable>
          <Pressable className="rounded-full border border-white/30 bg-white/15 px-4 py-2 active:opacity-70" onPress={() => router.replace('/services')}>
            <Text className="text-xs font-semibold text-white">Skip</Text>
          </Pressable>
        </View>
        <View className="mt-12 flex-row flex-wrap justify-center gap-2.5 px-6">
          {services.map(({ label, icon }) => (
            <View key={label} className="h-[73px] w-[29%] min-w-[90px] items-center justify-center rounded-2xl border border-white/25 bg-white/15">
              <MaterialCommunityIcons name={icon} size={21} color="white" />
              <Text className="mt-2 text-[10px] font-semibold text-white">{label}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className="flex-1 justify-between px-6 pb-5 pt-7">
        <View>
          <Text className="max-w-[300px] text-[30px] font-bold leading-9 text-ink">100+ Services,{'\n'}One Tap Away</Text>
          <Text className="mt-3 max-w-[310px] text-[14px] leading-5 text-slate-500">
            From plumbing to beauty, find and book any local service in seconds.
          </Text>
        </View>
        <View>
          <View className="mb-4 flex-row items-center gap-1.5">
            <View className="h-1 w-1 rounded-full bg-emerald-200" />
            <View className="h-1 w-4 rounded-full bg-leaf" />
            <View className="h-1 w-1 rounded-full bg-emerald-200" />
          </View>
          <View className="flex-row gap-3">
            <Pressable className="h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-white active:opacity-70" onPress={() => router.back()} accessibilityLabel="Previous screen">
              <MaterialCommunityIcons name="chevron-left" size={22} color="#71857B" />
            </Pressable>
            <Pressable className="h-14 flex-1 flex-row items-center justify-center rounded-2xl bg-leaf shadow-lg shadow-emerald-900/20 active:opacity-80" onPress={() => router.push('/confidence')}>
              <Text className="text-sm font-bold text-white">Continue</Text>
              <MaterialCommunityIcons name="arrow-right" size={18} color="white" style={{ marginLeft: 8 }} />
            </Pressable>
          </View>
          <Text className="mt-3 text-center text-xs text-slate-400">
            Already have an account? <Text className="font-bold text-leaf">Sign In</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
