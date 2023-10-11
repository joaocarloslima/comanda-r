import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function Button({children, ...props}) {
    return (
        <TouchableOpacity {...props}>
            <Text style={styles.button}> {children} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#121A2C',
        color: '#FFBA26',
        paddingVertical: 8,
        paddingHorizontal: 48,
        borderRadius: 4,
        marginTop: 16,
        marginBottom: 16
      }
})