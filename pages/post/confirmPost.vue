<template>
    <b-container>
        <b-form @submit.prevent="confirmPost">
            <b-card
                header="Create Post"
                header-text-variant="white"
                header-tag="header"
                header-bg-variant="success"
                style="max-width: 50rem"
                class="con-post"
            >
        
                <b-row class="mt-3">
                    <b-col md="3"><span> Title</span> </b-col>
                    <b-col md="3">
                        <span>{{ userData.title }}</span>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="3"><span> Description</span> </b-col>
                    <b-col md="9">
                        <span>{{ userData.description }}</span>
                    </b-col>
                </b-row>
                <hr />
                <div class="text-center">
                    <b-button
                        type="submit"
                        variant="success"
                        @click="showTop = !showTop"
                        >Confirm</b-button
                    >
                    <b-alert
                        v-model="showTop"
                        class="position-fixed fixed-top mt-1 rounded-0"
                        style="z-index: 10"
                        variant="success"
                        dismissible
                    >
                        Post successfully created.!</b-alert
                    >
                    <b-button type="reset" variant="secondary">Cancle</b-button>
                </div>
            </b-card>
        </b-form>
    </b-container>
</template>

<script src="~/services/pages/post/confirmPost.js"></script>
<style scoped src="~/assets/css/pages/post/confirmPost.css"></style>


