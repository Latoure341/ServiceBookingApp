import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import '../../global.css';

const floatingIcons = [
	{ icon: 'home-outline', className: 'left-12 top-20' },
	{ icon: 'lightning-bolt-outline', className: 'left-5 top-40' },
	{ icon: 'car-outline', className: 'left-5 top-64' },
	{ icon: 'scissors-cutting', className: 'right-6 top-52' },
	{ icon: 'spray-bottle', className: 'right-16 top-72' },
	{ icon: 'wrench-outline', className: 'right-8 top-16' },
] as const;

function HeroArtwork() {
	return (
		<View className="absolute inset-0 overflow-hidden">
			<View className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full border border-white/10" />
			<View className="absolute -bottom-14 -right-20 h-64 w-64 rounded-full border border-white/10" />
			<View className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
			<View className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
			<View className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/50 bg-white/15">
				<MaterialCommunityIcons name="map-marker-outline" size={30} color="white" />
			</View>
			{floatingIcons.map(({ icon, className }) => (
				<View key={icon} className={`absolute ${className} h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/15`}>
					<MaterialCommunityIcons name={icon} size={19} color="#E7F8EC" />
				</View>
			))}
		</View>
	);
}

export default function WelcomeScreen() {
	return (
		<SafeAreaView className="flex-1 bg-cloud" edges={['top', 'bottom']}>
			<StatusBar style="light" />
			<View className="h-[57%] overflow-hidden rounded-b-[48px] bg-forest">
				<HeroArtwork />
				<View className="z-10 flex-row items-center justify-end px-6 pt-3">
					<Pressable className="rounded-full border border-white/30 bg-white/15 px-4 py-2 active:opacity-70" onPress={() => router.push('/services')}>
						<Text className="text-xs font-semibold text-white">Skip</Text>
					</Pressable>
				</View>
			</View>

			<View className="flex-1 justify-between px-6 pb-5 pt-7">
				<View>
					<Text className="max-w-[280px] text-[30px] font-bold leading-9 text-ink">Your City,{'\n'}Your Experts</Text>
					<Text className="mt-3 max-w-[310px] text-[14px] leading-5 text-slate-500">
						Connect with verified local service professionals right in your neighborhood.
					</Text>
				</View>

				<View>
					<View className="mb-4 flex-row items-center gap-1.5">
						<View className="h-1 w-4 rounded-full bg-leaf" />
						<View className="h-1 w-1 rounded-full bg-emerald-200" />
						<View className="h-1 w-1 rounded-full bg-emerald-200" />
					</View>
					<Pressable className="h-14 flex-row items-center justify-center rounded-2xl bg-leaf shadow-lg shadow-emerald-900/20 active:opacity-80" onPress={() => router.push('/services')}>
						<Text className="text-sm font-bold text-white">Continue</Text>
						<MaterialCommunityIcons name="arrow-right" size={18} color="white" style={{ marginLeft: 8 }} />
					</Pressable>
					<Text className="mt-3 text-center text-xs text-slate-400">
						Already have an account? <Text className="font-bold text-leaf">Sign In</Text>
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}
