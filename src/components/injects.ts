import type { MilitaryScenario } from "@orbat-mapper/msdllib";
import type { InjectionKey, ShallowRef } from "vue";
import type { SidcModalPromise } from "@/composables/modals";

export const activeScenarioKey = Symbol("Active scenario") as InjectionKey<
  ShallowRef<MilitaryScenario | undefined>
>;

export const sidcModalKey = Symbol("SIDC modal") as InjectionKey<{
  getModalSidc: SidcModalPromise;
}>;