<template>
    <div :style="{ marginBottom: '20px' }">
        <v-card>
            <v-img />

            <v-card-text>
                <div>
                    <h3>{{ post.User.nickname }}</h3>
                    <div>{{ post.content }}</div>
                </div>
            </v-card-text>

            <v-card-actions>
                <v-btn
                    text
                    color="orange">
                    <v-icon>mdi-repeat-variant</v-icon>
                </v-btn>
                <v-btn
                    text
                    color="orange">
                    <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn
                    text
                    color="orange"
                    @click="onToggleComment">
                    <v-icon>mdi-comment-outline</v-icon>
                </v-btn>

                <v-menu
                    offset-y
                    open-on-hover>
                    <template v-slot:activator="{on}">
                        <v-btn
                            text
                            color="orange"
                            v-on="on">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                    <div :style="{ background: 'white' }">
                        <v-btn
                            dark
                            color="red"
                            @click="onRemovePost">
                            삭제
                        </v-btn>
                        <v-btn
                            text
                            color="orange"
                            @click="onEditPost">
                            수정
                        </v-btn>
                    </div>
                </v-menu>
                
            </v-card-actions>
        </v-card>

        <!-- 댓글 영역 -->
        <template v-if="commentOpened">
            <CommentForm :postId="post.id" />
            
            <v-list>
                <v-list-item 
                    v-for="comment in post.Comments"
                    :key="comment.id">
                    <v-list-item-avatar color="teal">
                        <span>{{ comment.User.nickname[0] }}</span>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <h3>{{ comment.User.nickname }}</h3>
                        <div>{{ comment.content }}</div>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </template>
    </div>
</template>

<script>
    import CommentForm from '~/components/CommentForm';

    export default {
        components: {
            CommentForm
        },
        props: {
            post: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                commentOpened: false
            }
        },
        methods: {
            onRemovePost() {
                this.$store.dispatch('posts/remove', {
                    id: this.post.id
                })
            },
            onEditPost() {

            },
            onToggleComment() {
                this.commentOpened = !this.commentOpened;
            }
        }
    }
</script>

<style>

</style>