<template>
    <b-container class="login-page">
        <ValidationObserver ref="observer">
            <b-form @submit.prevent="userLogin">
                <b-card
                    header="Login"
                    header-text-variant="white"
                    header-tag="header"
                    header-bg-variant="success"
                    style="max-width: 80rem"
                    class="userform"
                >
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Email"
                        :rules="{
                            required: true,
                            max: this.onezerozero,
                        }"
                    >
                        <b-form-group
                            label="Email Address"
                            label-for="nested-street"
                            label-cols-sm="3"
                            label-align-sm="center"
                        >
                            <b-form-input id="email" v-model="form.email"></b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}</span
                            >
                        </b-form-group>
                    </ValidationProvider>
                     <ValidationProvider
                        v-slot="{ errors }"
                        name="Password"
                        :rules="{
                            required: true,
                            max: this.onezerozero,
                        }"
                    >
                    <b-form-group
                        label="Password"
                        label-for="nested-street"
                        label-cols-sm="3"
                        label-align-sm="center"
                    >
                        <b-form-input id="password" v-model="form.password"> </b-form-input>
                        <span class="input-invalid-message">
                                {{ errors[0] }}</span
                            >
                    </b-form-group>
                     </ValidationProvider>
                    <div class="pwd">
                        <b-form-checkbox
                            id="checkbox-1"
                            v-model="status"
                            name="checkbox-1"
                            value="accepted"
                            unchecked-value="not_accepted"
                            class="chk"
                        >
                            Remember me
                        </b-form-checkbox>
                        <b-link href="#foo">Forget Password?</b-link>
                    </div>
                    <br />
                    <div class="text-center">
                        <b-button type="submit" variant="success"
                            >Login</b-button
                        >
                    </div>
                    <br />
                    <div class="text-center">
                        <b-link href="#foo">Create Account?</b-link>
                        <b-icon
                            icon="person-plus-fill"
                            variant="primary"
                        ></b-icon>
                    </div>
                </b-card>
            </b-form>
        </ValidationObserver>
    </b-container>
</template>

<script src="~/services/pages/user/login.js"></script>

<style scoped src="~/assets/css/pages/user/login.css"></style>
