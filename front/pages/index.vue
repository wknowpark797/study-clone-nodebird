<template>
    <v-container>
        <PostForm v-if="me" />
        <div>
            <PostCard
                v-for="post in mainPosts"
                :key="post.id"
                :post="post" />
        </div>
    </v-container>
</template>

<script>
    import PostForm from '~/components/PostForm';
    import PostCard from '~/components/PostCard';

    export default {
        components: {
            PostForm,
            PostCard
        },
        computed: {
            me() {
                return this.$store.state.users.me;
            },
            mainPosts() {
                return this.$store.state.posts.mainPosts;
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>