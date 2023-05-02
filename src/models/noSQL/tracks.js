const mongoose = require('mongoose');


const TracksSchema = new mongoose.Schema(

  {
    name: {
      type: String
    },
    album: {
      type: String
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: 'Error url',

      },
    },
    artist: {
      name: {
        type: String
      },
      nickName: {
          type: String
      },
      nationality: {
        type: String
      }
    },
    duration: {
      start: {
        type: Number
      }, 
      end: {
        type: Number
      }
    },
    mediaId: {
      type: mongoose.Types.ObjectId
    }
  },
  {

    timestamps: true,
    versionKey: false,

  }
);

module.exports = mongoose.model('tracks', TracksSchema);