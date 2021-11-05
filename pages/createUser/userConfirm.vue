<template>
    <div>
        <b-form @submit.prevent="confirmUser">
        <b-card
            header="Register Form"
            header-text-variant="white"
            header-tag="header"
            header-bg-variant="success"
            style="max-width: 50rem"
            class="usercon"
        >
            <!-- <b-row class="mt-1 ml-5">
                <b-col md="5"><span> Name</span> </b-col>
                <b-col md="3">
                    <span>{{ userData.name }}</span>
                </b-col>
            </b-row>
            <hr />
            <b-row class="mt-3 ml-5">
                <b-col md="5"><span> Email Address</span> </b-col>
                <b-col md="6">
                    <span>{{ userData.email }}</span>
                </b-col>
            </b-row>
            <hr/>
            <b-row class="mt-3 ml-5">
                <b-col md="5"><span> Password</span> </b-col>
                <b-col md="6">
                    <span>{{ userData.password }}</span>
                </b-col>
            </b-row>
            <hr/>
               <b-row class="mt-3 ml-5">
                <b-col md="5"><span> Password Comformation</span> </b-col>
                <b-col md="6">
                    <span>{{ userData.passwordconfirm }}</span>
                </b-col>
            </b-row>
            <hr/> -->
               <b-row class="mt-3 ml-5">
                <b-col md="5"><span>Type</span> </b-col>
                <b-col md="6">
                    <span>{{ selected }}</span>
                </b-col>
            </b-row>
            <!-- <hr/>
               <b-row class="mt-3 ml-5">
                <b-col md="5"><span> Phone</span> </b-col>
                <b-col md="6">
                    <span>{{ userData.phone }}</span>
                </b-col>
            </b-row>
            <hr/>
            <b-row class="mt-3 ml-5">
                <b-col md="5"><span> Date Of Birth</span> </b-col>
                <b-col md="6">
                    <span>{{ userData.dob }}</span>
                </b-col>
            </b-row>
            <hr/>
            <b-row class="mt-3 ml-5">
                <b-col md="5"><span> Address</span> </b-col>
                <b-col md="6">
                    <span>{{ userData.address }}</span>
                </b-col>
            </b-row>
            <hr/>
            <b-row class="mt-3 ml-5">
                <b-col md="5"><span> Profile</span> </b-col>
                <b-col md="6">
                    <b-img :src="userData.image"></b-img>
                </b-col>
            </b-row>
            <hr/> -->
           <div class="text-center">
                <b-button type="submit" variant="success">Confirm</b-button>

            <b-button type="reset" variant="secondary">Cancle</b-button>
           </div>

        </b-card>
        </b-form>
    </div>
    
</template>

<script src="~/services/pages/createUser/userConfirm.js"></script>
<style scoped src="~/assets/css/pages/createUser/userConfirm.css"></style>
