<template>
    <div>
        <nav>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/profile">Profile</nuxt-link>
            <nuxt-link to="/signup">Signup</nuxt-link>
            <!-- <router-link></router-link> -->
        </nav>

        <nuxt />
        <!-- router-view -->
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>