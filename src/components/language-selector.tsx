import React, { useState } from "react";
import { StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export type Language =
  | "typescript"
  | "javascript"
  | "css"
  | "dockerfile"
  | "markdown"
  | "python"
  | "sql"
  | "json"
  | "cpp"
  | "csharp";

interface LanguageSelectorProps {
  onChange: (language: Language) => void;
}

export function LanguageSelector({ onChange }: LanguageSelectorProps) {

  const [language, setLanguage] = useState<Language>("typescript");

  const handleChange = (value: string) => {
    const selectedLanguage = value as Language;
    setLanguage(selectedLanguage);
    onChange(selectedLanguage);
  };

  return (
    <RNPickerSelect
      onValueChange={handleChange}
      value={language}
      items={[
        { label: "TypeScript", value: "typescript" },
        { label: "JavaScript", value: "javascript" },
        { label: "CSS", value: "css" },
        { label: "DockerFile", value: "dockerfile" },
        { label: "Markdown", value: "markdown" },
        { label: "Python", value: "python" },
        { label: "SQL", value: "sql" },
        { label: "JSON", value: "json" },
        { label: "C++", value: "cpp" },
        { label: "C#", value: "csharp" },
      ]}
      style={pickerSelectStyles}
    />
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 12,
    paddingVertical: 8,
    paddingRight: 8,
    marginTop: 6,
    marginHorizontal: 12,
    borderRadius: 12,
    maxWidth: 150,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: "#164e63",
    opacity: 0.7,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30
  }
});
