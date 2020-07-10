<template>
    <div class="container">
        <div class="row">
            <div class="col-md-1">
               
            </div>
            <div class="col-md-1">
                <img src="../../public/images/icons/flutter.png" alt="Flutter" class="img-front">
                <img src="../../public/images/icons/flutter2.png" alt="Flutter" class="img-back">
            </div>
            <div class="col-md-1">
                <img src="../../public/images/icons/dart.png" alt="Dart" class="img-front">
                <img src="../../public/images/icons/dart2.png" alt="Dart" class="img-back">
            </div>
            <div class="col-md-1">
                <img src="../../public/images/icons/ruby.png" alt="Ruby" class="img-front">
                <img src="../../public/images/icons/ruby2.png" alt="Ruby" class="img-back">
            </div>
            <div class="col-md-1">
                <img src="../../public/images/icons/rails.png" alt="Rails" class="img-front">
                <img src="../../public/images/icons/rails2.png" alt="Rails" class="img-back">
                
            </div>
            <div class="col-md-1">
                <img src="../../public/images/icons/psql.png" alt="PostgreSQL" class="img-front">
                <img src="../../public/images/icons/psql2.png" alt="PostgreSQL" class="img-back">
            </div>
            <div class="col-md-1">
                <img src="../../public/images/icons/html.png" alt="HTML" class="img-front">
                <img src="../../public/images/icons/html2.png" alt="HTML" class="img-back">
            </div>
            <div class="col-md-1">
                <img src="../../public/images/icons/css.png" alt="CSS" class="img-front">
                <img src="../../public/images/icons/css2.png" alt="CSS" class="img-back">
            </div>
            <div class="col-md-1">
                <img src="../../public/images/icons/javascript.png" alt="JavaScript" class="img-front">
                <img src="../../public/images/icons/javascript2.png" alt="JavaScript" class="img-back">
            </div>
            <div class="col-md-1">
                <img src="../../public/images/icons/firebase.png" alt="Firebase" class="img-front">
                <img src="../../public/images/icons/firebase2.png" alt="Firebase" class="img-back">
            </div>
            <!-- <div class="col-md-1">
                <img src="../../public/images/icons/bootstrap.png" alt="Bootstrap"><br>
                Bootstrap
            </div> -->
            <div class="col-md-1">
                <img src="../../public/images/icons/vue.png" alt="Vue" class="img-front">
                <img src="../../public/images/icons/vue2.png" alt="Vue" class="img-back">
            </div>
            <div class="col-md-1">
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeScreen'
}
</script>

<style scoped>
img{
    max-width: 100%;
}
.col-md-1{
    text-align: center;
    font-weight: bold;
    padding: 5px;
}

.img-back{
    display: none;
}

.col-md-1:hover .img-back{
    display: inline !important;
}

.col-md-1:hover .img-front{
    display: none !important;
}


</style>