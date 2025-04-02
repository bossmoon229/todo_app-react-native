import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

import NoteList from "@/components/NoteList";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "Note one" },
    { id: 2, text: "Note two" },
    { id: 3, text: "Note three" },
  ]);

  const [modal, setModal] = useState(false);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim() === "") return;

    setNotes((prev) => [...prev, { id: Date.now(), text: newNote }]);

    setNewNote("");
    setModal(false);
  };

  return (
    <View style={styles.container}>
      {/* note list */}
      <NoteList notes={notes}/>

      <TouchableOpacity style={styles.addButton} onPress={() => setModal(true)}>
        <Text style={styles.addButtonText}>Add note</Text>
      </TouchableOpacity>

      <Modal
        visible={modal}
        animationType="slide"
        transparent
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add new note</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter note"
              placeholderTextColor="#aaa"
              value={newNote}
              onChangeText={setNewNote}
            />
            <View style={styles.modalButton}>
              <TouchableOpacity style={styles.saveButton} onPress={addNote}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setModal(false);
                  setNewNote("");
                }}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NoteScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  
  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    // flex: 1,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
  },
  saveButtonText: {
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    // flex: 1,
    alignItems: "center",
  },
});
