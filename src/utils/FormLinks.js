export function CreateUserLink(username) {
  const userLink = username.replace(/\s/g, "")

  return userLink
}

export function CreatePostLink(post) {
  const postLink = `/${CreateUserLink(post.postAuthor)}/${post.postTitle.replace(/\s/g, "-").toLowerCase()}`;

  return postLink
}
