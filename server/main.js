import { Meteor } from 'meteor/meteor';
import '../imports/api/users';
import { Links } from '../imports/api/links';
import '../imports/startup/simple-schema-configuration';
import { WebApp } from 'meteor/webapp'

Meteor.startup(() => {
    WebApp.connectHandlers.use((req, res, next) => {
        const _id = req.url.slice(0);
        const link = Links.findOne({ _id });
        if (link) {
            res.statusCode = 302;
            res.setHeader('Location', link.url);
            res.end();
        } else {
            next();
        }
    })
});
