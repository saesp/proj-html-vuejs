<script>
import { store } from '../store.js'

export default {
    name: "AppFooter",

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section class="sect-1">
        <h3>Subscribe E Receive A Free eBook</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quaerat tenetur fugiat laboriosam maiores
            neque sint culpa recusandae cumque dolorum cupiditate
        </p>
        <input type="email" placeholder="Insert your mail...*">
        <button>SUBSCRIBE</button>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing el</div>
    </section>

    <section class="sect-2">
        <ul>
            <li><img src="../../img/imgs/Yogurt-Nan.jpg" alt=""></li>
            <li><img src="../../img/imgs/Mixed-fruits.jpg" alt=""></li>
            <li><img src="../../img/imgs/r-rachel-park-366508-unsplash-min.jpg" alt=""></li>
            <li><img src="../../img/imgs/r-michelle-tsang-500721-unsplash-min.jpg" alt=""></li>
        </ul>
    </section>

    <section class="sect-3">
        <div class="part1">
            <img src="../../img/imgs/avada-food-logo-mob.png" alt="">
            <div id="social">

            </div>
        </div>
        <div class="part2">
            <ul>
                <li v-for="nav in store.navList" :class="nav.status == 'active' ? 'disp-none' : ''">{{ nav.name }}
                </li>
            </ul>
        </div>
        <div class="part3">
            <h4>CONTACT</h4>
            <div>775 New York Ave</div>
            <div>+0100-505-0000</div>
            <div>info@your-domain.com</div>
        </div>
        <div class="part4">
            <h4>GET OUR APP</h4>
            <div><img src="../../img/imgs/download-android.png" alt=""></div>
            <div><img src="../../img/imgs/download-app-store.png" alt=""></div>
        </div>
    </section>

    <section class="sect-4">
        Copyright
    </section>

</template>

<style lang="scss" scoped>
@use '../style.scss' as *;

.sect-1 {
    padding: 20vh 0;
    text-align: center;
    // background-image: url(../../img/imgs/baking-recipes.png);
    background-color: red;

    h3 {
        margin-bottom: 15px;
    }

    p {
        width: 100vh;
        margin: auto;
        margin-bottom: 30px;
    }

    input {
        padding: 10px;
        width: 50vh;
        margin-right: 10px;
    }

    button {
        padding: 10px 40px;
        margin-left: 10px;
    }

    >div {
        margin-top: 30px;

    }
}

// sect 2
.sect-2 {
    ul {
        @include flex-center;
        list-style-type: none;

        img {
            width: 100%;
        }
    }
}

.sect-3 {
    display: flex;
    justify-content: space-between;
    width: 65%;
    margin: auto;
    padding: 50px 0;

    h4 {
        margin-bottom: 15px;
    }

    .part2 {
        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 15px;

            .disp-none {
                display: none;
            }
        }
    }

    .part3 {
        div {
            margin-bottom: 10px;
        }
    }

    .part4 {
        div {
            margin-top: 10px;
        }

        img {
            width: 175px;
        }
    }
}

.sect-4 {
    text-align: center;
    padding: 30px 0 10px;
    background-color: $hardGrey;
}
</style>
