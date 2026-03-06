import React from "react";
import {
  Modal as RNModal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { modalStyles } from "../styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <RNModal
      visible={isOpen}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={modalStyles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          style={modalStyles.content}
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={modalStyles.header}>
            <Text style={modalStyles.headerTitle}>
              Complete Your Registration
            </Text>
            <TouchableOpacity style={modalStyles.closeButton} onPress={onClose}>
              <Text style={modalStyles.closeText}>×</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            style={modalStyles.body}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
    </RNModal>
  );
}