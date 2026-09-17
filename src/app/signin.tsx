import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import '../../global.css';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-cloud" edges={['top', 'bottom']}>
      <StatusBar style="light" />
      <View className="h-[22%] overflow-hidden rounded-b-[42px] bg-forest px-6 pt-3">
        <View className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full border border-white/10" />
        <Pressable className="h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 active:opacity-70" onPress={() => router.back()} accessibilityLabel="Go back">
          <MaterialCommunityIcons name="arrow-left" size={18} color="white" />
        </Pressable>
        <Text className="mt-4 text-[20px] font-bold text-white">Welcome back!</Text>
        <Text className="mt-1 text-[10px] text-emerald-100">Sign in to LocalServe to continue.</Text>
      </View>

      <View className="flex-1 px-6 pt-5">
        <Text className="mb-1.5 text-[9px] font-bold uppercase tracking-wide text-ink">Email</Text>
        <View className="mb-3 h-12 flex-row items-center rounded-xl border border-emerald-100 bg-white px-3">
          <MaterialCommunityIcons name="email-outline" size={16} color="#55B979" />
          <TextInput className="ml-2 flex-1 text-xs text-ink" placeholder="you@example.com" placeholderTextColor="#A2B3AA" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
        </View>

        <View className="mb-1.5 flex-row items-center justify-between">
          <Text className="text-[9px] font-bold uppercase tracking-wide text-ink">Password</Text>
          <Pressable accessibilityRole="button"><Text className="text-[9px] font-bold text-leaf">Forgot?</Text></Pressable>
        </View>
        <View className="h-12 flex-row items-center rounded-xl border border-emerald-100 bg-white px-3">
          <MaterialCommunityIcons name="lock-outline" size={16} color="#55B979" />
          <TextInput className="ml-2 flex-1 text-xs text-ink" placeholder="Enter your password" placeholderTextColor="#A2B3AA" value={password} onChangeText={setPassword} secureTextEntry={!showPassword} />
          <Pressable onPress={() => setShowPassword((current) => !current)} accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}>
            <MaterialCommunityIcons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={16} color="#55B979" />
          </Pressable>
        </View>

        <Pressable className="mt-3 h-12 flex-row items-center justify-center rounded-xl bg-leaf shadow-lg shadow-emerald-900/20 active:opacity-80" onPress={() => router.replace('/dashboard')}>
          <Text className="text-xs font-bold text-white">Sign In</Text>
          <MaterialCommunityIcons name="arrow-right" size={16} color="white" style={{ marginLeft: 8 }} />
        </Pressable>

        <View className="my-4 flex-row items-center">
          <View className="h-px flex-1 bg-emerald-100" />
          <Text className="mx-2 text-[9px] font-semibold text-leaf">or continue with</Text>
          <View className="h-px flex-1 bg-emerald-100" />
        </View>
        <View className="flex-row gap-2">
          <Pressable className="h-11 flex-1 flex-row items-center justify-center rounded-xl border border-emerald-100 bg-white active:opacity-70">
            <Text className="text-sm font-bold text-[#4285F4]">G</Text>
            <Text className="ml-2 text-[10px] font-semibold text-ink">Google</Text>
          </Pressable>
          <Pressable className="h-11 flex-1 flex-row items-center justify-center rounded-xl border border-emerald-100 bg-white active:opacity-70">
            <MaterialCommunityIcons name="github" size={15} color="#123326" />
            <Text className="ml-2 text-[10px] font-semibold text-ink">GitHub</Text>
          </Pressable>
        </View>
        <Text className="mt-4 text-center text-[10px] text-slate-400">
          Don't have an account? <Text className="font-bold text-leaf" onPress={() => router.push('/signup')}>Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
