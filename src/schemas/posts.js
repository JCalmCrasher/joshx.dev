const GET_USER_POSTS = `
query GetUserPosts($page: Int!) {
    user(username: "joshdev") {
        publication {
            posts(page: $page) {
                title
                brief
                dateAdded
                contentMarkdown
                slug
            }
        }
    }
}
`;

export default GET_USER_POSTS;
