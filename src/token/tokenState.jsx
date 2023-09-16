/* eslint-disable import/prefer-default-export */
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "HHtoken",
  storage: localStorage,
});

export const tokenState = atom({
  key: "tokenState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
