<script>
export default {
    name: "Main3",
}
</script>

<template scoped>
    <div class="container">
        <div class="intro">
            <h3>CULINARY COLLECTION</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nobis aut voluptatem numquam dicta cumque
            </p>
        </div>

        <div class="cards">
            <div class="card">
                <img src="../../img/imgs/drinks-recipes.png" alt="">
                <div>DRINKS</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/soups-recipes.png" alt="">
                <div>SOUPS</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/baking-recipes.png" alt="">
                <div>BAKERY</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/dinner-recipes.png" alt="">
                <div>DINNER</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/healthy-recipes.png" alt="">
                <div>HEALTHY</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/staff-picks.png" alt="">
                <div>STAFF PICKS</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/premium-recipes.png" alt="">
                <div>APPETISERS</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/quick-easy-recipes.png" alt="">
                <div>QUICK & EASY</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;

.container {
    width: 65%;
    margin: 0 auto 20vh;
    text-align: center;
}

.intro {
    width: 60vh;
    margin: 0 auto 50px;

    h3 {
        margin-bottom: 20px;
    }
}

.cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;

    .card {
        background-color: white;
        width: calc(100%/4 - 30px);
        margin-bottom: 15px;
        padding: 15px;

        img {
            height: 100px;
            margin-bottom: 10px;
        }
    }
}
</style>