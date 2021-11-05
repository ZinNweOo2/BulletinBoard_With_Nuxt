<template>
    <div>Index Page</div>
</template>

<script>
export default {
    auth: false,
    middleware({ redirect }) {
        return redirect('/post/list')
    },
}
</script>
