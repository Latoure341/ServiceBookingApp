import { createContext, useContext, useState } from 'react';
import { supabase } from '../lib/superbase/client';

export interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    profileImage?: string;
    onboardingCompleted?: boolean;
}

interface AuthContextType {
    user: User | null;
    signUp: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [ user, setUser ] = useState<User | null>(null);

    const login = async (email: string, password: string) => {

    }
    const signup = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });
        if(error) throw error;
        if(data.user) {
            console.log(user);
        }
    }
    
    return (
        <AuthContext.Provider value={{ user, signUp: signup }}> { children } </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}