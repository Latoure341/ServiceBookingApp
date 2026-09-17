import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import '../../global.css';

const providers = [
  { initials: 'MJ', name: 'Mike J.', trade: 'Plumbing', rating: 5 },
  { initials: 'SD', name: 'Sarah D.', trade: 'Electrical', rating: 5 },
  { initials: 'TK', name: 'Tom K.', trade: 'Painting', rating: 5 },
] as const;

function ProviderCard({ initials, name, trade, rating }: (typeof providers)[number]) {
  return (
    <View className="mb-2 flex-row items-center rounded-xl border border-white/20 bg-white/15 px-2.5 py-2">
      <View className="h-8 w-8 items-center justify-center rounded-full bg-white/25">
        <Text className="text-[9px] font-bold text-white">{initials}</Text>
      </View>
      <View className="ml-2.5 flex-1">
        <Text className="text-[10px] font-bold text-white">{name}</Text>
        <Text className="text-[8px] text-emerald-100">{trade}</Text>
      </View>
      <View className="flex-row items-center">
        {Array.from({ length: rating }).map((_, index) => (
          <MaterialCommunityIcons key={index} name="star" size={10} color="#FFD34E" />
        ))}
        <MaterialCommunityIcons name="check-circle-outline" size={12} color="#B9F0CA" style={{ marginLeft: 6 }} />
      </View>
    </View>
  );
}

export default function ConfidenceScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cloud" edges={['top', 'bottom']}>
      <StatusBar style="light" />
      <View className="h-[57%] overflow-hidden rounded-b-[48px] bg-forest">
        <View className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full border border-white/10" />
        <View className="absolute -right-20 top-10 h-72 w-72 rounded-full border border-white/10" />
        <View className="z-10 flex-row items-center justify-between px-6 pt-3">
          <Pressable className="h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 active:opacity-70" onPress={() => router.back()} accessibilityLabel="Go back">
            <MaterialCommunityIcons name="arrow-left" size={18} color="white" />
          </Pressable>
          <Pressable className="rounded-full border border-white/30 bg-white/15 px-4 py-2 active:opacity-70" onPress={() => router.push('/signup')}>
            <Text className="text-xs font-semibold text-white">Skip</Text>
          </Pressable>
        </View>
        <View className="mt-3 items-center">
          <View className="h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/15">
            <MaterialCommunityIcons name="shield-check-outline" size={25} color="white" />
          </View>
        </View>
        <View className="mt-3 px-6">
          {providers.map((provider) => <ProviderCard key={provider.name} {...provider} />)}
        </View>
      </View>

      <View className="flex-1 justify-between px-6 pb-5 pt-7">
        <View>
          <Text className="max-w-[280px] text-[30px] font-bold leading-9 text-ink">Book with{ '\n' }Confidence</Text>
          <Text className="mt-3 max-w-[310px] text-[14px] leading-5 text-slate-500">
            Every provider is background-checked, insured, and top-rated by real customers.
          </Text>
        </View>
        <View>
          <View className="mb-4 flex-row items-center gap-1.5">
            <View className="h-1 w-1 rounded-full bg-emerald-200" />
            <View className="h-1 w-1 rounded-full bg-emerald-200" />
            <View className="h-1 w-4 rounded-full bg-leaf" />
          </View>
          <View className="flex-row gap-3">
            <Pressable className="h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-white active:opacity-70" onPress={() => router.back()} accessibilityLabel="Previous screen">
              <MaterialCommunityIcons name="chevron-left" size={22} color="#71857B" />
            </Pressable>
            <Pressable className="h-14 flex-1 flex-row items-center justify-center rounded-2xl bg-leaf shadow-lg shadow-emerald-900/20 active:opacity-80" onPress={() => router.push('/signup')}>
              <Text className="text-sm font-bold text-white">Get Started</Text>
              <MaterialCommunityIcons name="arrow-right" size={18} color="white" style={{ marginLeft: 8 }} />
            </Pressable>
          </View>
          <Text className="mt-3 text-center text-xs text-slate-400">
            Already have an account? <Text className="font-bold text-leaf" onPress={() => router.push('/signin')}>Sign In</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
