<script>
export default {
    name: "Main1",
}
</script>

<template>
    <div class="container">
        <div id="todays-pick">
            <div id="orange-cell">TODAY'S PICK</div>
            <h1>Food Corner: Top Japanese Restaurants for Sushi</h1>
            <div class="date">March 25, 2019</div>
        </div>

        <div id="foodie-journal">
            <h3>FOODIE JOURNAL</h3>
            <div>
                <div>
                    <img src="../../img/imgs/single-post-img3.jpg" alt="">
                    <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                    <div class="date">By admin | March 25th, 2019</div>
                </div>
                <div>
                    <img src="../../img/imgs/fi-roundup.jpg" alt="">
                    <h4>Roundup: My New Favourite Recipes For Healthy Living</h4>
                    <div class="date">By admin | March 25th, 2019</div>
                </div>
                <div>
                    <img src="../../img/imgs/fi-toasts.jpg" alt="">
                    <h4>Why These Toasts with Tea are My New Favourite</h4>
                    <div class=" date">By admin | March 25th, 2019
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;

.container {
    background-image: url(../../img/imgs/single-post-img3.jpg);
    background-size: cover;
    height: 500px;
    position: relative;
    margin-bottom: 50vh;
}

#todays-pick {
    color: white;
    padding: 30px 40px;
    border-radius: 7px;
    background-color: white;
    width: 35%;
    text-align: center;
    position: absolute;
    margin: auto;
    transform: translate(50%, 50%);
    bottom: 50%;
    right: 50%;

    h1 {
        color: $black;
    }

    #orange-cell {
        padding: 7px 12px;
        border-radius: 7px;
        position: absolute;
        background-color: $orange;
        transform: translate(50%);
        right: 50%;
        top: -10px;
    }
}

#foodie-journal {
    text-align: center;
    background-color: white;
    width: 65%;
    padding: 25px;
    position: absolute;
    transform: translate(50%);
    right: 50%;
    bottom: -35vh;

    h3 {
        margin-bottom: 25px;
    }

    >div {
        @include flex-center;
        gap: 25px;

        img {
            width: 100%;
            margin-bottom: 10px;
        }

        h4 {
            width: 225px;
            margin: 0 auto 7px;
        }
    }

}
</style>