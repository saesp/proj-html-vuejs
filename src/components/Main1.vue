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
                    <img src="../../img/imgs/single-post-img3-200x132.jpg" alt="">
                    <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                    <div class="date">March 25, 2019</div>
                </div>
                <div>
                    <img src="../../img/imgs/single-post-img3-200x132.jpg" alt="">
                    <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                    <div class="date">March 25, 2019</div>
                </div>
                <div>
                    <img src="../../img/imgs/single-post-img3-200x132.jpg" alt="">
                    <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                    <div class="date">March 25, 2019</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;

.container {
    background-image: url(../../img/imgs/single-post-img3-800x527.jpg);
    background-size: cover;
    height: 500px;
    position: relative;
    margin: 0 0 50vh;
}

#todays-pick {
    background-color: white;
    width: 30%;
    text-align: center;
    position: absolute;
    margin: auto;
    transform: translate(50%, 50%);
    bottom: 50%;
    right: 50%;

    #orange-cell {
        position: absolute;
        background-color: orange;
        transform: translate(50%);
        right: 50%;
        top: -10px;
    }
}

#foodie-journal {
    background-color: white;
    width: 65%;
    padding: 25px;
    position: absolute;
    transform: translate(50%);
    right: 50%;
    bottom: -35vh;

    h3 {
        text-align: center;
        margin-bottom: 25px;
    }

    >div {
        @include flex-center;
        gap: 25px;

        img {
            width: 100%;
        }
    }


}
</style>