<template>
    <v-form
        ref="form"
        v-model="valid"
        @submit.prevent="onSubmitForm"
        style="position: relative">

        <v-textarea
            v-model="content"
            filled
            auto-grow
            label="댓글 달기"
            :hide-details="hideDetails"
            :success="success"
            :success-messages="successMessages"
            @input="onChangeTextarea" />

        <v-btn
            color="blue"
            dark
            absolute
            top
            right
            type="submit">
            삐약
        </v-btn>

    </v-form>    
</template>

<script>
    export default {
        props: {
            postId: {
                type: String,
                required: true
            }
        },
        computed: {
            me() {
                return this.$store.state.users.me;
            }
        },
        data() {
            return {
                valid: false,
                content: '',
                hideDetails: true,
                success: false,
                successMessages: ''
            }
        },
        methods: {
            onSubmitForm() {
                if(this.$refs.form.validate()) {
                    this.$store.dispatch('posts/addComment', {
                        id: Date.now(),
                        postId: this.postId,
                        content: this.content,
                        User: {
                            nickname: this.me.nickname,
                        }
                    })
                        .then(() => {
                            this.content = '';
                            this.hideDetails = false;
                            this.success = true;
                            this.successMessages = '댓글이 작성되었습니다.';
                        })
                        .catch(() => {

                        });
                }
            },
            onChangeTextarea(value) {
                // 이전 상태 초기화
                if(value.length) {
                    this.hideDetails = true;
                    this.success = false;
                    this.successMessages = '';
                }
            }
        }
    }
</script>

<style>

</style>