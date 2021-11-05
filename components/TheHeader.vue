<template>
    <b-navbar toggleable="lg" type="dark" variant="success">
        <NuxtLink to="/" class="navbar-brand">{{ appTitle }}</NuxtLink>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <li class="nav-item">
                    <NuxtLink :to="{ name: 'post-list' }" class="nav-link">
                        Post
                    </NuxtLink>
                </li>
            </b-navbar-nav>
             <b-navbar-nav>
                <li class="nav-item">
                    <NuxtLink :to="{ name: 'createUser-userlist' }" class="nav-link">
                        Users
                    </NuxtLink>
                </li>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <li class="nav-item" v-if="!$auth.loggedIn">
                    <NuxtLink :to="{ name: 'createUser-userform' }" class="nav-link">
                        Create User
                    </NuxtLink>
                </li>
                <li class="nav-item" v-if="!$auth.loggedIn">
                    <NuxtLink :to="{ name: 'login' }" class="nav-link">
                        Login
                    </NuxtLink>
                </li>
                <b-nav-item-dropdown right v-if="$auth.loggedIn">
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>{{ $auth.user.name }}</em>
                    </template>
                    <li role="presentation">
                        <NuxtLink :to="{name:'profile'}" class="dropdown-item">
                            Profile
                        </NuxtLink>
                    </li>
                    <b-dropdown-item @click="logoutUser">
                        Logout
                    </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script src="~/services/components/the-header.js"></script>

<style scoped src="~/assets/css/components/the-header.css"></style>
