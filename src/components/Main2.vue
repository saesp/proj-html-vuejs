<script>
export default {
    name: "Main2",
}
</script>

<template>
    <div class="container">
        <h3>POPULAR RECIPES</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, accusamus nobis tenetur veritatis alias
            expedita nulla cumque doloremque ea quis ipsa impedit assumenda hic, aliquid fuga. Illo sint voluptatibus
            vitae!</p>
        <div class="cont-img">
            <span id="big-img">
                <img src="../../img/imgs/Yogurt-Nan.jpg" alt="">
                <h3>Lunch Favourite with Salad, Naan and Beans</h3>
                <div>Bakery, Featured</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni recusandae numquam dolor sequi
                    dignissimos illum, aperiam ratione rem mollitia, qui dicta vel animi. Id excepturi labore totam
                    asperiores nostrum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi beatae
                    eius. Molestias recusandae vitae asperiores unde eveniet optio nostrum repudiandae inventore maxime?
                    Eos corrupti veniam esse fugiat pariatur recusandae.</p>
                <button>LEARN MORE</button>
            </span>
            <span id="small-img">
                <ul>
                    <li><img src="../../img/imgs/Mixed-fruits.jpg" alt=""></li>
                    <li><img src="../../img/imgs/r-rachel-park-366508-unsplash-min.jpg" alt=""></li>
                    <li><img src="../../img/imgs/r-michelle-tsang-500721-unsplash-min.jpg" alt=""></li>
                    <li><img src="../../img/imgs/quick-summer-drink-460x295.jpg" alt=""></li>
                </ul>
                <ul>
                    <li><img src="../../img/imgs/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg" alt=""></li>
                    <li><img src="../../img/imgs/perfect-cosmopolitan-460x295.jpg" alt=""></li>
                    <li><img src="../../img/imgs/fi2x-6-460x295.jpg" alt=""></li>
                    <li><img src="../../img/imgs/r-brooke-lark-96398-unsplash-min-460x295.jpg" alt=""></li>
                </ul>
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;

.container {
    // width: 65%;
    width: 987.48px;
    margin: auto;
}

.cont-img {
    display: flex;
    justify-content: space-between;

    #big-img {
        background-color: white;

        img {
            width: 480px;
        }

        p,
        div,
        h3 {
            width: 64vh;
            padding: 0 25px;
        }

        button {
            padding: 10px 12px;
            background-color: orange;
            margin: 0 25px;
            border: 0;
        }
    }

    #small-img {
        display: flex;
        gap: 20px;

        ul {
            list-style-type: none;

            li {
                width: calc(100%/2 - 30px);
                margin-bottom: 20px;

                img {
                    width: 225px;
                    height: 150px;
                }
            }
        }
    }
}
</style>
