<template>
    <b-container class="login-page">
        <ValidationObserver ref="observer">
            <b-form @submit.prevent="submitPost">
                <b-card
                    header="Create Post "
                    header-text-variant="white"
                    header-tag="header"
                    header-bg-variant="success"
                    style="max-width: 80rem"
                    class="userform"
                >
                <ValidationProvider
                        v-slot="{ errors }"
                        name="Title"
                        :rules="{
                            required: true,
                        }"
                    >
                    <b-form-group
                        label="Title"
                        label-cols-sm="3"
                        label-align-sm="center"
                    >
                        <b-form-input id="title" v-model="post.title" rules="max"></b-form-input>
                          <span class="input-invalid-message">
                                {{ errors[0] }}</span
                            >
                    </b-form-group>
                </ValidationProvider>
                <ValidationProvider
                        v-slot="{ errors }"
                        name="Description"
                        :rules="{
                            required: true,
                        }"
                    >
                    <b-form-group
                        label="Description"
                        label-for="nested-street"
                        label-cols-sm="3"
                        label-align-sm="center"
                    >
                        <b-form-textarea
                            rows="3"
                            id="input-name"
                            v-model="post.description"
                            max-rows="6"
                            type="text"
                        ></b-form-textarea>
                         <span class="input-invalid-message">
                                {{ errors[0] }}</span
                            >
                    </b-form-group>
                </ValidationProvider>
                    <br />
                    <div class="text-center">
                        <b-button type="submit" variant="success"
                            >Create</b-button
                        >

                        <b-button type="reset" variant="secondary" class="mr-3"
                            >Clear</b-button
                        >
                    </div>
                </b-card>
            </b-form>
        </ValidationObserver>
    </b-container>
</template>

<script src="~/services/pages/post/index.js"></script>
<style scoped src="~/assets/css/pages/post/createPost.css"></style>
