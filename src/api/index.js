import {version, name} from '../../package.json';
import {Router} from 'express';

export default () => {
    let api = Router();

    api.get('/', (req, res) => {
        res.json({
            message: "hello world",
            appName: name,
            version
        });
    });

    return api;
}
