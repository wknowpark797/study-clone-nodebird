<template>
    <v-container>

        <!-- 닉네임 수정 -->
        <v-card :style="{ marginBottom: '20px' }">
            <v-container>
                <v-subheader>내 프로필</v-subheader>

                <v-form>
                    <v-text-field
                        label="닉네임"
                        required />
                    <v-btn
                        color="blue"
                        type="submit"
                        :style="{ color: '#FFF' }">
                        수정
                    </v-btn>
                </v-form>
            </v-container>
        </v-card>

        <!-- 팔로잉 목록 -->
        <v-card :style="{ marginBottom: '20px' }">
            <v-container>
                <v-subheader>팔로잉</v-subheader>
                <FollowList />
            </v-container>
        </v-card>

        <!-- 팔로워 목록 -->
        <v-card :style="{ marginBottom: '20px' }">
            <v-container>
                <v-subheader>팔로워</v-subheader>
                <FollowList />
            </v-container>
        </v-card>

    </v-container>
</template>

<script>
    import FollowList from '~/components/FollowList';

    export default {
        components: {
            FollowList
        },
        data() {
            return {
                
            }
        },
        head() {
            return {
                title: '프로필'
            }
        }
    }
</script>

<style>

</style>