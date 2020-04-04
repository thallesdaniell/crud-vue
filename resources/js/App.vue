<template>

    <div class="container">
        <div>
            <b-jumbotron bg-variant="primary" text-variant="white">
                <template v-slot:header>Desafio - Sell2Brazil</template>
                <hr class="my-4">
                <p>
                    Objetivo: criação de um crud com Vue/Laravel/Docker
                </p>
            </b-jumbotron>
        </div>

        <div>
            <b-navbar type="dark" variant="info">
                <b-navbar-nav>
                    <router-link :to='{name: "/"}' class="nav-item nav-link">Home</router-link>
                    <router-link :to='{name: "tasks"}' class="nav-item nav-link">Tarefas</router-link>
                    <router-link :to='{name: "add"}' class="nav-item nav-link">Adicionar</router-link>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <br/>
        <router-view></router-view>
    </div>
</template>

<script>
    import {BNavbar, BNavItem, BNavbarNav, BJumbotron, BButton} from 'bootstrap-vue'

    export default {

        components: {
            BNavbar,
            BNavItem,
            BNavbarNav,
            BJumbotron,
            BButton
        }
    }
</script>
