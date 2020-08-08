<template>
    <div class="container">
        <div class="card mb-3">
            <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="card-title">Hire Gareth</h5>
                    </div>
                    <div class="col-md-6 github-link">
                        <a href="https://github.com/gdharris1000/hiregareth" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
                    </div>
                </div>
                <p class="card-text">This website</p>
                <p class="card-text">
                    <span class="badge badge-pill badge-primary">Vue</span> &nbsp;
                    <span class="badge badge-pill badge-primary">HTML</span> &nbsp;
                    <span class="badge badge-pill badge-primary">CSS</span> &nbsp;
                </p>
            </div>
        </div>
        <div class="card mb-3">
            <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="card-title">Task Assigner</h5>
                    </div>
                    <div class="col-md-6 github-link">
                        <a href="https://github.com/gdharris1000/task_assigner" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
                    </div>
                </div>
                <p class="card-text">An app that lets you assign tasks to yourself other users.</p>
                <p class="card-text">
                    <span class="badge badge-pill badge-primary">Flutter</span> &nbsp;
                    <span class="badge badge-pill badge-primary">Dart</span> &nbsp;
                    <span class="badge badge-pill badge-primary">Firebase</span> &nbsp;
                </p>
            </div>
        </div>
        <div class="card mb-3">
            <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="card-title">Air Quality Checker</h5>
                    </div>
                    <div class="col-md-6 github-link">
                        <a href="https://github.com/gdharris1000/air_quality" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
                    </div>
                </div>
                
                <p class="card-text">An app that uses data from the <a href="https://waqi.info/" target="_blank">World Air Quality Index</a> API to provide air quality information for the user based on their location.</p>
                <p class="card-text">
                    <span class="badge badge-pill badge-primary">Flutter</span> &nbsp;
                    <span class="badge badge-pill badge-primary">Dart</span> &nbsp;
                </p>
            </div>
        </div>
        <div class="card mb-3">
            <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="card-title">InstaGareth</h5>
                    </div>
                    <div class="col-md-6 github-link">
                        <a href="https://github.com/gdharris1000/instagareth" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
                    </div>
                </div>
                <p class="card-text">A photo sharing application that has some features in common with another well-known photo sharing application.</p>
                <p class="card-text">
                    <span class="badge badge-pill badge-primary">Ruby on Rails</span> &nbsp;
                    <span class="badge badge-pill badge-primary">HTML</span> &nbsp;
                    <span class="badge badge-pill badge-primary">CSS</span> &nbsp;
                    <span class="badge badge-pill badge-primary">Bootstrap</span> &nbsp;
                </p>
            </div>
        </div>
        <div class="card mb-3">
            <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="card-title">Bank Tech Test</h5>
                    </div>
                    <div class="col-md-6 github-link">
                        <a href="https://github.com/gdharris1000/bank_tech_test" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
                    </div>
                </div>
                <p class="card-text">Command line app built using a strict TDD process</p>
                <p class="card-text">
                    <span class="badge badge-pill badge-primary">Ruby</span> &nbsp;
                    <span class="badge badge-pill badge-primary">RSpec</span>
                </p>
            </div>
        </div>
        <div class="card mb-3">
            <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="card-title">DateSpot</h5>
                    </div>
                    <div class="col-md-6 github-link">
                        <a href="https://github.com/rafahg/travel-final-project" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
                    </div>
                </div>
                <p class="card-text">Final team project from Makers Academy. A web app that provides information on recommended locations for dates.
                    <br>
                    <a href="https://youtu.be/xNpah5xL_l0?t=148" target="_blank">Video presentation available here</a></p>
                <p class="card-text">
                    <span class="badge badge-pill badge-primary">Ruby on Rails API</span> &nbsp;
                    <span class="badge badge-pill badge-primary">React</span> &nbsp;
                    <span class="badge badge-pill badge-primary">CSS</span> &nbsp;
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects'
}
</script>

<style scoped>
.badge-primary {
    background-color: #001B2E !important;
    color: #F5F1ED;
}

.github-link a{
    font-size: 2em;
    color: #70798c;
    
}

.github-link a:hover{
    color: #a99985;
}

.github-link {
    text-align: right;
}

.card {
    margin-top: 25px;
}
</style>