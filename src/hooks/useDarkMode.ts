import { useColorScheme } from 'react-native';

export default function useDarkMode() {
    return useColorScheme() === 'dark';
}