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
                    cumque
                    maxime tenetur repellat labore cupiditate, illo sequi, animi perspiciatis minus deserunt quae? Qui,
                    impedit obcaecati.
                </p>
            </span>
            <button>READ OUR BLOG</button>
        </div>

        <div class="imgs">
            <span class="sect-left">
                <div class="big-img">
                    <img src="../../img/imgs/single-post-img3.jpg" alt="">
                    <div>Food Corner: Top Japanase Restaurants for Sushi</div>
                    <div class="date">March 25, 2019</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet quidem harum earum
                        repellendus in distinctio ea inventore consectetur. Non ducimus minima, illo repudiandae animi
                        quo perferendis eveniet excepturi quaerat</p>
                </div>

                <div class="small-imgs">
                    <div class="card">
                        <img src="../../img/imgs/single-post-img3.jpg" alt="">
                        <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                        <div class="date">March 25, 2019</div>
                    </div>
                    <div class="card">
                        <img src="../../img/imgs/single-post-img3.jpg" alt="">
                        <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                        <div class="date">March 25, 2019</div>
                    </div>
                    <div class="card">
                        <img src="../../img/imgs/single-post-img3.jpg" alt="">
                        <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                        <div class="date">March 25, 2019</div>
                    </div>
                    <div class="card">
                        <img src="../../img/imgs/single-post-img3.jpg" alt="">
                        <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                        <div class="date">March 25, 2019</div>
                    </div>
                    <div class="card">
                        <img src="../../img/imgs/single-post-img3.jpg" alt="">
                        <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                        <div class="date">March 25, 2019</div>
                    </div>
                    <div class="card">
                        <img src="../../img/imgs/single-post-img3.jpg" alt="">
                        <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                        <div class="date">March 25, 2019</div>
                    </div>
                </div>
            </span>

            <span class="sect-right">

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
    @include flex-between
}

.imgs {
    @include flex-between;

    // sect left
    .sect-left {
        width: 60%;

        .big-img {
            background-color: white;
            margin-bottom: 30px;

            img {
                width: 100%;
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

        }
    }

    // sect right
    .sect-right {}
}

img {
    width: 200px;
}
</style>
