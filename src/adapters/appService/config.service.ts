import { useDispatch } from 'react-redux';

import { getWithPath } from '../api.http';
import { setAppConfig } from '../redux/actions/config';

import { ResponseData } from '../../constant';
import API from '../../constant/api';
import { ApiStatus } from '../../constant/enum';
import { convertToList } from '../../utils';

export function useAppConfig() {
  const dispatch = useDispatch();

  return {
    async getAppConfig(): Promise<ResponseData<any>> {
      const resp = await getWithPath(API.CONFIG.GET.CONFIG);
      // const resp = await mockDashboard().getConfig();
      if (resp.code === ApiStatus.SUCCESS) {
        let data = resp.data;

        data = data.reduce((acc, cur) => {
          const mappingEnumToProps: any = {
            Partner: 'partner_id',
            TrackingStatus: 'tracking_status',
            TrackingSource: 'tracking_source',
            TrackingType: 'tracking_type',
          };
          if (mappingEnumToProps[cur?.enum_name]) {
            const key = mappingEnumToProps[cur?.enum_name];
            acc[key] = cur?.data;
            return acc;
          }
        }, {});

        // map each field of response data to a list and return it
        Object.entries(data).forEach(([key, value]) => {
          const list = convertToList(value, 'value', 'name');
          data[key] = list;
        });

        dispatch(setAppConfig(data));
        return data;
      }
      throw new Error(JSON.stringify(resp));
    },
  };
}
