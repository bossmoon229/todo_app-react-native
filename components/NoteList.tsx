import React from "react";
import { FlatList, Text, View } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onEdit }: any) => {
  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <NoteItem note={item} onDelete={onDelete} onEdit={onEdit} />}
      />
    </View>
  );
};

export default NoteList;

// npx expo install react-native-appwrite react-native-url-polyfill
