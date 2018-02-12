if (process.env.NODE_ENV === 'production') {
    //bd on mlab
    module.exports = {
        mongoURI: 'mongodb://huonghuongggg:huonghuongggg@ds231658.mlab.com:31658/learn-angular'
    }
} else {
    //db local
    module.exports = {
        mongoURI: 'mongodb://localhost/learn-angular'
    }
}