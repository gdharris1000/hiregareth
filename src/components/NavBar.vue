<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">Gareth Harris</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/history" class="nav-link">History</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/projects" class="nav-link">Projects</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
    a{
      cursor: url("../../public/cursor.gif"), auto;
      color: #DAD2BC !important;
    }

    a:hover {
        color: #A99985 !important;
    }
    .navbar {
        background-color: #001B2E !important;
    }
</style>