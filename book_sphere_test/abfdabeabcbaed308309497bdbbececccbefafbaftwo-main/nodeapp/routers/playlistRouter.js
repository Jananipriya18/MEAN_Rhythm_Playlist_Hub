const express = require("express");
const playlistController = require("../controllers/playlistController");
const { validateToken } = require("../authUtils");
const router = express.Router();

router.post("/getAllPlaylists", validateToken, playlistController.getAllPlaylists);
router.post("/`getPlaylistsByUserId`", validateToken, playlistController.getPlaylistsByUserId);
router.get("/getPlaylistById/:id", validateToken, playlistController.getPlaylistById);
router.post("/addPlaylist", validateToken, playlistController.addPlaylist);
router.put("/updatePlaylist/:id", validateToken, playlistController.updatePlaylist);
router.delete("/deletePlaylist/:id", validateToken, playlistController.deletePlaylist);

module.exports = router;
