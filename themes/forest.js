import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    position: 'absolute',
    backgroundColor: '#062925',
    height: 1,
    bottom: (gradientHeight - i),
    right: 0,
    left: 0,
    zIndex: 2,
    opacity: (1 / gradientHeight) * (i + 1)
})
