<template>
    <div class="blog-card-wrap">
        <div class="blog-cards container">
            <BlogCard :post="post" v-for="(post, index) in blogCardsArray" :key="index" />
        </div>
    </div>
</template>

<script>
import BlogCard from "../components/BlogCard";

export default {
    name: "events",
    components: {
        BlogCard
    },
    computed: {
        blogCardsArray() {
            return this.$store.state.blogCardsArray;
        },
    },
};
</script>

<style lang="scss" scoped>

.blog-cards {
    position: relative;
}

</style>