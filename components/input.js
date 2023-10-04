import { StyleSheet, TextInput } from "react-native"

export default function Input({...props}){
    return (
        <TextInput style={styles.input} {...props} />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFF',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        borderRadius: 4,
        marginTop: 16,
      },
})