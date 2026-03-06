import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { formStyles, colors } from "../styles";

interface Props {
  onSuccess?: () => void;
}

const initialForm = {
  firstName: "",
  lastName: "",
  address: "",
  dob: "",
  email: "",
  contact: "",
  username: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

const initialErrors: Record<string, string> = {
  firstName: "",
  lastName: "",
  address: "",
  dob: "",
  email: "",
  contact: "",
  username: "",
  password: "",
  confirmPassword: "",
  terms: "",
};

export default function RegistrationForm({ onSuccess }: Props) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [focused, setFocused] = useState<string | null>(null);

  const set = (field: string, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const validate = () => {
    const next = { ...initialErrors };
    let valid = true;

    if (!form.firstName.trim()) {
      next.firstName = "First name is required.";
      valid = false;
    }
    if (!form.lastName.trim()) {
      next.lastName = "Last name is required.";
      valid = false;
    }
    if (form.address.trim().length < 10) {
      next.address = "Address must be at least 10 characters.";
      valid = false;
    }
    if (!form.dob.trim()) {
      next.dob = "Date of birth is required (YYYY-MM-DD).";
      valid = false;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!form.email.match(emailPattern)) {
      next.email = "Enter a valid email address.";
      valid = false;
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!form.contact.match(phonePattern)) {
      next.contact = "Enter a valid 10-digit contact number.";
      valid = false;
    }
    if (form.username.trim().length < 5) {
      next.username = "Username must be at least 5 characters.";
      valid = false;
    }
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!form.password.match(passwordPattern)) {
      next.password =
        "Password must be at least 8 characters and include letters and numbers.";
      valid = false;
    }
    if (form.confirmPassword !== form.password) {
      next.confirmPassword = "Passwords do not match.";
      valid = false;
    }
    if (!form.terms) {
      next.terms = "You must agree to the terms.";
      valid = false;
    }

    setErrors(next);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      Alert.alert("Success", "Registration successful!");
      setForm(initialForm);
      setErrors(initialErrors);
      onSuccess?.();
    }
  };

  const inputStyle = (field: string) => [
    formStyles.input,
    focused === field && formStyles.inputFocused,
  ];

  const ErrorBox = ({ msg }: { msg: string }) =>
    msg ? (
      <View style={formStyles.errorBox}>
        <Text style={formStyles.errorText}>{msg}</Text>
      </View>
    ) : null;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={formStyles.formContainer}>
        {/* Name Row */}
        <View style={formStyles.row}>
          <View style={[formStyles.formGroup, formStyles.rowItem]}>
            <Text style={formStyles.label}>First Name</Text>
            <TextInput
              style={inputStyle("firstName")}
              value={form.firstName}
              onChangeText={(v) => set("firstName", v)}
              onFocus={() => setFocused("firstName")}
              onBlur={() => setFocused(null)}
              placeholderTextColor={colors.whiteDim}
              placeholder="First name"
            />
            <ErrorBox msg={errors.firstName} />
          </View>

          <View style={[formStyles.formGroup, formStyles.rowItem]}>
            <Text style={formStyles.label}>Last Name</Text>
            <TextInput
              style={inputStyle("lastName")}
              value={form.lastName}
              onChangeText={(v) => set("lastName", v)}
              onFocus={() => setFocused("lastName")}
              onBlur={() => setFocused(null)}
              placeholderTextColor={colors.whiteDim}
              placeholder="Last name"
            />
            <ErrorBox msg={errors.lastName} />
          </View>
        </View>

        {/* Address */}
        <View style={formStyles.formGroup}>
          <Text style={formStyles.label}>Address</Text>
          <TextInput
            style={[inputStyle("address"), formStyles.textArea]}
            value={form.address}
            onChangeText={(v) => set("address", v)}
            onFocus={() => setFocused("address")}
            onBlur={() => setFocused(null)}
            multiline
            numberOfLines={3}
            placeholderTextColor={colors.whiteDim}
            placeholder="Your address"
          />
          <ErrorBox msg={errors.address} />
        </View>

        {/* Date of Birth */}
        <View style={formStyles.formGroup}>
          <Text style={formStyles.label}>Date of Birth (YYYY-MM-DD)</Text>
          <TextInput
            style={inputStyle("dob")}
            value={form.dob}
            onChangeText={(v) => set("dob", v)}
            onFocus={() => setFocused("dob")}
            onBlur={() => setFocused(null)}
            placeholderTextColor={colors.whiteDim}
            placeholder="e.g. 1995-04-21"
            keyboardType="numeric"
          />
          <ErrorBox msg={errors.dob} />
        </View>

        {/* Email & Contact Row */}
        <View style={formStyles.row}>
          <View style={[formStyles.formGroup, formStyles.rowItem]}>
            <Text style={formStyles.label}>Email</Text>
            <TextInput
              style={inputStyle("email")}
              value={form.email}
              onChangeText={(v) => set("email", v)}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={colors.whiteDim}
              placeholder="your@email.com"
            />
            <ErrorBox msg={errors.email} />
          </View>

          <View style={[formStyles.formGroup, formStyles.rowItem]}>
            <Text style={formStyles.label}>Contact No.</Text>
            <TextInput
              style={inputStyle("contact")}
              value={form.contact}
              onChangeText={(v) => set("contact", v)}
              onFocus={() => setFocused("contact")}
              onBlur={() => setFocused(null)}
              keyboardType="phone-pad"
              placeholderTextColor={colors.whiteDim}
              placeholder="10-digit number"
            />
            <ErrorBox msg={errors.contact} />
          </View>
        </View>

        {/* Username */}
        <View style={formStyles.formGroup}>
          <Text style={formStyles.label}>Username</Text>
          <TextInput
            style={inputStyle("username")}
            value={form.username}
            onChangeText={(v) => set("username", v)}
            onFocus={() => setFocused("username")}
            onBlur={() => setFocused(null)}
            autoCapitalize="none"
            placeholderTextColor={colors.whiteDim}
            placeholder="min. 5 characters"
          />
          <ErrorBox msg={errors.username} />
        </View>

        {/* Password */}
        <View style={formStyles.formGroup}>
          <Text style={formStyles.label}>Password</Text>
          <TextInput
            style={inputStyle("password")}
            value={form.password}
            onChangeText={(v) => set("password", v)}
            onFocus={() => setFocused("password")}
            onBlur={() => setFocused(null)}
            secureTextEntry
            placeholderTextColor={colors.whiteDim}
            placeholder="8+ chars, letters & numbers"
          />
          <ErrorBox msg={errors.password} />
        </View>

        {/* Confirm Password */}
        <View style={formStyles.formGroup}>
          <Text style={formStyles.label}>Confirm Password</Text>
          <TextInput
            style={inputStyle("confirmPassword")}
            value={form.confirmPassword}
            onChangeText={(v) => set("confirmPassword", v)}
            onFocus={() => setFocused("confirmPassword")}
            onBlur={() => setFocused(null)}
            secureTextEntry
            placeholderTextColor={colors.whiteDim}
            placeholder="Repeat password"
          />
          <ErrorBox msg={errors.confirmPassword} />
        </View>

        {/* Terms */}
        <View style={formStyles.termsGroup}>
          <Switch
            style={formStyles.termsCheckbox}
            value={form.terms}
            onValueChange={(v) => set("terms", v)}
            trackColor={{ false: colors.blackBorder, true: colors.orange }}
            thumbColor={colors.white}
          />
          <Text style={formStyles.termsLabel}>
            I agree to the Terms and Conditions
          </Text>
        </View>
        <ErrorBox msg={errors.terms} />

        {/* Submit */}
        <TouchableOpacity
          style={[
            formStyles.submitButton,
            !form.terms && formStyles.submitButtonDisabled,
          ]}
          onPress={handleSubmit}
          disabled={!form.terms}
          activeOpacity={0.8}
        >
          <Text style={formStyles.submitButtonText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}