const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GenreSchema = new Schema({
    // 指向藏书的引用
    book: { type: Schema.Types.ObjectId, ref: 'Book' }, 
    name: { type: String, required: true }
})

//虚拟属性
GenreSchema
    .virtual('url')
    .get(function() {
        return '/catalog/genre/' + this._id
    })

// 导出 Book 模块
module.exports = mongoose.model('Genre', GenreSchema);