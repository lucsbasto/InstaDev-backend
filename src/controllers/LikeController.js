const Post = require('../models/Post');
module.exports = {
  async store(req, res) {
    const post = await Post.findOne({
      _id: req.params.id
    });
    post.likes += 1;
    await post.save();
    req.io.emmit('like', post);
    return res.send(post);
  }
}