// 1️⃣ Import create from zustand — this gives us access to global state creation
import { create } from "zustand";

// 2️⃣ Import middleware (optional but pro move) — this gives us devtools support
import { devtools, persist } from "zustand/middleware";

// 3️⃣ Define the User type — a simple object with a first and last name
export type User = {
  firstname: string;
  lastname: string;
};

// 4️⃣ Define the store shape: user data + functions to update the state
type UserDataStore = {
  user: User;
  setFirstname: (firstname: string) => void;
  setLastname: (lastname: string) => void;
  setUser: (user: User) => void;
};

// 5️⃣ Create the Zustand store using `create` and wrap it with `devtools` middleware
export const useUserDataStore = create<UserDataStore>()(
  devtools(
    persist(
      (set) => ({
        // 6️⃣ Initial state — user object with empty strings
        user: {
          firstname: "",
          lastname: "",
        },

        // 7️⃣ Update only the firstname, keeping other values the same
        setFirstname: (firstname) =>
          set(
            (state) => ({
              user: {
                ...state.user,
                firstname, // overwrite firstname only
              },
            }),
            false,
            "user/setFirstname" // action name for devtools
          ),

        // 8️⃣ Update only the lastname similarly
        setLastname: (lastname) =>
          set(
            (state) => ({
              user: {
                ...state.user,
                lastname,
              },
            }),
            false,
            "user/setLastname"
          ),

        // 9️⃣ Replace the entire user object at once
        setUser: (user) => set(() => ({ user }), false, "user/setUser"),
      }),
      {
        name: "UserStore", // display name in Redux Devtools
      }
    )
  )
);
