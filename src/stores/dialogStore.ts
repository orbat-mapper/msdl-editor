import { defineStore } from "pinia";
import { useToggle } from "@vueuse/core";

export const useDialogStore = defineStore("dialogStore", () => {
  const [isUrlDialogOpen, toggleUrlDialog] = useToggle(false);
  const [isAssociationDialogOpen, toggleAssociationDialog] = useToggle(false);
  const [isCreateMSDLDialogOpen, toggleCreateMSDLDialog] = useToggle(false);
  const [isCreateForceSideDialogOpen, toggleCreateForceSideDialog] = useToggle(false);
  return {
    isUrlDialogOpen,
    toggleUrlDialog,
    isAssociationDialogOpen,
    toggleAssociationDialog,
    isCreateMSDLDialogOpen,
    toggleCreateMSDLDialog,
    isCreateForceSideDialogOpen,
    toggleCreateForceSideDialog,
  };
});
