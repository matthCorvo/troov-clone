const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../config/keys').secret; 
const User = require('../models/user');

/**
 * @route POST api/users/register
 * @desc Enregistrer l'utilisateur
 * @access Public
 */
router.post('/register', (req, res) => {
    let {
        name,
        email,
        password,
        confirm_password
    } = req.body
    if (password !== confirm_password) {
        return res.status(400).json({
            msg: "Le mot de passe ne correspond pas."
        });
    }

    // Verifie si Nom unique
    User.findOne({
        name: name
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Ce nom d'utilisateur déjà pris."
            });
        }
    })

    // Verifie si Email unique
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "E-mail est déjà utilisée. "
            });
        }
    });

    // Les nouvelles données sont valides, nous pouvons enregistrer l'utilisateur
    let newUser = new User({
        name,
        password,
        email
    });

    // Crypte le mdp
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "Bravo vous êtes bien inscrit !"
                });
            });
        });
    });
});

/**
 * @route POST api/users/login
 * @desc Connexion de l'utilisateur
 * @access Public
 */
router.post('/login', (req, res) => {
    User.findOne({
        name: req.body.name
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: "Nom d'utilisateur introuvable.",
                success: false
            });
        }
        // compare les mdp
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                // mdp correct envoie du JSON Token a l'user
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        user: user,
                        msg: "Vous êtes maintenant connecté."
                    });
                })
            } else {
                return res.status(404).json({
                    msg: "Mot de passe incorrect.",
                    success: false
                });
            }
        })
    });
});

/**
 * @route POST api/users/profile
 * @desc Données de l'utilisateur / profil page
 * @access Private
 */
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});
module.exports = router;