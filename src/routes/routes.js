const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
const auth = require('../controllers/auth');

router.post('/api/login', auth.login);
router.post('/api/register', auth.register);
router.get('/api/profile', auth.verifyToken, controller.getProfile);
router.post('/api/profile', auth.verifyToken, controller.updateProfile);
router.post('/api/addNote', auth.verifyToken, controller.addNote);
router.get('/api/getNote', auth.verifyToken, controller.getNote);
router.get('/api/scores', auth.verifyToken, controller.getScores);
// router.post('/api/admin/updateStatus', auth.verifyToken, controller.updateUserStatus);
router.post('/api/profile/upload', auth.verifyToken, controller.uploadProfileImage);
router.post('/api/addNoteWithLink', auth.verifyToken, controller.addNoteWithLink);
router.get('/api/getChallenges', auth.verifyToken, controller.getChallenges);
router.post('/api/allChallenges', auth.verifyToken, controller.allChallenges);
router.get('/api/getSolves', auth.verifyToken, controller.getSolves);
router.post('/api/flag/submit', auth.verifyToken, controller.flagSubmit);
router.post('/api/addTicket', auth.verifyToken, controller.submitTicket);
router.post('/api/getTicket', auth.verifyToken, controller.checkTicket);
router.get('/api/user/:username', auth.verifyToken, controller.getUser);
router.delete('/api/user/:username', auth.verifyToken, controller.deleteUser);

router.get('/logout', controller.logout)
router.get('/', auth.verifyTokenforPage, controller.getHome);
router.get('/login', controller.loginPage);
router.get('/register', controller.registerPage);
router.get('/scoreboard', auth.verifyTokenforPage, controller.scoreboardPage);
router.get('/profile', auth.verifyTokenforPage, controller.profilePage);
router.get('/challenges', auth.verifyTokenforPage, controller.challengePage);
router.get('/user/:username', auth.verifyTokenforPage, controller.userPage);
router.get('*', controller.get404);


module.exports = router;