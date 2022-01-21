import { useContext } from "react";
import EditorContext from "@/features/my_models_editor/context";

export default function useEditorContext() {
  return useContext(EditorContext);
}