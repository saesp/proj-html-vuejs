<script>
import { store } from '../store.js'

export default {
    name: "AppHeader",

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <header>
        <section class="sect-1">
            <ul>
                <li>Download App</li>
                <li id="ios">iOS</li>
                <li>Advetise with us</li>
            </ul>

            <ul>
                <li><i class="fa-brands fa-facebook-f"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-youtube"></i></li>
            </ul>
        </section>

        <section class="sect-2">
            <img src="../../img/imgs/avada-food-logo.png" alt="">
        </section>

        <section class="sect-3">
            <ul class="nav-ul">
                <li v-for="nav in store.navList" :class="nav.status === 'active' ? 'nav-active' : ''">{{ nav.name }}
                </li>
                <li><i class="fa-solid fa-magnifying-glass"></i></li>
            </ul>
        </section>
    </header>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;

header {
    padding: 15px 200px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    background-color: white;
}

.sect-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        @include flex-center;
        gap: 30px;
        list-style-type: none;

        li {
            cursor: pointer;
        }

        #ios {
            background-color: $orange;
            padding: 3px 7px;
            border-radius: 5px;
            color: white;
            margin-left: -15px;
        }
    }
}

.sect-2 {
    @include flex-center;
}

.sect-3 {
    .nav-ul {
        @include flex-center;
        gap: 50px;
        list-style-type: none;

        li {
            color: $black;
            padding-bottom: 7px;
            cursor: pointer;

            &:hover {
                color: $orange;
            }
        }

        .nav-active {
            color: $orange;
            border-bottom: 3px solid $orange;
        }
    }
}

// flex-center
</style>