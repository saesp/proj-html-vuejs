import { reactive } from 'vue'

export const store = reactive({
    navList: [
        {
            name: "Home",
            status: "active"
        },
        {
            name: "Recipes",
            status: "inactive"
        },
        {
            name: "Places",
            status: "inactive"
        },
        {
            name: "Blog",
            status: "inactive"
        },
        {
            name: "About",
            status: "inactive"
        },
        {
            name: "Contact",
            status: "inactive"
        }
    ],
})