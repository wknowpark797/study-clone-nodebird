<template>
    <v-container>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </v-container>
</template>

<script>
    import PostCard from '~/components/PostCard';

    export default {
        components: {
            PostCard
        },
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>