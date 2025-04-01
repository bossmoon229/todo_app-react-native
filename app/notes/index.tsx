import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "Note one" },
    { id: 2, text: "Note two" },
    { id: 3, text: "Note three" },
  ]);

  return (
    <View style={styles.container}>
        <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>(
            <View style={styles.noteItem}>
                <Text>{item.text}</Text>
            </View>
        ) }
        />
      <Text>Notes</Text>
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
});
