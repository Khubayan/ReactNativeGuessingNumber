import { Text, View, StyleSheet } from 'react-native';
import { PrimaryButtonProps } from '../types/PrimaryButtonPropsTypes'

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    inputContainer: {
        flex: 1,
        marginTop: 100,
        padding: 16
    }
})

export default PrimaryButton;
