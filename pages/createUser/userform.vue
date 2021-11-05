<template>
    <div>
        <ValidationObserver ref="observer">
            <b-form @submit.prevent="userRegister">
                <b-card
                    header="Register"
                    header-text-variant="white"
                    header-tag="header"
                    header-bg-variant="success"
                    style="max-width: 80rem"
                    class="userform"
                >
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Name"
                        :rules="{
                            required: true,
                        }"
                    >
                        <b-form-group
                            label="Name"
                            label-for="nested-street"
                            label-cols-sm="3"
                            label-align-sm="center"
                        >
                            <b-form-input
                                id="name"
                                v-model="userForm.name"
                                rules="max"
                            ></b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}</span
                            >
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Email"
                        rules="required|email"
                    >
                        <b-form-group
                            label="E-mail Address"
                            label-for="nested-city"
                            label-cols-sm="3"
                            label-align-sm="center"
                        >
                            <b-form-input
                                id="email"
                                v-model="userForm.email"
                                type="email"
                            >
                            </b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}</span
                            >
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Password"
                        vid="confirmation"
                        rules="required"
                    >
                        <b-form-group
                            label="Password"
                            label-for="nested-state"
                            label-cols-sm="3"
                            label-align-sm="center"
                        >
                            <b-form-input
                                id="password"
                                v-model="userForm.password"
                                type="text"
                            ></b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}</span
                            >
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        rules="required|confirmed:confirmation"
                        name="Password conformation"
                    >
                        <b-form-group
                            label="Password conformation"
                            label-for="nested-country"
                            label-cols-sm="3"
                            label-align-sm="center"
                        >
                            <b-form-input
                                id="password confrim"
                                v-model="userForm.passwordconfirm"
                                type="text"
                            ></b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}</span
                            >
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" name="User Type">
                        <b-form-group
                            label="Type"
                            label-cols-sm="3"
                            label-align-sm="center"
                        >
                            <!-- <b-dropdown
                                text="Admin"
                                variant="outline-secondary"
                            >
                                <b-dropdown-item href="#" block
                                    >Admin</b-dropdown-item
                                >
                                <b-dropdown-item href="#" block
                                    >User</b-dropdown-item
                                >
                            </b-dropdown> -->
                             <b-form-select v-model="selected" :options="options"></b-form-select>
                             
                            <span class="input-invalid-message">
                                {{ errors[0] }}</span
                            >
                        </b-form-group>
                    </ValidationProvider>
                        <b-form-group
                            label="Phone"
                            label-for="nested-country"
                            label-cols-sm="3"
                            label-align-sm="center"
                        >
                            <b-form-input
                                id="phone"
                                v-model="userForm.phone"
                            ></b-form-input>
                        </b-form-group>
                 
                    <b-form-group
                        label="Date of Birth"
                        label-for="nested-country"
                        label-cols-sm="3"
                        label-align-sm="center"
                    >
                        <b-form-datepicker v-model="userForm.dob"> </b-form-datepicker>
                    </b-form-group>
                    <b-form-group
                        label="Address"
                        label-for="nested-country"
                        label-cols-sm="3"
                        label-align-sm="center"
                    >
                        <b-form-textarea
                            rows="3"
                            id="input-name"
                            max-rows="6"
                            type="text"
                             v-model="userForm.address"
                        ></b-form-textarea>
                    </b-form-group>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Profile"
                        rules="required"
                    >
                        <b-form-group
                            label="Profile"
                            label-for="nested-country"
                            label-cols-sm="3"
                            label-align-sm="center"
                        >
                            <!-- <b-form-file
                                id="profilePhoto"
                                placeholder="Choose a file or drop it here..."
                                accept="image/*"
                                @change="onFileChange"
                            ></b-form-file> -->
                            <b-form-file
                                id="profilePhoto"
                                type="file"
                                accept="image/*"
                                v-model="userForm.profile"
                                @change="onFileChange"
                            ></b-form-file>
                            <span class="input-invalid-message">
                                {{ errors[0] }}</span
                            >
                        </b-form-group>
                    </ValidationProvider>
                    <div class="text-center">
                        <b-button type="submit" variant="primary"
                            >Register</b-button
                        >

                        <b-button type="reset" variant="secondary" class="mr-3"
                            >Clear</b-button
                        >
                    </div>
                    <br />
                    <b-card-footer>
                        <b-link href="#foo" class="fot"
                            >Seattle consulting Myanmar</b-link
                        >
                        <label for="" class="lbl"
                            >Copyright © Seattle Consulting Myanmar Co., Ltd.
                            All rights reserved.</label
                        >
                    </b-card-footer>
                </b-card>
            </b-form>
        </ValidationObserver>
    </div>
</template>

<script src="~/services/pages/createUser/userform.js"></script>
<style scoped src="~/assets/css/pages/createUser/userform.css"></style>
