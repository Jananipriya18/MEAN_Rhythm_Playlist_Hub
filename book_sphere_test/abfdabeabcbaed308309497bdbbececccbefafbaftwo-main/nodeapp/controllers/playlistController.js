const Playlist = require('../models/playlistModel');

const getAllPlaylists = async (req, res) => {
  try {
    const sortValue = req.body.sortValue || 1; // Default to ascending order if not provided
    const search = req.body.searchValue || ''; // Default to empty string if not provided
    const searchRegex = new RegExp(search, 'i'); // Case-insensitive search regex

    const playlists = await Playlist.find({ songName: searchRegex })
      .sort({ createdDate: parseInt(sortValue) });

    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPlaylistById = async (req, res) => {
  try {
    const { id } = req.params;
    const playlist = await Playlist.findById(id);
    if (!playlist) {
      res.status(200).json({ message: 'Cannot find any playlist' });
      return;
    }
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addPlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.create(req.body);
    res.status(200).json({ message: 'Playlist added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePlaylist = async (req, res) => {
  try {
    const { id } = req.params;
    const playlist = await Playlist.findByIdAndUpdate(id, req.body, { new: true });

    if (!playlist) {
      res.status(404).json({ message: 'Playlist not found' });
      return;
    }

    res.status(200).json({ message: 'Playlist updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePlaylist = async (req, res) => {
  try {
    const { id } = req.params;
    const playlist = await Playlist.findByIdAndDelete(id);

    if (!playlist) {
      res.status(404).json({ message: 'Playlist not found' });
      return;
    }

    res.status(200).json({ message: 'Playlist deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPlaylistsByUserId = async (req, res) => {
  try {
    const sortValue = req.body.sortValue || 1; // Default to ascending order if not provided
    const search = req.body.searchValue || ''; // Default to empty string if not provided
    const searchRegex = new RegExp(search, 'i'); // Case-insensitive search regex

    const { userId } = req.body;

    const playlists = await Playlist.find({ userId, songName: searchRegex })
      .sort({ createdDate: parseInt(sortValue) });

    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPlaylists,
  getPlaylistById,
  addPlaylist,
  updatePlaylist,
  deletePlaylist,
  getPlaylistsByUserId
};
