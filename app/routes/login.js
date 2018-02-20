import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    window.location.href = "https://pf.babbtx.work:9031/as/authorization.oauth2?client_id=fakebank-ui&response_type=token+id_token";
  }
});
