import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import '../../global.css';

type FieldProps = {
  label: string;
  placeholder: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  value: string;
  onChangeText: (value: string) => void;
  secureTextEntry?: boolean;
  onToggleVisibility?: () => void;
  visible?: boolean;
};

function Field({ label, placeholder, icon, value, onChangeText, secureTextEntry, onToggleVisibility, visible }: FieldProps) {
  return (
    <View className="mb-3">
      <Text className="mb-1.5 text-[9px] font-bold uppercase tracking-wide text-ink">{label}</Text>
      <View className="h-12 flex-row items-center rounded-xl border border-emerald-100 bg-white px-3">
        <MaterialCommunityIcons name={icon} size={16} color="#55B979" />
        <TextInput
          className="ml-2 flex-1 text-xs text-ink"
          placeholder={placeholder}
          placeholderTextColor="#A2B3AA"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !visible}
          autoCapitalize="none"
        />
        {onToggleVisibility ? (
          <Pressable onPress={onToggleVisibility} accessibilityLabel={visible ? 'Hide password' : 'Show password'}>
            <MaterialCommunityIcons name={visible ? 'eye-outline' : 'eye-off-outline'} size={16} color="#55B979" />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const canCreateAccount = Boolean(name && email && password && password === confirmation && acceptedTerms);

  return (
    <SafeAreaView className="flex-1 bg-cloud" edges={['top', 'bottom']}>
      <StatusBar style="light" />
      <View className="h-[22%] overflow-hidden rounded-b-[42px] bg-forest px-6 pt-3">
        <View className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full border border-white/10" />
        <Pressable className="h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 active:opacity-70" onPress={() => router.back()} accessibilityLabel="Go back">
          <MaterialCommunityIcons name="arrow-left" size={18} color="white" />
        </Pressable>
        <Text className="mt-4 text-[20px] font-bold text-white">Create Account</Text>
        <Text className="mt-1 text-[10px] text-emerald-100">Join LocalServe - your city, simplified.</Text>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 18, paddingBottom: 24 }} keyboardShouldPersistTaps="handled">
        <Field label="Full name" placeholder="John Doe" icon="account-outline" value={name} onChangeText={setName} />
        <Field label="Email address" placeholder="you@example.com" icon="email-outline" value={email} onChangeText={setEmail} />
        <Field label="Phone (optional)" placeholder="+1 (555) 000-0000" icon="phone-outline" value={phone} onChangeText={setPhone} />
        <Field label="Password" placeholder="Create a strong password" icon="lock-outline" value={password} onChangeText={setPassword} secureTextEntry onToggleVisibility={() => setShowPassword((current) => !current)} visible={showPassword} />
        <Field label="Confirm password" placeholder="Repeat your password" icon="lock-outline" value={confirmation} onChangeText={setConfirmation} secureTextEntry onToggleVisibility={() => setShowConfirmation((current) => !current)} visible={showConfirmation} />

        <Pressable className="mt-1 flex-row items-start" onPress={() => setAcceptedTerms((current) => !current)} accessibilityRole="checkbox" accessibilityState={{ checked: acceptedTerms }}>
          <View className={`mr-2 h-4 w-4 items-center justify-center rounded border ${acceptedTerms ? 'border-leaf bg-leaf' : 'border-emerald-200 bg-white'}`}>
            {acceptedTerms ? <MaterialCommunityIcons name="check" size={12} color="white" /> : null}
          </View>
          <Text className="flex-1 text-[9px] leading-4 text-slate-500">
            I agree to the <Text className="font-bold text-leaf">Terms of Service</Text> and <Text className="font-bold text-leaf">Privacy Policy</Text>
          </Text>
        </Pressable>

        <Pressable className={`mt-4 h-12 flex-row items-center justify-center rounded-xl ${canCreateAccount ? 'bg-leaf active:opacity-80' : 'bg-[#9BCDB0]'}`} disabled={!canCreateAccount} onPress={() => router.replace('/dashboard')}>
          <Text className="text-xs font-bold text-white">Create Account</Text>
          <MaterialCommunityIcons name="arrow-right" size={16} color="white" style={{ marginLeft: 8 }} />
        </Pressable>
        <Text className="mt-4 text-center text-[10px] text-slate-400">
          Already have an account? <Text className="font-bold text-leaf" onPress={() => router.push('/signin')}>Sign In</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
