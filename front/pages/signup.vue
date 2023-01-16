<template>
    <v-container>
        <v-card>
            <v-container>
                <v-subheader>회원가입</v-subheader>

                <v-form>

                    <v-text-field
                        label="이메일"
                        type="email"
                        required />

                    <v-text-field
                        label="비밀번호"
                        type="password"
                        required />

                    <v-text-field
                        label="비밀번호확인"
                        type="password"
                        required />

                    <v-text-field
                        label="닉네임"
                        type="text"
                        required />

                    <v-checkbox
                        label="약관에 동의합니다."
                        required />

                    <v-btn
                        color="blue"
                        type="submit"
                        :style="{ color: '#FFF' }">
                        가입하기
                    </v-btn>

                </v-form>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        head() {
            return {
                title: '회원가입'
            }
        }
    }
</script>

<style>

</style>