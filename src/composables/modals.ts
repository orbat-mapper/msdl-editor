import { useConfirmDialog } from "@vueuse/core";
import { computed, ref } from "vue";

export interface ModalSidcOptions {
  title: string;
  initialTab: number;
}

export interface ModalSidcReturn {
  sidc: string;
}

// Handle the state of the modal
export function useSidcModal() {
  const { isRevealed, reveal, confirm, cancel } = useConfirmDialog<string>();
  const initialSidcModalValue = ref("SFGPU----------");
  const sidcModalTitle = ref("Select symbol");
  const initialTab = ref(0);

  const getModalSidc = async (
    initialValue: string,
    options: Partial<ModalSidcOptions> = {},
  ): Promise<ModalSidcReturn | undefined> => {
    initialSidcModalValue.value = initialValue;
    sidcModalTitle.value = options.title || "Symbol picker";
    initialTab.value = options.initialTab ?? 0;
    const { data, isCanceled } = await reveal();
    if (!isCanceled) {
      return data;
    }
  };
  const showSidcModal = computed({
    get() {
      return isRevealed.value;
    },
    set(v: boolean) {},
  });
  return {
    isRevealed,
    showSidcModal,
    revealSidcModal: reveal,
    getModalSidc,
    confirmSidcModal: confirm,
    cancelSidcModal: cancel,
    initialSidcModalValue,
    sidcModalTitle,
    initialTab,
  };
}

export type SidcModalPromise = ReturnType<typeof useSidcModal>["getModalSidc"];