import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getWithUrl, postWithPath } from '../api.http';
import { setUserInfo } from '../redux/actions/auth';
import { DOMAIN_API_URL, ResponseData } from '../../constant';
import API from '../../constant/api';
import { ApiStatus, ResponseRole, Role } from '../../constant/enum';
import { MESSAGE } from '../../constant/message';
import ROUTE from '../../constant/routes';
import { Auth } from '../../domain/auth';

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return {
    async login(body: {} | undefined): Promise<ResponseData<any>> {
      try {
        const resp = await postWithPath(
          `${API.AUTH.POST.LOGIN}`,
          {},
          body
        );
        if (resp.code === ApiStatus.SUCCESS) {
          navigate(ROUTE.DASHBOARD);
        } else {
          throw new Error(JSON.stringify(resp));
        }
        return resp;
      } catch (e) {
        message.error(MESSAGE.ERROR);
      }
    },
    async checkSession(): Promise<ResponseData<Auth>> {
      const resp = await getWithUrl(
        `${DOMAIN_API_URL}${API.AUTH.GET.CHECK_SESSION}`
      );
      // const resp = await mockAuth().checkSession();

      if (resp.code === ApiStatus.SUCCESS) {
        const auth = resp.data;
        dispatch(setUserInfo(auth));
      } else {
        throw new Error(JSON.stringify(resp));
      }
      return resp;
    },
    async logout(): Promise<ResponseData<any>> {
      const resp = await postWithPath(`${API.AUTH.POST.LOGOUT}`);
      if (resp.code === ApiStatus.SUCCESS) {
        dispatch(
          setUserInfo({
            name: '',
            roles: [],
          })
        );
        navigate(ROUTE.LOGIN);
      } else {
        throw new Error(JSON.stringify(resp));
      }
      return resp;
    },
  };
}
