export class Post {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.likes = data.likes
    this.likeIds = data.likeIds
    this.creatorId = data.creatorId
    this.creator = data.creator || {}
    this.profilePic = data.creator.picture
  }
}
