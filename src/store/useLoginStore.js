import { create } from "zustand";
import { persist } from "zustand/middleware";



const useLoginStore = create (
    persist(
        (set) => ({
            user:null,
            loggedIn:false,
            login: (user) => set({user, loggedIn:true}),
            logout: () => set({user:null, loggedIn:false})
        }),

        {
            name: "loginStore"
        }
    )
)





export default useLoginStore;