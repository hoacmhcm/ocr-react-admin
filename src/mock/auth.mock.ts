import { ResponseData } from '../constant';
import { mockApi } from './mock.helper';

export function mockAuth() {
  return {
    async checkSession(): Promise<ResponseData<any>> {
      return mockApi({
        "user_id": 185931534518532208,
        "name": "MH123",
        "avatar": "https://s240.avatar.talk.zdn.vn/8/6/0/b/6/240/563990042d958ec43e886b5b3a6454f2.jpg",
        "roles": [
          4
        ],
        "is_from_partner": null,
        "partner_type": null,
        "partner_ids": null
      });
    },
    async loginZalo(): Promise<ResponseData<string>> {
      return mockApi('http://localhost:3000/');
    },
    async logout(): Promise<ResponseData<string>> {
      return mockApi('');
    },
  };
}
