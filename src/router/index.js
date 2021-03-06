import express from 'express';
import { log, debug } from '../';
import auth from '../helper/authentication';
import controller from '../controller';


const router = express.Router();
const validateJWT = auth.validateJWT;

router.route('/signup')
  .post(controller.user.signup);

router.route('/login')
  .post(controller.user.login);

router.route('/github')
  .post(validateJWT, controller.github.post);

router.route('/user')
  .get(validateJWT, controller.user.get)
  // .post(validateJWT, controller.user.addOne);
// .put()
// .delete();

router.route('/company')
  .get(validateJWT, controller.company.get)
  .post(validateJWT, controller.company.post);
//   .put()
//   .delete();

router.route('/company/search')
.post(controller.company.searchPost);

router.route('/contact')
  .get(validateJWT, controller.contact.get)
  .post(validateJWT, controller.contact.post);
//   .put()
//   .delete();

router.route('/job/manual')
  .post(validateJWT, controller.job.manualPost);

router.route('/job')
  .get(validateJWT, controller.job.get)
  .post(validateJWT, controller.job.post);
//   .put()
//   .delete();



router.route('/job/search')
.post(controller.job.searchPost);

router.route('/dashboard')
  .get(validateJWT, controller.dashboard.get);
//   .post()
//   .put()
//   .delete();

router.route('/event')
  .get(validateJWT, controller.event.get)
  .post(validateJWT, controller.event.post);
// .delete();

router.route('/event/activityLog')
  .post(validateJWT, controller.event.activityLogGet);

router.route('/event/activityLogPost')
  .post(validateJWT, controller.event.activityLogPost);

router.route('/resource')
  .get(validateJWT, controller.resource.get);
//   .post()
//   .put()
//   .delete();

router.route('/jobDetail')
  .post(validateJWT, controller.jobDetail.get);
//   .post() 
//   .put()
//   .delete();

router.route('/jobDetailsNotes')
  .put(validateJWT, controller.jobDetailsNotes.put)
  .post(validateJWT, controller.jobDetailsEvents.post);
//   .post() 
//   .put()
//   .delete();

export default router;

