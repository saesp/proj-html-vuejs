<script>
export default {
    name: "Main4",
}
</script>

<template>
    <div class="container">
        <div class="intro">
            <span>
                <h3>CULINARY COLLECTION</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nobis aut voluptatem numquam dicta
                </p>
            </span>
            <button class="orange-button">READ OUR BLOG <i class="fa-solid fa-book-open-reader"></i></button>
        </div>

        <div class="imgs">
            <span class="sect-left">
                <div class="big-img">
                    <img src="../../img/imgs/single-post-img3.jpg" alt="">
                    <h4>Food Corner: Top Japanase Restaurants for Sushi</h4>
                    <div class="date">March 25, 2019</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet quidem harum earum
                        repellendus in distinctio ea inventore consectetur. Non ducimus minima, illo repudiandae animi
                        quo perferendis eveniet excepturi quaerat
                    </p>
                    <div class="read-more">
                        <span>Read More ></span>
                        <span>o</span>
                    </div>
                </div>

                <div class="small-imgs">
                    <div class="card">
                        <img src="../../img/imgs/fi-roundup.jpg" alt="">
                        <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                        <div class="date">March 25, 2019</div>
                    </div>
                    <div class="card">
                        <img src="../../img/imgs/fi-korean-food.jpg" alt="">
                        <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                        <div class="date">March 25, 2019</div>
                    </div>
                    <div class="card">
                        <img src="../../img/imgs/fi-toasts.jpg" alt="">
                        <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                        <div class="date">March 25, 2019</div>
                    </div>
                    <div class="card">
                        <img src="../../img/imgs/fi-street-food.jpg" alt="">
                        <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                        <div class="date">March 25, 2019</div>
                    </div>
                    <div class="card">
                        <img src="../../img/imgs/fi-organic-breakfast.jpg" alt="">
                        <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                        <div class="date">March 25, 2019</div>
                    </div>
                    <div class="card">
                        <img src="../../img/imgs/fi-water-side-rest.jpg" alt="">
                        <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                        <div class="date">March 25, 2019</div>
                    </div>
                    <button>LOAD MORE POSTS</button>
                </div>

            </span>

            <span class="sect-right">
                <div id="square">
                    <img src="../../img/imgs/ad-bg.jpg" alt="">
                    <span>VIEW OUR LATEST RECIPES</span>
                </div>
                <div>
                    <img src="../../img/imgs/singapore-featured-image.jpg" alt="">
                </div>
                <div id="input">
                    <input type="search" placeholder="Search...">
                </div>
                <div id="follow">Follow Us</div>
                <ul>
                    <li><i class="fa-brands fa-facebook-f"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-youtube"></i></li>
                    <li><i class="fa-brands fa-pinterest-p"></i></li>
                </ul>
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;

.container {
    width: 65%;
    margin: 0 auto 30vh;
}

.intro {
    @include flex-between;
    margin-bottom: 50px;

    h3 {
        margin-bottom: 20px;
    }

    p {
        width: 60vh;
    }

    button {
        padding: 8px 14px;
        color: white;
        background-color: $orange;
        border: 0;

        i {
            margin-left: 5px;
        }
    }
}

.imgs {
    display: flex;
    justify-content: space-between;

    // sect left
    .sect-left {
        width: 65%;

        .big-img {
            background-color: white;
            padding-bottom: 30px;
            margin-bottom: 30px;

            img {
                width: 100%;
                margin-bottom: 20px;
            }

            h4,
            div,
            p {
                margin-left: 30px;
                margin-right: 30px;
            }

            h4 {
                margin-bottom: 5px
            }

            .date {
                padding-bottom: 20px;
                border-bottom: 1px solid $lightGrey;
            }

            p {
                margin-top: 20px;
                margin-bottom: 20px
            }

            .read-more {
                @include flex-between;
            }
        }

        .small-imgs {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;

            .card {
                width: calc(50% - 15px);
                background-color: white;
                text-align: center;

                img {
                    width: 100%;
                    margin-bottom: 15px;
                }

                h4,
                div {
                    padding: 0 35px;
                }

                div {
                    margin-top: 10px;
                    padding-bottom: 20px;
                }
            }

            button {
                background-color: $lightGrey;
                width: 100%;
                padding: 10px 0;
                border: 0;

                &:hover {
                    background-color: $grey;
                }
            }

        }
    }

    // sect right
    .sect-right {
        width: 30%;

        img {
            width: 100%;
            margin-bottom: 30px;
        }

        #square {
            position: relative;

            span {
                color: black;
                letter-spacing: 4px;
                width: 120px;
                text-align: center;
                position: absolute;
                transform: translate(50%, 50%);
                right: 50%;
                top: 33%;
            }
        }

        #input {
            padding-top: 30px;
            border-top: 2px solid $lightGrey;
            margin-bottom: 30px;

            input {
                width: 100%;
                padding: 10px;
                border: 2px solid $grey;
                border-radius: 7px;
            }
        }

        #follow {
            color: $orange;
            margin-bottom: 15px;
        }

        ul {
            list-style-type: none;
            display: flex;
            gap: 10px;

            li {
                width: 25px;
                height: 25px;
                padding: 20px;
                background-color: $lightGrey;
                position: relative;
                border-radius: 7px;
                cursor: pointer;

                &:hover {
                    background-color: $grey;
                }

                i {
                    position: absolute;
                    transform: translate(50%, 50%);
                    right: 50%;
                    bottom: 50%;
                }
            }
        }
    }
}

img {
    width: 200px;
}
</style>
