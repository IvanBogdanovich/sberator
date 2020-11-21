const { Router } = require('express');
const { check, validationResult  } = require('express-validator');
const fs = require('fs');
const path = require('path');
const config = require('config');

// helpers
const router = Router();
const rootPath = path.resolve();

// модели
const User = require('../models/Users');

// api
router.post(
    '/',
    [
        check('namePrev', 'Имя до генерации должно существовать').exists(),
        check('nameNext', 'Имя после генерации должно существовать').exists(),
        check('dataPic', 'Картинка пришла пустая').exists(),
    ],
    async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Пустые поля пришли с фронта',
            });
        }

        const { namePrev, nameNext, dataPic } = req.body;

        // Формирование настоящей пикчи из base64
        const base64String = dataPic;
        const base64Image = base64String.split(';base64,').pop();
        const hashImage = Math.ceil(Math.random() * 1000000000000);

        fs.writeFile(`${rootPath}/images/image${hashImage}.jpg`, base64Image, {encoding: 'base64'}, function(e) {
            console.log('Файлик создан');

            if (e) {
                console.log('Какие то проблемы! Лучше хлебни пивка', e);
            }
        });

        // Запись в базу полей с формы
        const user = new User({ namePrev, nameNext });
        await user.save();

        // Отправляем пикчу на фронт если всё огонёк!
        res.status(201).json(
            { pic: {
                src: `${config.get('baseURL')}/static/images/image${hashImage}.jpg`,
                alt: nameNext
            }}
        );
    }

    catch(e) {
        res.status(500).json({ message: 'Какие то проблемы! Лучше хлебни пивка' })
    }
})

module.exports = router;
