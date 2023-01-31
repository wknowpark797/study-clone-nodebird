<template>
    <v-card :style="{ marginBottom: '20px' }">
        <v-container>
            <v-form 
                ref="form" 
                v-model="valid" 
                @submit.prevent="onSubmitForm">

                <v-textarea
                    v-model="content"
                    outlined
                    auto-grow
                    clearable
                    label="어떤 신기한 일이 있었나요?"
                    :hide-details="hideDetails"
                    :success-messages="successMessages"
                    :success="success"
                    :rules="[v => !!v.trim() || '내용을 입력하세요.']"
                    @input="onChangeTextarea" />

                <v-btn
                    type="submit"
                    color="blue"
                    absolute
                    right>
                    짹짹
                </v-btn>

                <v-btn>이미지 업로드</v-btn>

            </v-form>
        </v-container>
    </v-card>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {
                valid: false,
                hideDetails: true,
                successMessages: '',
                success: false,
                content: ''
            }
        },
        computed: {
            ...mapState('users', ['me']),
        },
        methods: {
            onChangeTextarea() {
                this.hideDetails = true;
                this.successMessages = '';
                this.success = false;
            },
            onSubmitForm() {
                if(this.$refs.form.validate()) {
                    // 백엔드에서 어떤 구조의 데이터를 응답 받을지 협의하기
                    this.$store.dispatch('posts/add', {
                        content: this.content,
                        User: {
                            nickname: this.me.nickname
                        },
                        Comments: [],
                        Images: [],
                        id: Date.now(),
                        createdAt: Date.now()
                    })
                        .then(() => {
                            this.hideDetails = false;
                            this.successMessages = '게시글 등록 성공!';
                            this.success = true;
                            this.content = '';
                        })
                        .catch(() => {

                        });
                }
            }
        }
    }
</script>

<style>

</style>