<template>
    <div class="blog-wrapper">
        <img class="band-navbar" src="../assets/navbarImages/band.jpg"/>
        <div class="blog-content">
            <div>
                <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
                <h2 v-else>{{ post.blogTitle }}</h2>
                <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
                <p v-else class="content-preview" v-html="post.blogPreview"></p>
                <!-- <router-link class="link link-light" v-if="post.welcomeScreen" :to="{ name: 'ViewBlogPost', params: { blogid: 0 } }">
                    {{ $t('blogPost.showMoreLink') }}<Arrow class="arrow arrow-light"/>
                </router-link> -->
                <router-link class="link-light" v-if="post.aboutUs" :to="{ name: 'ViewBlogPost', params: { blogid: 1 } }">
                    {{ $t('blogPost.showMoreLink') }}<Arrow class="arrow arrow-light"/>
                </router-link>
                <router-link class="link-light" v-if="post.program" :to="`/${$i18n.locale}/program`">
                    {{ $t('blogPost.showMoreLink') }}<Arrow class="arrow arrow-light"/>
                </router-link>
                <router-link class="link-light" v-if="post.history" :to="{ name: 'ViewBlogPost', params: { blogid: 3 } }">
                    {{ $t('blogPost.showMoreLink') }}<Arrow class="arrow arrow-light"/>
                </router-link>
                <router-link class="link-light" v-if="post.contact" :to="`/${$i18n.locale}/contact`">
                    {{ $t('blogPost.showMoreLink') }}<Arrow class="arrow arrow-light"/>
                </router-link>
                <router-link class="link-light" v-if="post.blogID > 5" :to="{ name: 'ViewBlogPost', params: { blogid: this.post.blogID } }">
                    {{ $t('blogPost.showMoreLink') }}<Arrow class="arrow arrow-light"/>
                </router-link>
            </div>
        </div>
        <div class="blog-photo">
                <img v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="" />
                <img v-else :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" alt="" />
        </div>

    </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"

export default {
    name: "blogPost",
    props: ["post"],
    components: {
        Arrow,
    },
};
</script>

<style lang="scss" scoped>

    .blog-wrapper {
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
        background-color: #303030;
        color: #fff;
        
        @media(min-width: 700px) {
            min-height: 650px;
            max-height: 650px;
            flex-direction: row;
        }

        .band-navbar {
            width: 100%;
            height: 15px;
            left: 0;
            position: absolute;
        }

        .blog-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: justify;
            align-items: center;
            flex: 4;
            order: 2;
            @media(min-width: 700px) {
                order: 1;
            }
            @media(min-width: 800px) {
                flex: 3;
            }

            div {
                max-width: 375px;
                padding: 72px 24px;
                @media(min-width: 700px) {
                    padding: 0 24px;
                }

                h2 {
                    font-size: 32px;
                    font-weight: 300;
                    text-transform: uppercase;
                    margin-bottom: 24px;

                    @media(min-width: 700px) {
                        font-size: 32px;
                    }
                    
                    @media(min-width: 1300px) {
                        font-size: 40px;
                    }
                }

                p {
                    font-size: 15px;
                    font-weight: 300;
                    line-height: 1.7;
                }

                .content-preview {
                    font-size: 16px;
                    text-align: justify;
                }

                .link {
                    display: inline-flex;
                    align-items: center;
                    margin-top: 32px;
                    padding-bottom: 4px;
                    border-bottom: 1px solid transparent;
                    transition: 0.5s ease-in all;
                    color: white;
                    
                    &:hover {
                        border-bottom-color: #303030;
                    }
                }

                .link-light {
                    &:hover {
                        border-bottom-color: #fff;
                        color: white;
                    }
                }
            }
        }

        .blog-photo {
            order: 1;
            flex: 3;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

            @media(min-width: 700px) {
                order: 2;
            }

            @media(min-width: 800px) {
                flex: 4;
            }

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &:nth-child(even) {
            .blog-content {
                order: 2;
            }
            .blog-photo {
                order: 1;
            }


        }
    }


</style>