import { defineStore } from "pinia";
import { useToggle } from "@vueuse/core";

export const useDialogStore = defineStore("dialogStore", () => {
  const [isUrlDialogOpen, toggleUrlDialog] = useToggle(false);
  const [isWMSBaseLayerDialogOpen, toggleWMSBaseLayerDialog] = useToggle(false);
  const [isXYZBaseLayerDialogOpen, toggleXYZBaseLayerDialog] = useToggle(false);
  const [isAssociationDialogOpen, toggleAssociationDialog] = useToggle(false);
  const [isCreateMSDLDialogOpen, toggleCreateMSDLDialog] = useToggle(false);
  const [isCreateForceSideDialogOpen, toggleCreateForceSideDialog] = useToggle(false);
  const [isCreateFederateDialogOpen, toggleCreateFederateDialog] = useToggle(false);
  return {
    isUrlDialogOpen,
    toggleUrlDialog,
    isWMSBaseLayerDialogOpen,
    toggleWMSBaseLayerDialog,
    isXYZBaseLayerDialogOpen,
    toggleXYZBaseLayerDialog,
    isAssociationDialogOpen,
    toggleAssociationDialog,
    isCreateMSDLDialogOpen,
    toggleCreateMSDLDialog,
    isCreateForceSideDialogOpen,
    toggleCreateForceSideDialog,
    isCreateFederateDialogOpen,
    toggleCreateFederateDialog,
  };
});
