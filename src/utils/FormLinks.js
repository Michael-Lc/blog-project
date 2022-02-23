export function CreateUserLink(username) {
  const userLink = username.replace(/\s/g, "")

  return userLink
}

export function CreatePostLink(post) {
  const postLink = `/post/${CreateUserLink(post.postAuthor)}/${post.postTitle.replace(/\s/g, "-").toLowerCase()}`;

  return postLink
}
