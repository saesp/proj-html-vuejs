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
                <li>Advetise with us</li>
            </ul>

            <ul>
                <li>F</li>
                <li>in</li>
                <li>Tw</li>
                <li>YT</li>
            </ul>
        </section>

        <section class="sect-2">
            <img src="../../img/imgs/avada-food-logo.png" alt="">
        </section>

        <section class="sect-3">
            <ul class="nav-ul">
                <li v-for="nav in store.navList" :class="nav.status === 'active' ? 'nav-active' : ''">{{ nav.name }}
                </li>
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
}

.sect-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        @include flex-center;
        gap: 20px;
        list-style-type: none;
    }
}

.sect-2 {
    @include flex-center;
}

.nav-ul {
    @include flex-center;
    gap: 40px;
    list-style-type: none;

    li {
        padding-bottom: 7px;
    }

    .nav-active {
        color: orange;
        border-bottom: 3px solid orange;
    }
}

// flex-center
</style>