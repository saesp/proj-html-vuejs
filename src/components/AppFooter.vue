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
    <footer>
        <section class="sect-1">
            <h3>Subscribe <span>E</span> Receive A Free eBook</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quaerat tenetur fugiat laboriosam maiores
                neque sint culpa recusandae cumque dolorum cupiditate
            </p>
            <input type="email" placeholder="Insert your mail...*">
            <button class="orange-button">SUBSCRIBE</button>
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
                <ul id="social">
                    <li><i class="fa-brands fa-facebook-f"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-youtube"></i></li>
                </ul>
            </div>
            <div class="part2">
                <ul>
                    <li v-for="nav in store.navList" :class="nav.status == 'active' ? 'disp-none' : ''">{{ nav.name }}
                    </li>
                </ul>
            </div>
            <div class="part3">
                <h4>CONTACT</h4>
                <div><i class="fa-solid fa-location-dot"></i> 775 New York Ave, Brooklyn, Kings, New York 11203</div>
                <div><i class="fa-solid fa-phone"></i> +0100-505-0000</div>
                <div><i class="fa-solid fa-envelope"></i> info@your-domain.com</div>
            </div>
            <div class="part4">
                <h4>GET OUR APP!</h4>
                <div><img src="../../img/imgs/download-android.png" alt=""></div>
                <div><img src="../../img/imgs/download-app-store.png" alt=""></div>
            </div>
        </section>

        <section class="sect-4">
            Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress
        </section>
    </footer>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;

footer {
    background-color: white;
}

h4 {
    color: $orange;
    letter-spacing: 5px;
}

.sect-1 {
    padding: 20vh 0;
    text-align: center;
    background-color: white;
    // background-image: url(../../img/imgs/);

    h3 {
        margin-bottom: 15px;
        font-size: 26px;
        font-family: 'Times New Roman', Times, serif;

        span {
            color: $orange;
        }
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
        color: white;
        background-color: $orange;
        border: 0;
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

// sect 3
.sect-3 {
    display: flex;
    justify-content: space-between;
    width: 65%;
    margin: auto;
    padding: 50px 0;

    h4 {
        margin-bottom: 15px;
    }

    .part1 {
        img {
            width: 175px;
        }

        ul {
            list-style-type: none;
            display: flex;
            gap: 15px;
            margin-top: 30px;
            color: $grey;
            font-size: 14px;

            li {
                cursor: pointer;
            }
        }
    }

    .part2 {
        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 15px;
            color: $black;

            li {
                cursor: pointer;

                &:hover {
                    color: $orange;
                }
            }

            .disp-none {
                display: none;
            }
        }
    }

    .part3 {
        div {
            margin-bottom: 10px;
            cursor: pointer;
            width: 200px;

            &:hover {
                color: $orange;
            }

            i {
                font-size: 14px;
                margin-right: 10px;
            }
        }
    }

    .part4 {
        div {
            margin-top: 10px;
        }

        img {
            width: 175px;
            cursor: pointer;
        }
    }
}

.sect-4 {
    font-size: 12px;
    background-color: $bodyGrey;
    text-align: center;
    padding: 30px 0 20px;
    border-top: 2px solid $lightGrey;
}
</style>
