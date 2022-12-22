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
                maxime tenetur repellat labore cupiditate, illo sequi, animi perspiciatis minus deserunt quae? Qui,
                impedit obcaecati.
            </p>
        </div>

        <div class="cards">
            <div class="card">
                <img src="../../img/imgs/baking-recipes.png" alt="">
                <div>BAKERY</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/baking-recipes.png" alt="">
                <div>BAKERY</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/baking-recipes.png" alt="">
                <div>BAKERY</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/baking-recipes.png" alt="">
                <div>BAKERY</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/baking-recipes.png" alt="">
                <div>BAKERY</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/baking-recipes.png" alt="">
                <div>BAKERY</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/baking-recipes.png" alt="">
                <div>BAKERY</div>
            </div>
            <div class="card">
                <img src="../../img/imgs/baking-recipes.png" alt="">
                <div>BAKERY</div>
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
    margin-bottom: 50px;

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