const PostCard = ({ post }) => {
    return (
        <>
            <div>{post.title}</div>
            <div>{post.excerpt}</div>
        </>
    );
};

export default PostCard;
